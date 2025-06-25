function botReply(message) {
  const chatBox = document.getElementById("chat-box");
  const para = document.createElement("p");
  para.textContent = "🤖 " + message;
  chatBox.appendChild(para);
}

function sendMessage() {
  const input = document.getElementById("user-input");
  let userInput = input.value.toLowerCase().trim();
  input.value = "";

  const replies = [
    // সাধারণ প্রশ্ন
    { keywords: ["হ্যালো", "হাই", "hello", "hi"], reply: "হ্যালো! তোমার সঙ্গে কথা বলে ভালো লাগছে 😊 প্রশ্ন করো।" },
    { keywords: ["তোমার নাম কি", "তুমি কে", "tumi ke", "tomar name ki"], reply: "আমার নাম AyanBot, আমি তোমার ডিজিটাল বন্ধু 🤖" },
    { keywords: ["তোমাকে কে বানিয়েছে", "toke ke baniyeche", "tomake ke baniye6e"], reply: "আমাকে বানিয়েছে Ayan Mahapatra 🛠️" },
    { keywords: ["কেমন আছো", "how are you", "tumi kemon acho"], reply: "আমি ভালো আছি, তুমি কেমন আছো? 😊" },
    { keywords: ["আজকে কি দিন", "ajke ki din", "aj ki"], reply: "আজকে হলো " + new Date().toLocaleDateString('bn-BD', { weekday: 'long' }) },
    { keywords: ["এখন কটা বাজে", "somoy koto", "akhon kota baje"], reply: "এখন সময় " + new Date().toLocaleTimeString('bn-BD') },

    // ভারত ও পশ্চিমবঙ্গ
    { keywords: ["ভারতের প্রধানমন্ত্রী কে", "prodan montri"], reply: "ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳" },
    { keywords: ["পশ্চিমবঙ্গের মুখ্যমন্ত্রী কে", "mukhomontri"], reply: "পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জি 👩‍⚖️" },
    { keywords: ["ভারতের জাতীয় পতাকার রং", "potakar rong"], reply: "গেরুয়া, সাদা, সবুজ এবং মাঝখানে অশোক চক্র 🇮🇳" },
    { keywords: ["জাতীয় পশু কি", "poshu"], reply: "ভারতের জাতীয় পশু হলো রয়েল বেঙ্গল টাইগার 🐅" },
    { keywords: ["জাতীয় ফুল", "phool", "full"], reply: "পদ্ম ফুল (Lotus) 🌸" },
    { keywords: ["জাতীয় পাখি", "pakhi"], reply: "ময়ূর (Peacock) 🦚" },
    { keywords: ["রাজধানী কোথায়", "rajdani kothay"], reply: "পশ্চিমবঙ্গের রাজধানী হলো কলকাতা 🏙️" },
    { keywords: ["বিশ্ববিদ্যালয়", "university", "bissobidyaloy"], reply: "পশ্চিমবঙ্গে প্রায় ৩০টিরও বেশি বিশ্ববিদ্যালয় আছে 📚" },

    // বিজ্ঞান
    { keywords: ["সূর্য কি গ্রহ", "sun planet"], reply: "না, সূর্য একটি তারা (Star) 🔆" },
    { keywords: ["পৃথিবী সূর্যকে কত দিনে প্রদক্ষিণ করে"], reply: "প্রায় ৩৬৫ দিনে 🌍" },
    { keywords: ["রক্ত লাল কেন"], reply: "হিমোগ্লোবিন থাকার জন্য রক্ত লাল ❤️" },
    { keywords: ["পানির সংকেত", "water chemical"], reply: "H₂O 💧" },
    { keywords: ["আলোর গতি"], reply: "আলোর গতি প্রায় ৩ লক্ষ কিমি/সেকেন্ড ⚡" },
    { keywords: ["সালোকসংশ্লেষ", "gach khaddo"], reply: "গাছ সালোকসংশ্লেষের মাধ্যমে খাদ্য তৈরি করে ☀️🌿" },
    { keywords: ["চাঁদে কে প্রথম পা রেখেছেন"], reply: "নীল আর্মস্ট্রং, ১৯৬৯ সালে 🚀" },
    { keywords: ["মানুষের সবচেয়ে বড় অঙ্গ", "boro ong"], reply: "ত্বক (Skin)" },

    // অঙ্ক ও সূত্র
    { keywords: ["(a+b)^2"], reply: "(a + b)² = a² + 2ab + b²" },
    { keywords: ["(a-b)^2"], reply: "(a - b)² = a² - 2ab + b²" },
    { keywords: ["(a+b)(a-b)"], reply: "(a + b)(a - b) = a² - b²" },
    { keywords: ["গতি =", "speed formula"], reply: "গতি = দূরত্ব ÷ সময়" },
    { keywords: ["ত্রিভুজের ক্ষেত্রফল", "triangle area"], reply: "½ × base × height" },
    { keywords: ["বৃত্তের ক্ষেত্রফল", "circle area"], reply: "π × r²" },
    { keywords: ["গড় কাকে বলে", "average ki"], reply: "গড় = মোট মান ÷ মোট সংখ্যা" },

    // ফল ও অ্যাসিড
    { keywords: ["আপেলে অ্যাসিড", "apple acid"], reply: "আপেলে ম্যালিক অ্যাসিড থাকে 🍎" },
    { keywords: ["লেবুতে অ্যাসিড", "lemon acid"], reply: "লেবুতে সিট্রিক অ্যাসিড থাকে 🍋" },
    { keywords: ["কমলালেবুতে অ্যাসিড", "orange acid"], reply: "কমলালেবুতে সিট্রিক অ্যাসিড 🍊" },
    { keywords: ["আঙুরে অ্যাসিড", "grape acid"], reply: "আঙুরে টারটারিক অ্যাসিড থাকে 🍇" },

    // স্কুল ও শিক্ষা
    { keywords: ["স্কুলে কেন যাই", "school keno"], reply: "শিক্ষা ও জ্ঞান অর্জন করতে 🏫" },
    { keywords: ["শিক্ষক দিবস", "teacher day"], reply: "৫ই সেপ্টেম্বর" },
    { keywords: ["ভালো ছাত্রের গুণাবলি", "valo chhatro"], reply: "নিয়মিত পড়াশোনা, শৃঙ্খলা, সততা ও নম্রতা 👍" },

    // সাম্প্রতিক খবর
    { keywords: ["প্লেন দুর্ঘটনা", "plane crash"], reply: "সম্প্রতি আহমেদাবাদে একটি প্লেন দুর্ঘটনা ঘটেছে ✈️" },

    // ইতিহাস ও বিখ্যাত মানুষ
    { keywords: ["ঈশ্বরচন্দ্র বিদ্যাসাগর", "vidyasagar"], reply: "ঈশ্বরচন্দ্র বিদ্যাসাগর একজন সমাজসংস্কারক ও শিক্ষাবিদ ছিলেন 📚" },
    { keywords: ["নেতাজি", "subhas chandra bose"], reply: "নেতাজি সুভাষচন্দ্র বসু ছিলেন ভারতের স্বাধীনতা সংগ্রামী 🇮🇳" },
    { keywords: ["জগদীশ চন্দ্র বসু", "jagadish chandra bose"], reply: "জগদীশ চন্দ্র বসু ছিলেন বিজ্ঞানী ও উদ্ভিদের অনুভূতি নিয়ে গবেষণা করেন 🌱" },
  ];

  // অঙ্ক ক্যালকুলেশন
  if (/^[0-9+\-*/xX÷. ]+$/.test(userInput)) {
    try {
      let expression = userInput.replace(/x|X/gi, "*").replace(/÷/g, "/");
      let result = eval(expression);
      botReply("উত্তর হলো: " + result);
      return;
    } catch {
      botReply("অঙ্ক বুঝতে পারিনি। আবার চেষ্টা করো 🔢");
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
  botReply("Ayan amake eta sekhayni, ami pore bole debo 🙏");
}
