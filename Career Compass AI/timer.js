// timer.js
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

function updateTimeDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    // Add leading zero if needed
    let minsStr = minutes < 10 ? "0" + minutes : minutes;
    let secsStr = seconds < 10 ? "0" + seconds : seconds;
    
    let timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
        timeDisplay.innerText = `${minsStr}:${secsStr}`;
    }
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimeDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert("Pomodoro session complete! Great job studying.");
            // Reset to 25 min 
            timeLeft = 25 * 60;
            updateTimeDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimeDisplay();
}

window.addEventListener("DOMContentLoaded", () => {
    updateTimeDisplay();
});
