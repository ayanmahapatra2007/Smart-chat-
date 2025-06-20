function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  addMessage("👤 আপনি", userInput);
  const reply = getBotReply(userInput.toLowerCase());
  addMessage("🤖 AyanBot", reply);

  document.getElementById("user-input").value = "";
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("p");
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const today = new Date();
  const time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const day = today.toLocaleDateString('bn-BD', { weekday: 'long' });

  if (input.includes("hii") || input.includes("hello") || input.includes("hey")) {
    return "হ্যালো! আপনার সাথে কথা বলে ভালো লাগছে 😊";
  } else if (input.includes("tomar nam") || input.includes("what is your name")) {
    return "আমার নাম AyanBot! 🤖";
  } else if (input.includes("tomake ke baniyeche") || input.includes("who made you")) {
    return "আমাকে তৈরি করেছে অয়ন মহাপাত্র। 🛠️";
  } else if (input.includes("kemon acho") || input.includes("how are you")) {
    return "আমি ভালো আছি, আপনি কেমন আছেন? 😊";
  } else if (input.includes("ayan ke")) {
    return "অয়ন মহাপাত্র একজন ছাত্র যিনি এই চ্যাটবট বানিয়েছেন। 🧠";
  } else if (input.includes("ki paro") || input.includes("what can you do")) {
    return "আমি কিছু সহজ প্রশ্নের উত্তর দিতে পারি। আপনার প্রশ্ন করুন!";
  } else if (input.includes("kon din aaj")) {
    return `আজ ${day}`;
  } else if (input.includes("somoy koto holo") || input.includes("time now")) {
    return `এখন সময়: ${time}`;
  } else if (input.includes("exit")) {
    return "বিদায়! ভালো থাকবেন 😊";
  } else {
    return "দুঃখিত, আমি বুঝতে পারিনি। অনুগ্রহ করে আবার বলুন। 🙏";
  }
}
