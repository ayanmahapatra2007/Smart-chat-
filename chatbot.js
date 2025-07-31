function botReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("div");
  para.className = "message bot-message";
  para.textContent = "🤖 " + message;
  chatBox.appendChild(para);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function userReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("div");
  para.className = "message user-message";
  para.textContent = "🧑‍💬 " + message;
  chatBox.appendChild(para);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function autoScroll(container) {
  const threshold = 50;
  const scrollPosition = container.scrollTop + container.clientHeight;
  const scrollHeight = container.scrollHeight;
  if (scrollHeight - scrollPosition < threshold) {
    container.scrollTop = scrollHeight;
  }
}

function similarity(s1, s2) {
  // Basic similarity check: count matching characters ratio
  s1 = s1.replace(/\s+/g, '');
  s2 = s2.replace(/\s+/g, '');
  if (!s1.length || !s2.length) return 0;
  let matches = 0;
  const len = Math.min(s1.length, s2.length);
  for (let i = 0; i < len; i++) {
    if (s1[i] === s2[i]) matches++;
  }
  return matches / Math.max(s1.length, s2.length);
}

function sendMessage() {
  const input = document.getElementById("user-input");
  let userInputRaw = input.value.trim();
  let userInput = userInputRaw.toLowerCase();

  if (!userInputRaw) return; // empty input ignore

  userReply(userInputRaw);
  input.value = "";

  const replies = [
    { keywords: ["হ্যালো", "hello", "hi", "নমস্কার"], reply: "হ্যালো! কেমন আছো? 😊 প্রশ্ন করো।" },
    { keywords: ["তুমি কেমন", "কেমন আছো", "how are you"], reply: "আমি ভালো আছি! তুমি কেমন আছো?" },
    { keywords: ["তোমার নাম", "তুমি কে"], reply: "আমার নাম Smart Chat, আর আমাকে তৈরি করেছে Ayan 💻" },
    { keywords: ["তোমাকে কে বানিয়েছে", "বানিয়েছে", "creator"], reply: "আমাকে বানিয়েছে Ayan Mahapatra ❤️" },

    { keywords: ["আজকে কি দিন", "আজ কি", "ki din"], reply: "আজকে হলো " + new Date().toLocaleDateString('bn-BD', { weekday: 'long' }) },
    { keywords: ["সময়", "এখন কটা বাজে", "time"], reply: "এখন সময়: " + new Date().toLocaleTimeString('bn-BD') },

    { keywords: ["ভারতের প্রধানমন্ত্রী", "modi", "pm"], reply: "ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳" },
    { keywords: ["পশ্চিমবঙ্গের মুখ্যমন্ত্রী"], reply: "পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জি 👩‍⚖️" },
    { keywords: ["জাতীয় পশু"], reply: "ভারতের জাতীয় পশু হলো রয়েল বেঙ্গল টাইগার 🐅" },
    { keywords: ["জাতীয় ফুল"], reply: "ভারতের জাতীয় ফুল হলো পদ্মফুল 🌸" },
    { keywords: ["জাতীয় পাখি"], reply: "ভারতের জাতীয় পাখি হলো ময়ূর 🦚" },
    { keywords: ["রাজধানী কোথায়"], reply: "পশ্চিমবঙ্গের রাজধানী হলো কলকাতা 🏙️" },
    { keywords: ["ভারত কত সালে স্বাধীন হয়"], reply: "১৯৪৭ সালের ১৫ আগস্ট 🇮🇳" },

    { keywords: ["সূর্য কি গ্রহ", "sun planet"], reply: "না, সূর্য একটি তারা (Star) 🔆" },
    { keywords: ["রক্ত লাল কেন"], reply: "রক্তে হিমোগ্লোবিন থাকার কারণে এটি লাল দেখায় ❤️" },
    { keywords: ["পানির সংকেত"], reply: "পানির রাসায়নিক সংকেত হলো H₂O 💧" },
    { keywords: ["আলোর গতি"], reply: "আলোর গতি প্রায় ৩,০০,০০০ কিমি/সেকেন্ড ⚡" },

    { keywords: ["(a+b)^2"], reply: "(a + b)² = a² + 2ab + b²" },
    { keywords: ["(a-b)^2"], reply: "(a - b)² = a² - 2ab + b²" },
    { keywords: ["(a+b)(a-b)"], reply: "(a + b)(a - b) = a² - b²" },
    { keywords: ["গতি ="], reply: "গতি = দূরত্ব ÷ সময়" },
    { keywords: ["ত্রিভুজের ক্ষেত্রফল"], reply: "½ × base × height" },
    { keywords: ["বৃত্তের ক্ষেত্রফল"], reply: "π × r²" },

    { keywords: ["আপেল", "apple"], reply: "আপেলে ম্যালিক অ্যাসিড থাকে 🍎" },
    { keywords: ["লেবু", "lemon"], reply: "লেবুতে সিট্রিক অ্যাসিড থাকে 🍋" },
    { keywords: ["কমলালেবু", "orange"], reply: "কমলালেবুতে সিট্রিক অ্যাসিড থাকে 🍊" },

    { keywords: ["স্কুল কেন যাই", "school"], reply: "জ্ঞান অর্জন ও শিক্ষার জন্য স্কুলে যাই 🏫" },
    { keywords: ["শিক্ষক দিবস"], reply: "শিক্ষক দিবস ৫ই সেপ্টেম্বর 📅" },

    { keywords: ["বিদ্যাসাগর"], reply: "ঈশ্বরচন্দ্র বিদ্যাসাগর ছিলেন সমাজ সংস্কারক 📚" },
    { keywords: ["নেতাজি"], reply: "নেতাজি সুভাষচন্দ্র বসু ছিলেন একজন মহান স্বাধীনতা সংগ্রামী 🇮🇳" },
    { keywords: ["রবীন্দ্রনাথ"], reply: "রবীন্দ্রনাথ ঠাকুর ছিলেন কবিগুরু, লেখক ও নোবেলজয়ী 🎵" },

    { keywords: ["তুমি কি মানুষ", "তুমি মানুষ"], reply: "না, আমি একটা কম্পিউটার প্রোগ্রাম 🤖" },
    { keywords: ["তুমি কি করো"], reply: "আমি তোমার প্রশ্নের উত্তর দিতে চেষ্টা করি 😊" },
    { keywords: ["তুমি ঘুমাও"], reply: "না, আমি কখনো ঘুমাই না 😄" },

    { keywords: ["প্লেন দুর্ঘটনা", "plane crash"], reply: "সম্প্রতি আহমেদাবাদে একটি প্লেন দুর্ঘটনা ঘটেছে ✈️" },
  ];

  // অংক ক্যালকুলেশন
  if (/^[0-9+\-*/xX÷(). ]+$/.test(userInput)) {
    try {
      let expression = userInput.replace(/x|X/gi, "*").replace(/÷/g, "/");
      setTimeout(() => {
        try {
          let result = eval(expression);
          botReply("উত্তর হলো: " + result);
        } catch {
          botReply("অঙ্ক বুঝতে পারিনি, আবার লিখো 🔢");
        }
      }, 1200); // টাইপিং এফেক্টের জন্য 1.2 সেকেন্ড দেরি
      return;
    } catch {
      botReply("অঙ্ক বুঝতে পারিনি, আবার লিখো 🔢");
      return;
    }
  }

  // মিল খুঁজে বের করা (কিছুটা fuzzy matching)
  function findReply() {
    for (let item of replies) {
      for (let key of item.keywords) {
        // যদি পুরো key টা userInput-এ থাকে, তখন return করো
        if (userInput.includes(key)) {
          return item.reply;
        }
        // যদি না থাকে, তাহলে similarity দেখে চেষ্টা করো
        if (similarity(userInput, key) > 0.7) {
          return item.reply;
        }
      }
    }
    return null;
  }

  const matchedReply = findReply();

  if (matchedReply) {
    // টাইপিং এফেক্টের মতো 1.5 সেকেন্ড পরে রিপ্লাই দাও
    setTimeout(() => {
      botReply(matchedReply);
    }, 1500);
  } else {
    setTimeout(() => {
      botReply("Ayan আমায় এটা শেখায়নি, আমি পরে বলব 🙏");
    }, 1500);
  }
}
