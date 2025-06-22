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

  const includes = (...keywords) => keywords.some(k => userInput.includes(k));

  // সাধারণ প্রশ্ন
  if (includes("exit", "bye", "biday", "ber hoye jao")) {
    botReply("বিদায়! আবার দেখা হবে 😊");
  } else if (includes("hello", "hii", "হাই", "হ্যালো", "hey")) {
    botReply("হ্যালো! কেমন আছো? প্রশ্ন করতে পারো 😊");
  } else if (includes("tomar nam", "tumi ke", "your name", "nam ki")) {
    botReply("আমার নাম ChatBot, অয়নের ডিজিটাল বন্ধু 🤖");
  } else if (includes("banieche", "made you", "ke baniyeche", "creator", "toiri", "banalo", "ke toke", "ke toiri")) {
    botReply("আমাকে তৈরি করেছেন অয়ন মহাপাত্র — একজন উদ্যমী ছাত্র 👨‍💻");
  } else if (includes("kemon acho", "valo acho", "how are", "kamon achish")) {
    botReply("আমি ভালো আছি! তুমিও ভালো থেকো 😊");
  } else if (includes("kothay thako", "location", "thako", "tumi kothay", "thakis")) {
    botReply("আমি ইন্টারনেটে থাকি 🌐 সব জায়গা থেকেই দেখা যায়!");
  } else if (includes("aj ki din", "kon din", "aaj", "ajke", "ki din")) {
    botReply("আজ " + day + "।");
  } else if (includes("somoy", "koto baje", "time", "ekhon koto", "kolota")) {
    botReply("এখন সময়: " + currentTime);
  } else if (includes("bondhu", "friend", "amar bondhu")) {
    botReply("অবশ্যই! আমি তোমার ডিজিটাল বন্ধু 🤝");
  } else if (includes("pradhanmontri", "pm", "ভারতের প্রধানমন্ত্রী", "modi")) {
    botReply("ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳");
  } else if (includes("mukhyomontri", "cm", "বাংলার মুখ্যমন্ত্রী", "mamata")) {
    botReply("পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জী 🧕");
  } else if (includes("rajdhani", "capital", "capital city")) {
    botReply("ভারতের রাজধানী হল নতুন দিল্লি 🏙️");
  } else if (includes("ayan kothay", "ayan thake", "ayan ke", "creator kothay")) {
    botReply("অয়ন পশ্চিম মেদিনীপুর জেলার নারায়ণগড় থানার বিরবিরা গ্রামে থাকেন 🏡");
  } else if (includes("bhasha", "language", "বাংলার ভাষা", "bharoter bhasha")) {
    botReply("ভারতের প্রধান ভাষা হিন্দি 🇮🇳 এবং পশ্চিমবঙ্গে বাংলা 🗣️");
  } else if (includes("desh", "country", "india", "bharot")) {
    botReply("আমি ভারতের নাগরিকদের সাহায্যের জন্য তৈরি 🇮🇳");
  } else if (includes("ai", "robot", "artificial", "machine", "smart")) {
    botReply("হ্যাঁ, আমি কৃত্রিম বুদ্ধিমত্তার উপর ভিত্তি করে বানানো একটি চ্যাটবট 🤖");
  } else if (includes("president", "rashtrapoti", "রাষ্ট্রপতি")) {
    botReply("ভারতের রাষ্ট্রপতি হলেন দ্রৌপদী মুর্মু 🙏");
  } else if (includes("valobashi", "love", "biye", "bhalobasi")) {
    botReply("আমি AI! ভালোবাসা আর বিয়ে আমার কাজ না 😅");
  } else if (includes("joke", "funny", "mojar", "hasir")) {
    botReply("একজন বলল, আমার পেট খারাপ। আমি বললাম — পেটের ওপর তো তোমার খুব বিশ্বাস 😅");
  } else if (includes("tomar boyosh", "boyosh", "age", "kotobochor")) {
    botReply("আমি সময়ের সাথে সাথে আপডেট হই — বয়সে অসীম 😊");
  } else if (includes("kaj ki", "tumi ki paro", "ki paro", "kam ki", "kaja")) {
    botReply("আমি প্রশ্নের উত্তর দিতে পারি, বন্ধু হতে পারি, তথ্য দিতে পারি, আর মজা করতে পারি! 💬🤖");

  // বিজ্ঞানসম্মত নাম ও উপকারিতা
  } else if (includes("bager nam", "bager biggan sommoto nam", "bagh", "tiger name")) {
    botReply("বাঘের বিজ্ঞানসম্মত নাম: *Panthera tigris tigris* 🐅");
  } else if (includes("bager upokarita", "bagher upokarita", "tiger benefits")) {
    botReply("বাঘ খাদ্যচক্রের শীর্ষে থেকে বনজ পরিবেশের ভারসাম্য রক্ষা করে 🐅🌳");
  } else if (includes("catla", "catla mach", "catla fish name")) {
    botReply("কাতলা মাছের বিজ্ঞানসম্মত নাম: *Catla catla* 🐟");
  } else if (includes("catla upokarita", "catla macher upokarita")) {
    botReply("কাতলা মাছ প্রোটিনসমৃদ্ধ এবং হৃদয় ও মস্তিষ্কের জন্য উপকারী 🧠💪");
  } else if (includes("rui", "rui mach", "rui name")) {
    botReply("রুই মাছের বিজ্ঞানসম্মত নাম: *Labeo rohita* 🐟");
  } else if (includes("rui upokarita", "rui macher upokarita")) {
    botReply("রুই মাছ হজমে সহায়তা করে এবং হাড় শক্ত করে 🦴");
  } else if (includes("bot gach", "botgach", "botgacher nam")) {
    botReply("বটগাছের বিজ্ঞানসম্মত নাম: *Ficus benghalensis* 🌳");
  } else if (includes("bot gach upokarita", "botgacher upokarita")) {
    botReply("বটগাছ ছায়া দেয়, পরিবেশে অক্সিজেন সরবরাহ করে এবং পবিত্র বৃক্ষ হিসেবে পূজিত হয় 🌿");
  } else if (includes("padma", "padma ful", "padma flower")) {
    botReply("পদ্মফুলের বিজ্ঞানসম্মত নাম: *Nelumbo nucifera* 🌸");
  } else if (includes("padma upokarita", "padma fuler upokarita")) {
    botReply("পদ্ম সৌন্দর্য ও পবিত্রতার প্রতীক এবং আয়ুর্বেদিক ওষুধেও ব্যবহৃত হয় 💮");

  } else {
    botReply("Ayan amake eta sekhayni, ami pore bole debo 😊");
  }
}
