// goal.js
function saveGoal() {
    let goal = document.getElementById("careerGoalInput").value;
    localStorage.setItem("careerGoal", goal);
    
    // Quick visual feedback
    let btn = document.querySelector("#goalTracker button");
    let originalText = btn.innerText;
    btn.innerText = "Saved!";
    setTimeout(() => {
        btn.innerText = originalText;
    }, 2000);
}

function loadGoal() {
    let savedGoal = localStorage.getItem("careerGoal");
    if (savedGoal) {
        document.getElementById("careerGoalInput").value = savedGoal;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadGoal();
});
