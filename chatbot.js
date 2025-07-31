function botReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("div");
  para.className = "message bot-message";
  para.textContent = "🤖 " + message;
  chatBox.appendChild(para);

  autoScroll(chatBox);
}

function userReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("div");
  para.className = "message user-message";
  para.textContent = "🧑‍💬 " + message;
  chatBox.appendChild(para);

  autoScroll(chatBox);
}

function autoScroll(container) {
  // Check if user is near the bottom before new message
  const threshold = 50; // px threshold to detect near bottom
  const scrollPosition = container.scrollTop + container.clientHeight;
  const scrollHeight = container.scrollHeight;

  if (scrollHeight - scrollPosition < threshold) {
    // User is near bottom, auto scroll
    container.scrollTop = scrollHeight;
  }
  // Else do nothing, user is reading older messages
}

function sendMessage() {
  const input = document.getElementById("user-input");
  let userInput = input.value.toLowerCase().trim();
  if (userInput === "") return;

  userReply(userInput);
  input.value = "";

  const replies = [
    // সাধারণ কথাবার্তা
    { keywords: ["হ্যালো", "hello", "hi", "নমস্কার"], reply: "হ্যালো! কেমন আছো? 😊 প্রশ্ন করো।" },
    { keywords: ["তুমি কেমন", "কেমন আছো", "kemon acho", "kemon a6o", "how are you"], reply: "আমি ভালো আছি! তুমি কেমন আছো?" },
    { keywords: ["তোমার নাম", "tomar name ki", "তুমি কে"], reply: "আমার নাম Smart Chat, আর আমাকে তৈরি করেছে Ayan 💻" },
    { keywords: ["তোমাকে কে বানিয়েছে", "tomake ke baniye6e", "বানিয়েছে", "creator"], reply: "আমাকে বানিয়েছে Ayan Mahapatra ❤️" },

    // দিন তারিখ সময়
    { keywords: ["আজকে কি দিন", "আজ কি", "ki din"], reply: "আজকে হলো " + new Date().toLocaleDateString('bn-BD', { weekday: 'long' }) },
    { keywords: ["সময়", "এখন কটা বাজে", "akhon kota baje", "time"], reply: "এখন সময়: " + new Date().toLocaleTimeString('bn-BD') },

    // জেনারেল নলেজ
    { keywords: ["ভারতের প্রধানমন্ত্রী", "bharoter prodhan montri ke", "modi", "pm"], reply: "ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳" },
    { keywords: ["পশ্চিমবঙ্গের মুখ্যমন্ত্রী", "poschimbonger mukhomontri ke"], reply: "পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জি 👩‍⚖️" },
    { keywords: ["জাতীয় পশু"], reply: "ভারতের জাতীয় পশু হলো রয়েল বেঙ্গল টাইগার 🐅" },
    { keywords: ["জাতীয় ফুল"], reply: "ভারতের জাতীয় ফুল হলো পদ্মফুল 🌸" },
    { keywords: ["জাতীয় পাখি"], reply: "ভারতের জাতীয় পাখি হলো ময়ূর 🦚" },
    { keywords: ["রাজধানী কোথায়"], reply: "পশ্চিমবঙ্গের রাজধানী হলো কলকাতা 🏙️" },
    { keywords: ["ভারত কত সালে স্বাধীন হয়"], reply: "১৯৪৭ সালের ১৫ আগস্ট 🇮🇳" },

    // বিজ্ঞান
    { keywords: ["সূর্য কি গ্রহ", "sun planet"], reply: "না, সূর্য একটি তারা (Star) 🔆" },
    { keywords: ["রক্ত লাল কেন", "rokto lal hoy keno"], reply: "রক্তে হিমোগ্লোবিন থাকার কারণে এটি লাল দেখায় ❤️" },
    { keywords: ["পানির সংকেত"], reply: "পানির রাসায়নিক সংকেত হলো H₂O 💧" },
    { keywords: ["আলোর গতি", "alor goti koto"], reply: "আলোর গতি প্রায় ৩,০০,০০০ কিমি/সেকেন্ড ⚡" },

    // অংক সূত্র
    { keywords: ["(a+b)^2"], reply: "(a + b)² = a² + 2ab + b²" },
    { keywords: ["(a-b)^2"], reply: "(a - b)² = a² - 2ab + b²" },
    { keywords: ["(a+b)(a-b)"], reply: "(a + b)(a - b) = a² - b²" },
    { keywords: ["গতি ="], reply: "গতি = দূরত্ব ÷ সময়" },
    { keywords: ["ত্রিভুজের ক্ষেত্রফল"], reply: "½ × base × height" },
    { keywords: ["বৃত্তের ক্ষেত্রফল"], reply: "π × r²" },

    // ফল ও অ্যাসিড
    { keywords: ["আপেল", "apple"], reply: "আপেলে ম্যালিক অ্যাসিড থাকে 🍎" },
    { keywords: ["লেবু", "lemon"], reply: "লেবুতে সিট্রিক অ্যাসিড থাকে 🍋" },
    { keywords: ["কমলালেবু", "orange"], reply: "কমলালেবুতে সিট্রিক অ্যাসিড থাকে 🍊" },

    // স্কুল ও শেখা
    { keywords: ["স্কুল কেন যাই", "school"], reply: "জ্ঞান অর্জন ও শিক্ষার জন্য স্কুলে যাই 🏫" },
    { keywords: ["শিক্ষক দিবস"], reply: "শিক্ষক দিবস ৫ই সেপ্টেম্বর 📅" },

    // ইতিহাস
    { keywords: ["বিদ্যাসাগর"], reply: "ঈশ্বরচন্দ্র বিদ্যাসাগর ছিলেন সমাজ সংস্কারক 📚" },
    { keywords: ["নেতাজি"], reply: "নেতাজি সুভাষচন্দ্র বসু ছিলেন একজন মহান স্বাধীনতা সংগ্রামী 🇮🇳" },
    { keywords: ["রবীন্দ্রনাথ"], reply: "রবীন্দ্রনাথ ঠাকুর ছিলেন কবিগুরু, লেখক ও নোবেলজয়ী 🎵" },

    // মজা ও সাধারণ কথাবার্তা
    { keywords: ["তুমি কি মানুষ", "tumi ki manus", "তুমি মানুষ"], reply: "না, আমি একটা কম্পিউটার প্রোগ্রাম 🤖" },
    { keywords: ["তুমি কি করো", "tumi ki koro"], reply: "আমি তোমার প্রশ্নের উত্তর দিতে চেষ্টা করি 😊" },
    { keywords: ["তুমি ঘুমাও", "tumi ki ghumao"], reply: "না, আমি কখনো ঘুমাই না 😄" },

    // সাম্প্রতিক খবর (আপডেট রাখতে চাইলে পরবর্তীতে API ব্যবহার করা যাবে)
    { keywords: ["প্লেন দুর্ঘটনা", "plane crash"], reply: "সম্প্রতি আহমেদাবাদে একটি প্লেন দুর্ঘটনা ঘটেছে ✈️" },
  ];

  // অংক ক্যালকুলেশন
  if (/^[0-9+\-*/xX÷(). ]+$/.test(userInput)) {
    try {
      let expression = userInput.replace(/x|X/gi, "*").replace(/÷/g, "/");
      let result = eval(expression);
      botReply("উত্তর হলো: " + result);
      return;
    } catch {
      botReply("অঙ্ক বুঝতে পারিনি, আবার লিখো 🔢");
      return;
    }
  }

  // প্রশ্ন খুঁজে উত্তর দেওয়া
  for (let item of replies) {
    for (let key of item.keywords) {
      if (userInput.includes(key)) {
        botReply(item.reply);
        return;
      }
    }
  }

  // fallback উত্তর
  botReply("Ayan আমায় এটা শেখায়নি, আমি পরে বলব 🙏");
}
