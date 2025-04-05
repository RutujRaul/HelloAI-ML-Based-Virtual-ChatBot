from flask import Blueprint, request, session, jsonify
from database import users_collection
from models import create_user, verify_user

def register_auth_routes(app):
    @app.route("/api/signup", methods=["POST"])
    def signup():
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")
        if not username or not password:
            return jsonify({"success": False, "message": "Missing credentials"}), 400
        if create_user(users_collection, username, password):
            return jsonify({"success": True, "message": "User created"})
        return jsonify({"success": False, "message": "Username already exists"}), 409

    @app.route("/api/login", methods=["POST"])
    def login():
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")
        if verify_user(users_collection, username, password):
            session["username"] = username
            return jsonify({"success": True, "message": "Login successful"})
        return jsonify({"success": False, "message": "Invalid credentials"}), 401

    @app.route("/api/logout", methods=["POST"])
    def logout():
        session.pop("username", None)
        return jsonify({"success": True, "message": "Logged out"})
