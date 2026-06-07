# Public Administration Voice Chatbot (AI Enhanced)

## Overview


![1](/screenshots/1.png)
![2](/screenshots/2.png)

This project is a responsive web-based voice chatbot that combines:
- browser speech recognition
- speech synthesis
- a Node.js backend
- AI-powered responses (OpenRouter / Gemini / Groq depending on configuration)

The application evolves from a simple keyword-based chatbot into a full AI voice assistant capable of natural conversation.

It was developed for educational purposes as part of a web development and AI integration project.

---

## Features

### Chat Interface

Users can:
- type messages manually
- receive AI-generated responses in real time
- interact in a conversational format

---

### Voice Assistant

The application supports full voice interaction:

- Speech-to-Text (voice input via microphone)
- Text-to-Speech (AI responses read aloud)
- hands-free conversation flow

Workflow:
1. User speaks into microphone
2. Speech is converted to text
3. Message is sent to backend API
4. AI generates response
5. Response is spoken back to the user

---

### AI Integration

The chatbot is powered by external AI APIs via a Node.js backend.

Supported providers:
- OpenRouter (various LLM models)
- Google Gemini (alternative backend)
- Groq (optional high-speed inference)

The AI provides contextual and dynamic responses instead of predefined rules.

---

### Backend (Node.js + Express)

The backend handles:
- API requests from frontend
- communication with AI providers
- response formatting

---

### Responsive Design

The interface adapts to:
- desktop
- tablet
- mobile devices

---


## Technologies

- HTML5
- CSS3
- JavaScript (frontend)
- Web Speech API
- Node.js
- Express.js
- AI APIs (OpenRouter / Gemini / Groq)

---
## Project Structure

```text
project/
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── index.html
├── style.css
├── script.js
└── README.md

```

## Authors

This project was developed as part of a collaborative educational assignment.

- **Jakub Rafalski** – Frontend development, voice interface (Speech Recognition & Speech Synthesis), AI integration
- **Maciej Markowski** – UI/UX design, HTML/CSS structure, responsive layout
- **Mateusz Ślązkiewicz** – Project coordination, documentation, testing and feature validation