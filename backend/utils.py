from flask import session, jsonify

def require_login():
    if "username" not in session:
        return jsonify({"success": False, "message": "Unauthorized"}), 401
