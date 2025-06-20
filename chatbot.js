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
    const currentTime = time.toLocaleTimeString("bn-BD", { hour: '2-digit', minute: '2-digit' });

    const chatBox = document.getElementById("chat-box");
    const userPara = document.createElement("p");
    userPara.textContent = "🧑‍💬 " + userInput;
    chatBox.appendChild(userPara);

    const pmWords = ["প্রধানমন্ত্রী", "pm", "pradhanmontri", "prodhanmontri"];
    const cmWords = ["মুখ্যমন্ত্রী", "cm", "mukhyomontri", "mukhomontri"];
    const timeWords = ["সময়", "somoy", "time", "baje", "koto"];
    const dateWords = ["আজ", "day", "din", "ki din", "ajke"];
    const whoMadeWords = ["banieche", "who made", "ayan ke", "creator"];
    const nameWords = ["nam", "name", "tomar nam", "tumi ke"];
    const howWords = ["kemon acho", "how are", "kemon", "bhalo"];
    const whereWords = ["kothay", "where", "kothay thako", "thako"];
    const friendWords = ["bondhu", "friend"];
    const capitalWords = ["rajdhani", "capital"];
    const ayanPlaceWords = ["ayan kothay", "অয়ন কোথায়", "অয়ন কোথায় থাকে"];

    if (["exit", "bye", "biday"].some(w => userInput.includes(w))) {
        botReply("বিদায়! ভালো থাকো 😊");
    } else if (["hello", "hii", "হাই", "হ্যালো", "hey"].some(w => userInput.includes(w))) {
        botReply("হ্যালো! তোমার সঙ্গে কথা বলে ভালো লাগছে 😊");
    } else if (nameWords.some(w => userInput.includes(w))) {
        botReply("আমার নাম ChatBot! 🤖");
    } else if (whoMadeWords.some(w => userInput.includes(w))) {
        botReply("আমাকে বানিয়েছে অয়ন মহাপাত্র 🛠️");
    } else if (howWords.some(w => userInput.includes(w))) {
        botReply("আমি ভালো আছি, তুমি কেমন আছো? 😊");
    } else if (whereWords.some(w => userInput.includes(w))) {
        botReply("আমি ইন্টারনেটে থাকি! 🌐");
    } else if (dateWords.some(w => userInput.includes(w))) {
        botReply("আজ " + day + "।");
    } else if (timeWords.some(w => userInput.includes(w))) {
        botReply("এখন সময়: " + currentTime);
    } else if (friendWords.some(w => userInput.includes(w))) {
        botReply("হ্যাঁ, আমি তোমার ডিজিটাল বন্ধু! 🤝");
    } else if (pmWords.some(w => userInput.includes(w))) {
        botReply("ভারতের বর্তমান প্রধানমন্ত্রী হচ্ছেন নরেন্দ্র মোদি। 🇮🇳");
    } else if (cmWords.some(w => userInput.includes(w))) {
        botReply("পশ্চিমবঙ্গের মুখ্যমন্ত্রী হচ্ছেন মমতা ব্যানার্জী। 🧕");
    } else if (capitalWords.some(w => userInput.includes(w))) {
        botReply("ভারতের রাজধানী হল নতুন দিল্লি। 🏙️");
    } else if (ayanPlaceWords.some(w => userInput.includes(w))) {
        botReply("অয়ন পশ্চিম মেদিনীপুরের নারায়ণগড় থানার বিরবিরা গ্রামে থাকেন 🏡");
    } else {
        botReply("দুঃখিত, আমি এটা বুঝতে পারিনি। অনুগ্রহ করে আরেকবার বলো 🙏");
    }
}
