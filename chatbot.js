function botReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("p");
  para.textContent = "🤖 " + message;
  chatBox.appendChild(para);
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const userInput = input.value.toLowerCase().trim();
  input.value = "";

  const time = new Date();
  const day = time.toLocaleDateString("bn-BD", { weekday: "long" });
  const currentTime = time.toLocaleTimeString("bn-BD", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const chatBox = document.getElementById("chat-box");
  const userPara = document.createElement("p");
  userPara.textContent = "🧑‍💬 " + userInput;
  chatBox.appendChild(userPara);

  // প্রশ্ন match করার জন্য শব্দের তালিকা
  const pmWords = ["প্রধানমন্ত্রী", "pm", "pradhanmontri", "prodhanmontri"];
  const cmWords = ["mukhyomontri", "মুখ্যমন্ত্রী", "cm", "banglar mukhyo"];
  const timeWords = ["somoy", "koto", "baje", "time"];
  const dateWords = ["aj", "day", "din", "ajke"];
  const whoMadeWords = ["banieche", "made", "ayan", "create", "creator"];
  const nameWords = ["nam", "name", "tomar nam", "tumi ke"];
  const howWords = ["kemon", "valo", "how are"];
  const whereWords = ["kothay", "location", "thako"];
  const friendWords = ["bondhu", "friend"];
  const capitalWords = ["rajdhani", "capital"];
  const ayanPlaceWords = ["ayan", "thake", "kothay"];
  const languageWords = ["bhasha", "language"];
  const countryWords = ["desh", "country", "bharot", "india"];
  const aiWords = ["ai", "robot", "artificial"];
  const presidentWords = ["rashtrapoti", "president", "রাষ্ট্রপতি"];
  const loveWords = ["valobashi", "bhalobashi", "love", "biye"];
  const jokeWords = ["joke", "hasi", "funny", "mojar"];

  if (["exit", "bye", "biday"].some(w => userInput.includes(w))) {
    botReply("বিদায়! আবার দেখা হবে 😊");
  } else if (["hello", "hii", "হাই", "হ্যালো", "hey"].some(w => userInput.includes(w))) {
    botReply("হ্যালো! কীভাবে সাহায্য করতে পারি? 😊");
  } else if (nameWords.some(w => userInput.includes(w))) {
    botReply("আমার নাম ChatBot! আমি অয়নের তৈরি ডিজিটাল বন্ধু 🤖");
  } else if (whoMadeWords.some(w => userInput.includes(w))) {
    botReply("আমাকে বানিয়েছেন অয়ন মহাপাত্র — একজন প্রতিভাবান ছাত্র! 👨‍💻");
  } else if (howWords.some(w => userInput.includes(w))) {
    botReply("আমি ভালো আছি, তুমি কেমন আছো?");
  } else if (whereWords.some(w => userInput.includes(w))) {
    botReply("আমি ইন্টারনেটে থাকি 🌐");
  } else if (dateWords.some(w => userInput.includes(w))) {
    botReply("আজ " + day + "।");
  } else if (timeWords.some(w => userInput.includes(w))) {
    botReply("এখন সময়: " + currentTime);
  } else if (friendWords.some(w => userInput.includes(w))) {
    botReply("অবশ্যই! আমি তোমার ডিজিটাল বন্ধু 🤝");
  } else if (pmWords.some(w => userInput.includes(w))) {
    botReply("ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳");
  } else if (cmWords.some(w => userInput.includes(w))) {
    botReply("পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জী 🧕");
  } else if (capitalWords.some(w => userInput.includes(w))) {
    botReply("ভারতের রাজধানী হল নতুন দিল্লি 🏙️");
  } else if (ayanPlaceWords.some(w => userInput.includes(w))) {
    botReply("অয়ন থাকেন পশ্চিম মেদিনীপুর জেলার নারায়ণগড় থানার বিরবিরা গ্রামে 🏡");
  } else if (languageWords.some(w => userInput.includes(w))) {
    botReply("ভারতের প্রধান ভাষা হিন্দি 🇮🇳 এবং অনেক রাজ্যে নিজস্ব ভাষা রয়েছে। পশ্চিমবঙ্গে বাংলা 🗣️");
  } else if (countryWords.some(w => userInput.includes(w))) {
    botReply("আমি ভারতের নাগরিকদের জন্য তৈরি একটি চ্যাটবট 🇮🇳");
  } else if (aiWords.some(w => userInput.includes(w))) {
    botReply("হ্যাঁ! আমি কৃত্রিম বুদ্ধিমত্তা (AI)-এর উপর তৈরি 🤖");
  } else if (presidentWords.some(w => userInput.includes(w))) {
    botReply("ভারতের রাষ্ট্রপতি হলেন দ্রৌপদী মুর্মু 🙏");
  } else if (loveWords.some(w => userInput.includes(w))) {
    botReply("আমি AI, ভালোবাসা বা বিয়ে আমার কাজ না 😅");
  } else if (jokeWords.some(w => userInput.includes(w))) {
    botReply("একজন বললো, আমি পড়া মুখস্থ করতে পারি না। বই বললো — আমি তোর পেটে ঢুকবো না, মাথায় ঢুক 😜");
  } else {
    botReply("দুঃখিত, আমি এটা বুঝতে পারিনি। অনুগ্রহ করে সহজভাবে আবার বলো 😊");
  }
}
