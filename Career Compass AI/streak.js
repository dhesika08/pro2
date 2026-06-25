// streak.js
function updateStreak() {
    const today = new Date().toDateString();
    let lastVisit = localStorage.getItem("lastVisit");
    let currentStreak = parseInt(localStorage.getItem("loginStreak")) || 0;

    if (lastVisit === today) {
        // Already visited today, streak remains the same
    } else {
        // Check if yesterday
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
            currentStreak++;
        } else {
            currentStreak = 1; // reset streak
        }
        
        localStorage.setItem("lastVisit", today);
        localStorage.setItem("loginStreak", currentStreak);
    }
    
    let streakElement = document.getElementById("streakCount");
    if (streakElement) {
        streakElement.innerText = currentStreak + (currentStreak === 1 ? " Day" : " Days");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updateStreak();
});
