# HelloAI - ML-Based Virtual ChatBot 🤖

HelloAI is a local, ML-based chatbot built with Flask (Python), MongoDB, and ReactJS. It interacts using LLMs like Mistral via Ollama locally. This project is suitable for final year students and portfolio/placement projects.

---

## ✨ Features

- 🔐 User Authentication (Signup/Login/Logout)
- 💬 Interactive Chat Interface
- 🤖 LLM-powered AI Responses (via Ollama)
- 🧠 MongoDB chat history
- 🚀 Fast & Secure local architecture
- 🖥️ Clean, responsive UI with animations

---

## 🛠 Tech Stack

- **Frontend:** ReactJS
- **Backend:** Flask (Python 3.13.2)
- **Database:** MongoDB
- **LLM Engine:** Ollama + Mistral

---

## ⚙️ Setup Instructions

### 1. Clone Repository

git clone https://github.com/YOUR_USERNAME/helloai-chatbot.git
cd helloai-chatbot
---
### 2. Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py


### 3. Frontend Setup
cd ../frontend
npm install
npm start

----

### 🔐 Authentication Flow
Uses session-based auth via Flask-Session

Auth state is managed in React Context + LocalStorage

### License 
This project is licensed under the MIT License. See LICENSE for details.
