function sendHug() {
    const emoji = document.getElementById("hugEmoji");
    emoji.style.opacity = 1;
    emoji.style.transform = "scale(1.5)";

    setTimeout(() => {
        emoji.style.transform = "scale(1)";
    }, 500);

    // Play music (optional)
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("User interaction needed for autoplay");
    });
}

// Compliment generator
function generateCompliment() {
    const compliments = [
        "You're amazing just the way you are ✨",
        "Your smile could light up a room 💖",
        "You have a heart of gold 🤍",
        "You're braver than you believe 💪",
        "Someone out there (hint: me) thinks you're wonderful 😌"
    ];
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("complimentText").textContent = compliments[randomIndex];
}

// Easter egg reveal on double-click background
document.body.ondblclick = function() {
    const egg = document.getElementById("easterEgg");
    egg.style.display = "block";
}

