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
    { keywords: ["তোমার নাম কি", "তুমি কে", "তুমি কারা","Tomar name ki", "tumi ke", "tumi kara"], reply: "আমার নাম ChatBot, আমি তোমার ডিজিটাল বন্ধু 🤖" },
    { keywords: ["তোমাকে কে বানিয়েছে", "তুমি কে বানিয়েছো","Tomake ke baniye6e", "Tomake ke baniyeche", "tomake ke baniye6e"], reply: "আমাকে বানিয়েছে Ayan Mahapatra 🛠️" },
    { keywords: ["কেমন আছো", "how are you", "tumi kemon acho", "Tumi kemon a6o"], reply: "আমি ভালো আছি, তুমি কেমন আছো? 😊" },
    { keywords: ["আজকে কি দিন", "Ajke ki din", "aj ki" "Ajke ki"], reply: "আজকে হলো " + new Date().toLocaleDateString('bn-BD', { weekday: 'long' }) },
    { keywords: ["এখন কটা বাজে", "সময় কতো", "Akhon kota baje", "akhon kota baje", "somoy koto holo","Somoy koto holo"], reply: "এখন সময় " + new Date().toLocaleTimeString('bn-BD') },

    // ভারত ও পশ্চিমবঙ্গ
    { keywords: ["ভারতের প্রধানমন্ত্রী কে", "Bharoter prodhan montri ke", "bharoter prodan montri ke", "baroter prondan montry ke?"], reply: "ভারতের প্রধানমন্ত্রী হলেন নরেন্দ্র মোদি 🇮🇳" },
    { keywords: ["পশ্চিমবঙ্গের মুখ্যমন্ত্রী কে", "poschim bonger mukho montri ke","Poschimbonger mukhomontri ke", "poschim bonger mukhomontry ke", "poschim bonger mukho montry ke?"], reply: "পশ্চিমবঙ্গের মুখ্যমন্ত্রী হলেন মমতা ব্যানার্জি 👩‍⚖️" },
    { keywords: ["ভারতের জাতীয় পতাকার রং কি কি", "bharoter jatio potokar rong ki ki ", "Bharoter jatio potokar nam ki", "Bharoter jatio potokar name ki?"], reply: "গেরুয়া, সাদা, সবুজ এবং মাঝখানে অশোক চক্র 🇮🇳" },
    { keywords: ["ভারতের জাতীয় পশু কি","Bharoter jatio posu ki", "bharoter jatio posu ki", "Bharoter jatio posu ki?"], reply: "ভারতের জাতীয় পশু হলো রয়েল বেঙ্গল টাইগার 🐅" },
    { keywords: ["জাতীয় ফুল কি", "jatio phool ki", "Jatio phol ki", "jatio phol ki?", "jatio phool ki", "jatio full ki", "Jatio full ki", "Jatio full ki?"], reply: "পদ্ম ফুল (Lotus) 🌸" },
    { keywords: ["জাতীয় পাখি কি", "Jatio pakhi ki", "jatio pakhi ki", "Jatio pakhi ki ","Jatio pakhi ki?", "jatio pakhi ki?"], reply: "ময়ূর (Peacock) 🦚" },
    { keywords: ["পশ্চিমবঙ্গের রাজধানী কোথায়", "poschim bonger rajdani kothay", "Poschim bonger rajdhani kothay", "poschimbonger rajdani kothay", "poschimbonger rajdhani kothay"], reply: "কলকাতা" },
    { keywords: ["পশ্চিমবঙ্গে কতগুলো বিশ্ববিদ্যালয় আছে","poschim bonge koto guli bidayloy a6e","Poschim bonge koto gulo vidayloy ache", "poschim bonge koto gulo vidayloy a6e"], reply: "প্রায় ৩০টিরও বেশি বিশ্ববিদ্যালয় আছে পশ্চিমবঙ্গে 📘" },

    // বিজ্ঞান
    { keywords: ["সূর্য কি একটি গ্রহ"], reply: "না, সূর্য একটি তারা (Star)" },
    { keywords: ["পৃথিবী সূর্যকে কত দিনে প্রদক্ষিণ করে"], reply: "প্রায় ৩৬৫ দিনে" },
    { keywords: ["রক্ত লাল কেন"], reply: "হিমোগ্লোবিন থাকার জন্য রক্ত লাল" },
    { keywords: ["পানির রাসায়নিক সংকেত কি"], reply: "H₂O 💧" },
    { keywords: ["আলোর গতি কত"], reply: "আলোর গতি হলো প্রায় ৩ লক্ষ কিমি/সেকেন্ড" },
    { keywords: ["গাছ খাদ্য তৈরি করে কিভাবে"], reply: "সালোকসংশ্লেষ প্রক্রিয়ায় সূর্যের আলো, জল ও কার্বন-ডাই-অক্সাইড থেকে খাদ্য তৈরি করে" },
    { keywords: ["চাঁদে কে প্রথম পা রেখেছেন"], reply: "নীল আর্মস্ট্রং, ১৯৬৯ সালে 🚀" },

    // অঙ্ক ও সূত্র
    { keywords: ["(a+b)^2 এর মান কি"], reply: "(a + b)² = a² + 2ab + b²" },
    { keywords: ["(a-b)^2 এর মান কি"], reply: "(a - b)² = a² - 2ab + b²" },
    { keywords: ["(a+b)(a-b) মানে কি"], reply: "(a + b)(a - b) = a² - b²" },
    { keywords: ["গতি ="], reply: "গতি = দূরত্ব ÷ সময়" },
    { keywords: ["ত্রিভুজের ক্ষেত্রফল"], reply: "½ × base × height" },
    { keywords: ["বৃত্তের ক্ষেত্রফল"], reply: "π × r²" },
    { keywords: ["গড় কাকে বলে"], reply: "মোট মান ÷ মোট সংখ্যা" },

    // ফল ও অ্যাসিড
    { keywords: ["আপেলে কোন অ্যাসিড থাকে"], reply: "ম্যালিক অ্যাসিড থাকে 🍎" },
    { keywords: ["লেবুতে কোন অ্যাসিড থাকে"], reply: "সিট্রিক অ্যাসিড থাকে 🍋" },
    { keywords: ["কমলালেবুতে অ্যাসিড"], reply: "সিট্রিক অ্যাসিড 🍊" },
    { keywords: ["আঙুরে অ্যাসিড কি"], reply: "টারটারিক অ্যাসিড থাকে 🍇" },

    // মাছ ও প্রাণী
    { keywords: ["catla মাছের বৈজ্ঞানিক নাম কি"], reply: "Catla catla 🐟" },
    { keywords: ["মানুষের সবচেয়ে বড় অঙ্গ কি"], reply: "ত্বক (Skin)" },

    // স্কুল ও শিক্ষক
    { keywords: ["স্কুলে কেন যাই"], reply: "শিক্ষা ও জ্ঞান অর্জন করতে 🏫" },
    { keywords: ["শিক্ষক দিবস কবে"], reply: "৫ই সেপ্টেম্বর" },
    { keywords: ["ভালো ছাত্রের গুণাবলি"], reply: "নিয়মিত পড়াশোনা, শৃঙ্খলা, সততা ও নম্রতা" },

    // সাম্প্রতিক খবর
    { keywords: ["plane crash", "প্লেন দুর্ঘটনা"], reply: "সম্প্রতি আহমেদাবাদে একটি প্লেন দুর্ঘটনা ঘটেছে।" }
  ];

  // অঙ্ক ক্যালকুলেশন সাপোর্ট
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

  // প্রশ্ন মিলিয়ে উত্তর দেওয়া
  for (let item of replies) {
    for (let key of item.keywords) {
      if (userInput.includes(key)) {
        botReply(item.reply);
        return;
      }
    }
  }

  // fallback message
  botReply("Ayan amake eta sekhayni, ami pore bole debo 🙏");
}
