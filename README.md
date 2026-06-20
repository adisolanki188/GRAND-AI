# 🤖 GRAND AI

A modern AI chatbot built with Flask, HTML, CSS, and JavaScript, powered by Google Gemini API.

GRAND AI provides a clean, responsive, and mobile-friendly chat interface for interacting with AI models through official APIs.

--
## 🚀 Live page

**https://grand-ai-6ij6.onrender.com**

## ✨ Features

* **🎨 Modern UI Design**
* **📱 Mobile-Friendly Interface**
* **⚡ Fast AI Responses**
* **🤖 Google Gemini Integration**
* **🌙 Dark Theme**
* **⌨️ Typing Indicator**
* **🔄 Auto Scroll Chat**
* **🔒 Secure API Key Management**
* **☁️ Easy Deployment on Render**

--

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Python
- Flask

**AI Provider**
- Google Gemini API

--

## 📂 Project Structure

GRAND-AI/
│
├── app.py
├── requirements.txt
├── Procfile
├── .env
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── LICENSE
└── README.md

--

## 🚀 Installation

**Clone Repository**
git clone https://github.com/your-username/GRAND-AI.git
cd GRAND-AI

**Create Virtual Environment**
python -m venv venv

**Activate Virtual Environment**
Windows
venv\Scripts\activate
Linux / macOS
source venv/bin/activate

**Install Dependencies**
pip install -r requirements.txt

--

## 🔑 Environment Variables

Create a ".env" file in the root directory:
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Never share or upload your API key to GitHub.

---

## ▶️ Run Locally

python app.py
Open:
http://127.0.0.1:5000

--

## ☁️ Deploy on Render

**Build Command**
pip install -r requirements.txt
**Start Command**
gunicorn app:app
**Environment Variables**
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Deploy and access your application through the Render-generated URL.

--

## 🔒 Security

Add the following to ".gitignore":
.env
venv/
__pycache__/
*.pyc

**Important**
- Never commit API keys.
- Never expose secrets in frontend code.
- Use environment variables for all sensitive information.

--

## 📸 Screenshots

Add screenshots here after deployment.

![Home Page](screenshots/home.png)
![Chat Interface](screenshots/chat.png)

--

## ⚠️ Disclaimer

This project is intended for educational and development purposes.

- GRAND AI is an independent project.
- It is not affiliated with, endorsed by, or sponsored by Google, OpenAI, Anthropic, or any other AI provider.
- Users are responsible for complying with the Terms of Service of any third-party APIs they use.
- No proprietary AI models, API keys, or paid services are included in this repository.

--

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit pull requests.

--

## 👨‍💻 Author

**Adi Solanki**

--

**⭐ If you find GRAND AI useful, please consider starring the repository.**
