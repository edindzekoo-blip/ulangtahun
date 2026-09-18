function surprise() {
    const surpriseBox = document.getElementById("surprise");

    surpriseBox.classList.remove("hidden");

    createConfetti();
}

function playMusic() {
    const music = document.getElementById("music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 20 + 10 + "px";
        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
