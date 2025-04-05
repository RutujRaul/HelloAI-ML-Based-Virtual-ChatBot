import os

class Config:
    SECRET_KEY = "340a3a8a8e9b2d9abfd4596f42e35db7"
    MONGO_URI = "mongodb://localhost:27017/helloai"
    SESSION_TYPE = "filesystem"  # ← Add this line to fix the error
