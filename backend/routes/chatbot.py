from flask import Blueprint, request, jsonify
from ai.prompt import SYSTEM_PROMPT

chatbot_bp = Blueprint('chatbot', __name__)

# Lazy-initialized so the app can start and bind to PORT on low-memory (e.g. Render free tier).
# ChromaDB + embedding model load only on first chatbot request.
_rag_engine = None
_llm_client = None


def _get_rag_engine():
    global _rag_engine
    if _rag_engine is None:
        from ai.rag import RAGEngine
        _rag_engine = RAGEngine()
    return _rag_engine


def _get_llm_client():
    global _llm_client
    if _llm_client is None:
        from ai.llm import get_llm_client
        _llm_client = get_llm_client()
    return _llm_client


@chatbot_bp.route('/chatbot', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({"error": "Message is required"}), 400
        
    try:
        rag_engine = _get_rag_engine()
        llm_client = _get_llm_client()
        # 1. Retrieve relevant context
        context_chunks = rag_engine.query(user_message, n_results=9)
        context_text = "\n\n".join(context_chunks)
        
        # 2. Format the system prompt
        formatted_system_prompt = SYSTEM_PROMPT.format(context=context_text)
        
        # 3. Generate response
        response = llm_client.generate_response(
            prompt=user_message,
            system_prompt=formatted_system_prompt
        )
        
        return jsonify({"reply": response})
        
    except MemoryError:
        print("Chatbot OOM: consider using a Render instance with more RAM (e.g. Starter 512MB+).")
        return jsonify({"reply": "The assistant is temporarily overloaded. Please try again in a moment."}), 503
    except Exception as e:
        print(f"Chatbot Error: {e}")
        return jsonify({"reply": "I apologize, but I'm encountering a technical issue right now."}), 500
