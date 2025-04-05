from datetime import datetime

def create_user(users_collection, username, password):
    if users_collection.find_one({"username": username}):
        return False
    users_collection.insert_one({
        "username": username,
        "password": password,
        "created_at": datetime.utcnow()
    })
    return True

def verify_user(users_collection, username, password):
    user = users_collection.find_one({"username": username})
    return user and user["password"] == password

def save_chat(chats_collection, username, message, response):
    chats_collection.insert_one({
        "username": username,
        "message": message,
        "response": response,
        "timestamp": datetime.utcnow()
    })

def get_user_chats(chats_collection, username):
    return list(chats_collection.find({"username": username}).sort("timestamp", 1))
