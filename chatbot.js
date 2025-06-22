function botReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("p");
  para.textContent = "🤖 " + message;
  chatBox.appendChild(para);
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const userInputRaw = input.value.trim();
  const userInput = userInputRaw.toLowerCase();
  input.value = "";

  const chatBox = document.getElementById("chat-box");
  const userPara = document.createElement("p");
  userPara.textContent = "🧑‍💬 " + userInputRaw;
  chatBox.appendChild(userPara);

  const time = new Date();
  const currentTime = time.toLocaleTimeString("bn-BD", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const currentDay = time.toLocaleDateString("bn-BD", {
    weekday: "long"
  });

  const match = (...keywords) => keywords.some(k => userInput.includes(k));

  if (match("hello", "hii", "হাই", "হ্যালো", "hey")) {
    botReply("হ্যালো! কেমন আছো? 😊");
  } else if (match("tomar nam", "tumi ke", "your name", "nam ki", "tomar naam")) {
    botReply("আমার নাম ChatBot, অয়নের বানানো স্মার্ট বন্ধু 🤖");
  } else if (match("banieche", "banayechhe", "toiri koreche", "made you", "creator", "ami ke banai", "tomake ke baniye", "ke baniyeche")) {
    botReply("আমাকে তৈরি করেছে অয়ন মহাপাত্র 🛠️");
  } else if (match("aj ki din", "kon din", "aaj", "ajke", "ki din", "ki diner nam")) {
    botReply("আজ " + currentDay + "।");
  } else if (match("somoy", "koto baje", "time", "ekhon koto", "bela")) {
    botReply("এখন সময় " + currentTime + "।");
  } else if (match("pm", "pradhanmontri", "প্রধানমন্ত্রী", "modi")) {
    botReply("ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳");
  } else if (match("cm", "mukhyomontri", "মুখ্যমন্ত্রী", "mamata", "mamata banerjee")) {
    botReply("পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জী 🧕");
  } else if (match("bajar", "rasayan", "acid", "kon fole kon acid", "komlar acid", "apple", "malic", "citric")) {
    botReply("কমলাতে সাইট্রিক অ্যাসিড, আপেলে ম্যালিক অ্যাসিড, আঙুরে টারটারিক অ্যাসিড থাকে। এগুলো হজমে সহায়ক ও রোগ প্রতিরোধে সাহায্য করে 🧪");
  } else if (match("pakhir nam", "posur nam", "mach", "gacher nam", "scientific name", "bagh", "catla")) {
    botReply("রয়্যাল বেঙ্গল টাইগার – Panthera tigris tigris 🐅, কাতলা মাছ – Catla catla 🐟, পদ্মফুল – Nelumbo nucifera 🌸");
  } else if (match("wbjee", "রেজাল্ট", "result", "exam", "board")) {
    botReply("WBJEE 2025-এর ফলাফল এখনো প্রকাশ হয়নি। সাধারণত জুনের শেষ সপ্তাহে রেজাল্ট আসে 📅");
  } else if (match("ayan kothay", "ayan thake", "ayan ke", "ayan")) {
    botReply("অয়ন পশ্চিম মেদিনীপুর জেলার নারায়ণগড় থানার বিরবিরা গ্রামে থাকেন 🏡");
  } else if (match("rajjo", "west bengal", "bangla", "university", "bengal")) {
    botReply("পশ্চিমবঙ্গে প্রায় ৩০টির বেশি বিশ্ববিদ্যালয় রয়েছে, যেমন কলকাতা বিশ্ববিদ্যালয়, যাদবপুর, বর্ধমান ইত্যাদি 🎓");
  } else if (match("national animal", "জাতীয় পশু", "জাতীয় ফুল", "জাতীয় ফল", "national", "bagh", "padma", "aam", "mayur")) {
    botReply("ভারতের জাতীয় পশু – রয়্যাল বেঙ্গল টাইগার 🐅, ফুল – পদ্ম 🌸, ফল – আম 🥭, পাখি – ময়ূর 🦚, খেলা – হকি 🏑");
  } else if (match("doya kore", "bhalobashi", "biye", "bondhu")) {
    botReply("আমি AI! বন্ধুত্ব করতে পারি, কিন্তু বিয়ে বা ভালোবাসা আমার কাজ না 😅");
  } else if (match("thanks", "dhonnobad", "thank you")) {
    botReply("তোমাকেও ধন্যবাদ! 😊");
  } else {
    botReply("Ayan amake eta sekhayni, ami pore bole debo 🙂");
  }
}
