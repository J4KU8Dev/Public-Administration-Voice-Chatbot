function startVoice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Twoja przeglądarka nie obsługuje rozpoznawania mowy.");
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

function speak(text){

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "pl-PL";

    window.speechSynthesis.speak(speech);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  const message = input.value.trim();

  if (message === "") {
    alert("Wpisz wiadomość.");
    return;
  }

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = message;

  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";

  const text = message.toLowerCase();

  if (text.includes("kontakt")) {
    botMessage.textContent =
      "Skontaktuj się z urzędem przez formularz kontaktowy.";
  } else if (text.includes("godziny")) {
    botMessage.textContent =
      "Urząd pracuje od poniedziałku do piątku w godzinach 8:00–16:00.";
  } else {
    botMessage.textContent = "Nie mogę potwierdzić tej informacji.";
  }
  speak(botMessage.textContent);
  chatBox.appendChild(botMessage);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}
