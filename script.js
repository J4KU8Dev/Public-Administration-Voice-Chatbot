function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "pl-PL";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.cancel(); // usuwa nakładanie głosów
  window.speechSynthesis.speak(speech);
}

async function sendMessage() {
  console.log("SEND MESSAGE START");
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  const message = input.value.trim();

  if (!message) {
    alert("Wpisz wiadomość.");
    return;
  }

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);

  const res = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();

  const reply = data.reply;

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";
  botMessage.textContent = reply;

  chatBox.appendChild(botMessage);

  speak(reply);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function startVoice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Brak obsługi mowy");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "pl-PL";

  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;

    document.getElementById("userInput").value = transcript;
    sendMessage();
  };
}
