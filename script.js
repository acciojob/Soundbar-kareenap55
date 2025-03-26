// List of sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Function to stop all sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

// Attach event listeners to each button
sounds.forEach(sound => {
    const button = document.getElementById(sound);
    button.addEventListener("click", () => {
        stopSounds(); // Stop other sounds before playing
        document.getElementById(sound + "-audio").play();
    });
});

// Stop button functionality
document.getElementById("stop").addEventListener("click", stopSounds);
