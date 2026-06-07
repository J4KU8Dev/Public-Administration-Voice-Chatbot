# Public Administration Voice Chatbot

## Overview

This project is a simple responsive web chatbot created using HTML5, CSS3 and JavaScript.

The application demonstrates:

- Basic chatbot functionality
- Voice input using speech recognition
- Voice output using speech synthesis
- FAQ section
- Contact form
- Responsive web design

The project was developed for educational purposes as part of a Responsive Web Design assignment.

---

## Features

### Chat Interface

Users can:

- Type messages in the chat window
- Send questions to the chatbot
- Receive automated responses

### Voice Assistant

The application supports voice interaction through the browser:

- Speech-to-Text (voice input)
- Text-to-Speech (voice output)
- Microphone support

Users can click the microphone button and ask a question using their voice.

### FAQ Section

Provides answers to common questions regarding public administration services.

### Contact Form

Includes:

- Name field
- Email field
- Message field
- HTML5 validation

### Responsive Design

The application adapts to:

- Desktop devices
- Tablets
- Smartphones

---

## Technologies

- HTML5
- CSS3
- JavaScript
- Web Speech API

---

## Project Structure

```text
project/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
```

---

## How It Works

### Keyword-Based Responses

The chatbot recognizes specific keywords and returns predefined answers.

Supported keywords:

| Keyword | Response |
|----------|----------|
| kontakt | Contact information |
| godziny | Office working hours |

For any unknown question, the chatbot responds with:

```text
Nie mogę potwierdzić tej informacji.
```

### Voice Recognition

The application uses the browser Speech Recognition API.

Workflow:

1. User clicks the microphone button.
2. Speech is converted into text.
3. The text is automatically inserted into the chat.
4. The message is sent to the chatbot.

### Voice Responses

The application uses the Speech Synthesis API.

Every chatbot response is automatically read aloud.

---

## Running the Project

### Using a Browser

1. Download or clone the repository.
2. Open `index.html`.
3. Start chatting.

### Using VS Code

1. Open the project folder.
2. Install the Live Server extension.
3. Run `index.html` using Live Server.

---

## Testing

The following scenarios were tested:

| Test | Result |
|--------|--------|
| Empty message | Passed |
| Keyword "kontakt" | Passed |
| Keyword "godziny" | Passed |
| Unknown question | Passed |
| Voice recognition | Passed |
| Voice synthesis | Passed |
| Mobile layout | Passed |
| Tablet layout | Passed |
| Desktop layout | Passed |
| Contact form validation | Passed |

---

## Browser Compatibility

Best supported browsers:

- Google Chrome
- Microsoft Edge

Note: Speech Recognition may not be available in all browsers.

---

## Future Improvements

Possible future enhancements:

- AI API integration
- Database connection
- User authentication
- Conversation history
- Email notifications
- PSTN/VoIP integration
- Multi-language support

---

## Screenshots

![View](/screenshots/1.png)

![Responsive web design](/screenshots/2.png)


## Authors
- Maciej Markowski
- Mateusz Ślązkiewicz
- Jakub Rafalski

Educational project demonstrating responsive web development and browser-based voice assistant functionality using HTML5, CSS3 and JavaScript.