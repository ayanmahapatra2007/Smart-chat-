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
    const options = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('bn-BD', options).format(time);
    const currentTime = time.toLocaleTimeString('bn-BD');

    const greetings = ["hii", "hello", "hey", "হাই", "হ্যালো"];
    const nameQuestions = ["tomar nam", "what is your name", "nam ki"];
    const makerQuestions = ["ke baniyeche", "who made you", "ayan ke"];
    const howAreYou = ["kemon acho", "how are you", "কেমন আছো"];
    const canDo = ["ki paro", "what can you do"];
    const whereLive = ["kothay thako", "where do you live"];
    const dayQuestions = ["kon din", "what day", "aj ke din", "ki din", "ajke ki din", "আজ কি দিন"];
    const timeQuestions = ["somoy", "time", "koto baje", "what's the time", "ki time"];
    const friend = ["amar bondhu", "tumi amar bondhu"];
    const goodbye = ["exit", "bye", "biday"];
    const bhalo = ["bhalo lagche", "valo lagche"];

    // নতুন প্রশ্ন
    const pmIndia = ["bharoter prodhanmontri", "india pm", "pm ke", "ভারতের প্রধানমন্ত্রী"];
    const cmBengal = ["paschimbanger mukhyo", "west bengal cm", "mukhyo montri ke", "পশ্চিমবঙ্গের মুখ্যমন্ত্রী"];
    const capitalIndia = ["bharoter rajdhani", "india capital", "ভারতের রাজধানী"];
    const banglaState = ["bangla kotogulo rajjo", "bangla koy number", "বাংলা কত নম্বর রাজ্য"];
    const ayanLives = ["ayan kothay thake", "অয়ন কোথায় থাকে"];

    if (goodbye.some(q => userInput.includes(q))) {
        botReply("বিদায়! ভালো থাকো 😊");
    } else if (greetings.some(q => userInput.includes(q))) {
        botReply("হ্যালো! তোমার সাথে কথা বলে ভালো লাগছে 😊");
    } else if (nameQuestions.some(q => userInput.includes(q))) {
        botReply("আমার নাম ChatBot! 🤖");
    } else if (makerQuestions.some(q => userInput.includes(q))) {
        botReply("আমাকে তৈরি করেছে অয়ন মহাপাত্র 🛠️");
    } else if (howAreYou.some(q => userInput.includes(q))) {
        botReply("আমি ভালো আছি, তুমি কেমন আছো? 😊");
    } else if (canDo.some(q => userInput.includes(q))) {
        botReply("আমি সাধারণ প্রশ্নের উত্তর দিতে পারি। জিজ্ঞেস করো!");
    } else if (whereLive.some(q => userInput.includes(q))) {
        botReply("আমি ইন্টারনেটে থাকি! 🌐");
    } else if (dayQuestions.some(q => userInput.includes(q))) {
        botReply("আজ " + day + "।");
    } else if (timeQuestions.some(q => userInput.includes(q))) {
        botReply("এখন সময়: " + currentTime);
    } else if (bhalo.some(q => userInput.includes(q))) {
        botReply("ধন্যবাদ! তোমাকেও ভালো লাগুক 😊");
    } else if (friend.some(q => userInput.includes(q))) {
        botReply("হ্যাঁ, আমি তোমার ডিজিটাল বন্ধু! 🤝");

    // 🔻 নতুন প্রশ্নের উত্তর
    } else if (pmIndia.some(q => userInput.includes(q))) {
        botReply("ভারতের বর্তমান প্রধানমন্ত্রী হচ্ছেন নরেন্দ্র মোদি। 🇮🇳");
    } else if (cmBengal.some(q => userInput.includes(q))) {
        botReply("পশ্চিমবঙ্গের মুখ্যমন্ত্রী হচ্ছেন মমতা ব্যানার্জী। 🧕");
    } else if (capitalIndia.some(q => userInput.includes(q))) {
        botReply("ভারতের রাজধানী হল নতুন দিল্লি (New Delhi)। 🏙️");
    } else if (banglaState.some(q => userInput.includes(q))) {
        botReply("বাংলা ভারতের ৪র্থ রাজ্য হিসেবে যুক্ত হয়। 📘");
    } else if (ayanLives.some(q => userInput.includes(q))) {
        botReply("অয়ন পশ্চিম মেদিনীপুর জেলার নারায়ণগড় এলাকার বিরবিরা গ্রামে থাকেন। 🏡");

    } else {
        botReply("দুঃখিত, আমি সেটা বুঝতে পারিনি। আবার চেষ্টা করো 🙏");
    }
}
