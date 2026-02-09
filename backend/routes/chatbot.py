from flask import Blueprint, request, jsonify
from ai.rag import RAGEngine
from ai.llm import get_llm_client
from ai.prompt import SYSTEM_PROMPT

chatbot_bp = Blueprint('chatbot', __name__)

# Initialize AI components
# We initialize them here so they are ready when the app starts
rag_engine = RAGEngine()
llm_client = get_llm_client()

@chatbot_bp.route('/chatbot', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({"error": "Message is required"}), 400
        
    try:
        # 1. Retrieve relevant context
        # We search for top 5 relevant chunks for more comprehensive answers
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
        
    except Exception as e:
        print(f"Chatbot Error: {e}")
        return jsonify({"reply": "I apologize, but I'm encountering a technical issue right now."}), 500
