from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_session import Session
from config import Config
from database import users_collection, chats_collection
from models import save_chat, get_user_chats
from chatbot import get_ai_response
from auth import register_auth_routes
from utils import require_login

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, supports_credentials=True)
Session(app)

register_auth_routes(app)

@app.route("/api/chat", methods=["POST"])
def chat():
    if "username" not in session:
        return require_login()
    data = request.get_json()
    message = data.get("message")
    response = get_ai_response(message)
    save_chat(chats_collection, session["username"], message, response)
    return jsonify({"message": message, "response": response})

@app.route("/api/chats", methods=["GET"])
def get_chats():
    if "username" not in session:
        return require_login()
    chats = get_user_chats(chats_collection, session["username"])
    return jsonify([{
        "message": chat["message"],
        "response": chat["response"],
        "timestamp": chat["timestamp"].isoformat()
    } for chat in chats])

@app.route("/api/check_session")
def check_session():
    return jsonify({"loggedIn": "user_id" in session})

if __name__ == "__main__":
    app.run(debug=True)
