import os
import glob
from flask import Blueprint, request, jsonify
from ai.prompt import SYSTEM_PROMPT

chatbot_bp = Blueprint('chatbot', __name__)

# Lightweight path: no ChromaDB so it works on Render free tier (512MB).
_llm_client = None
_SIMPLE_CONTEXT_CACHE = None
_MAX_SIMPLE_CONTEXT_CHARS = 40000


def _get_simple_context():
    """Load all .txt from data/ and return concatenated text. No ChromaDB, no heavy model."""
    global _SIMPLE_CONTEXT_CACHE
    if _SIMPLE_CONTEXT_CACHE is not None:
        return _SIMPLE_CONTEXT_CACHE
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_path = os.path.join(base_dir, "data")
    parts = []
    total = 0
    if os.path.exists(data_path):
        for path in sorted(glob.glob(os.path.join(data_path, "*.txt"))):
            if total >= _MAX_SIMPLE_CONTEXT_CHARS:
                break
            try:
                with open(path, "r", encoding="utf-8") as f:
                    text = f.read()
                take = min(len(text), _MAX_SIMPLE_CONTEXT_CHARS - total)
                parts.append(text[:take] if take < len(text) else text)
                total += len(parts[-1])
            except Exception as e:
                print(f"Error reading {os.path.basename(path)}: {e}")
    _SIMPLE_CONTEXT_CACHE = "\n\n".join(parts) if parts else "No portfolio data loaded."
    return _SIMPLE_CONTEXT_CACHE


def _get_llm_client():
    global _llm_client
    if _llm_client is None:
        from ai.llm import get_llm_client
        _llm_client = get_llm_client()
    return _llm_client


@chatbot_bp.route('/chatbot', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = (data or {}).get('message', '').strip()
    
    if not user_message:
        return jsonify({"error": "Message is required"}), 400
        
    try:
        context_text = _get_simple_context()
        formatted_system_prompt = SYSTEM_PROMPT.format(context=context_text)
        llm_client = _get_llm_client()
        response = llm_client.generate_response(
            prompt=user_message,
            system_prompt=formatted_system_prompt
        )
        return jsonify({"reply": response})
    except Exception as e:
        print(f"Chatbot Error: {e}")
        return jsonify({"reply": "I apologize, but I'm encountering a technical issue right now. Please try again in a moment."}), 500
