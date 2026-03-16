import os
import json
from abc import ABC, abstractmethod
import openai
import google.generativeai as genai

class LLMClient(ABC):
    @abstractmethod
    def generate_response(self, prompt: str, system_prompt: str) -> str:
        pass

class OpenAIClient(LLMClient):
    def __init__(self, api_key=None, model="gpt-4o-mini"):
        self.client = openai.OpenAI(api_key=api_key or os.getenv("OPENAI_API_KEY"))
        self.model = model

    def generate_response(self, prompt: str, system_prompt: str) -> str:
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt}
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"OpenAI Error: {e}")
            return f"Error connecting to AI: {str(e)}"

class GeminiClient(LLMClient):
    def __init__(self, api_key=None, model="models/gemini-1.5-flash"):
        genai.configure(api_key=api_key or os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel(model)

    def generate_response(self, prompt: str, system_prompt: str) -> str:
        try:
            full_prompt = f"{system_prompt}\n\nUser Query: {prompt}"
            response = self.model.generate_content(full_prompt)
            return response.text
        except Exception as e:
            print(f"Gemini Error: {e}")
            return f"Error connecting to AI: {str(e)}"

class HuggingFaceClient(LLMClient):
    def __init__(self, api_key=None, model="Qwen/Qwen2.5-7B-Instruct"):
        from huggingface_hub import InferenceClient
        self.api_key = api_key or os.getenv("HUGGINGFACE_API_KEY")
        self.model = model
        self.client = InferenceClient(api_key=self.api_key)

    def generate_response(self, prompt: str, system_prompt: str) -> str:
        try:
            messages = [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ]
            
            response = self.client.chat_completion(
                model=self.model,
                messages=messages,
                max_tokens=500
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            print(f"HuggingFace Error: {e}")
            return f"Error connecting to AI: {str(e)}"

def get_llm_client():
    """Use provider from .env or auto-detect based on available keys."""
    provider = (os.getenv("LLM_PROVIDER") or "").strip().lower()
    has_gemini = bool(os.getenv("GEMINI_API_KEY"))
    has_openai = bool(os.getenv("OPENAI_API_KEY"))
    has_hf = bool(os.getenv("HUGGINGFACE_API_KEY"))

    # Explicitly requested provider
    if provider == "gemini" and has_gemini:
        return GeminiClient()
    if provider == "openai" and has_openai:
        return OpenAIClient(model="gpt-4o-mini")
    if provider == "huggingface" and has_hf:
        return HuggingFaceClient()

    # Default logic: Gemini is preferred now because it has a better free tier for tools
    if has_gemini:
        return GeminiClient()
    if has_openai:
        return OpenAIClient(model="gpt-4o-mini")
    if has_hf:
        return HuggingFaceClient()

    print("Warning: No LLM API key found. Defaulting to empty fallback.")
    class NoKeyClient(LLMClient):
        def generate_response(self, prompt: str, system_prompt: str) -> str:
            return "The assistant is not configured: add GEMINI_API_KEY (Free at Google AI Studio) to your .env file."
    return NoKeyClient()
