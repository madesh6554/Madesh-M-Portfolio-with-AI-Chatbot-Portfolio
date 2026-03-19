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
    def __init__(self, api_key=None, model="gemini-1.5-flash"):
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

class GroqClient(LLMClient):
    def __init__(self, api_key=None, model="llama-3.3-70b-versatile"):
        # Groq's API is OpenAI-compatible
        from openai import OpenAI
        self.api_key = api_key or os.getenv("GROQ_API_KEY")
        self.client = OpenAI(
            base_url="https://api.groq.com/openai/v1",
            api_key=self.api_key
        )
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
            print(f"Groq Error: {e}")
            return f"Error connecting to AI (Groq): {str(e)}"

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
            error_msg = str(e)
            print(f"HuggingFace Error: {error_msg}")
            if "402" in error_msg or "depleted" in error_msg:
                return "AI Status: Your Hugging Face monthly credit limit has been reached. Please add a GEMINI_API_KEY (Free at Google AI Studio) to your .env file to continue using the chatbot."
            return f"Error connecting to AI (HuggingFace): {error_msg}"

def get_llm_client():
    """Use provider from .env or auto-detect based on available keys."""
    provider = (os.getenv("LLM_PROVIDER") or "").strip().lower()
    has_groq = bool(os.getenv("GROQ_API_KEY"))
    has_gemini = bool(os.getenv("GEMINI_API_KEY"))
    has_openai = bool(os.getenv("OPENAI_API_KEY"))
    has_hf = bool(os.getenv("HUGGINGFACE_API_KEY"))

    # Explicitly requested provider
    if provider == "groq" and has_groq:
        print("--- Active LLM Provider: Groq ---")
        return GroqClient()
    if provider == "gemini" and has_gemini:
        print("--- Active LLM Provider: Gemini ---")
        return GeminiClient()
    if provider == "openai" and has_openai:
        print("--- Active LLM Provider: OpenAI ---")
        return OpenAIClient(model="gpt-4o-mini")
    if provider == "huggingface" and has_hf:
        print("--- Active LLM Provider: HuggingFace ---")
        return HuggingFaceClient()

    # Default logic: Groq is preferred if available (highest limits), then Gemini
    if has_groq:
        print("--- Active LLM Provider: Groq (Auto) ---")
        return GroqClient()
    if has_gemini:
        print("--- Active LLM Provider: Gemini (Auto) ---")
        return GeminiClient()
    if has_openai:
        return OpenAIClient(model="gpt-4o-mini")
    if has_hf:
        return HuggingFaceClient()

    print("Warning: No LLM API key found. Defaulting to empty fallback.")
    class NoKeyClient(LLMClient):
        def generate_response(self, prompt: str, system_prompt: str) -> str:
            return "The assistant is not configured: Please add a GEMINI_API_KEY to your .env file (Get one for free at https://aistudio.google.com/app/apikey)."
    return NoKeyClient()
