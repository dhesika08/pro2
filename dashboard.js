function updateDashboard() {

    let career = localStorage.getItem("career");

    if (career) {
        document.getElementById("careerName").innerHTML = career;
    }

    let roadmap = localStorage.getItem("roadmap");
    if (roadmap) {
        let roadmapDiv = document.getElementById("roadmapResult");
        if (roadmapDiv) {
            roadmapDiv.innerHTML = roadmap;
        }
    }

    calculateResumeScore();
    updateProgress();
    showBadges();
}

function calculateResumeScore() {

    let score = parseInt(localStorage.getItem("resumeScore")) || 0;

    document.getElementById("resumeScore").innerHTML = score + "%";
}

function calculateResume() {

    let projects = parseInt(document.getElementById("projects").value) || 0;
    let certifications = parseInt(document.getElementById("certifications").value) || 0;

    let score = (projects * 15) + (certifications * 10);

    if (score > 100)
        score = 100;

    document.getElementById("resumeResult").innerHTML = "Resume Score: " + score + "%";
    
    document.getElementById("resumeScore").innerHTML = score + "%";
    localStorage.setItem("resumeScore", score);
    updateProgress();
    showBadges();
}

function updateProgress() {

    let progress = 0;

    let career = localStorage.getItem("career");
    let roadmap = localStorage.getItem("roadmap");

    if (career) {
        progress += 40;
    }

    if (roadmap) {
        progress += 30;
    }

    let resumeScore = parseInt(localStorage.getItem("resumeScore")) || 0;

    if (resumeScore >= 50) {
        progress += 30;
    }

    if (progress > 100) {
        progress = 100;
    }

    document.getElementById("progressBar").value = progress;
}

function showBadges() {

    let badges = [];

    let progress = document.getElementById("progressBar").value;

    if (progress >= 30)
        badges.push("Career Explorer");

    if (progress >= 60)
        badges.push("Skill Builder");

    if (progress >= 90)
        badges.push("Career Master");

    let badgesDiv = document.getElementById("badges");
    if (badgesDiv) {
        if (badges.length === 0) {
            badgesDiv.innerHTML = "No Badges Yet";
        } else {
            badgesDiv.innerHTML = badges.join("<br>");
        }
    }
}

function downloadReport() {
    window.print();
}

function clearDashboard() {

    localStorage.clear();

    document.getElementById("careerName").innerHTML = "Not Selected";
    document.getElementById("resumeScore").innerHTML = "0%";
    document.getElementById("progressBar").value = 0;

    let resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = "";
    }

    let roadmapDiv = document.getElementById("roadmapResult");
    if (roadmapDiv) {
        roadmapDiv.innerHTML = "Select a career to view roadmap.";
    }

    let badgesDiv = document.getElementById("badges");
    if (badgesDiv) {
        badgesDiv.innerHTML = "No Badges Yet";
    }

    if (typeof resetQuiz === "function") {
        resetQuiz();
    }
}

function sendMessage() {

    let input = document.getElementById("chatInput");
    let question = input.value.toLowerCase();
    let response = "Sorry, I don't Understand.";

    if (question.includes("ai")) {

        response = "AI Engineer roadmap: Python --> ML --> Deep Learning --> Projects";
    }
    else if (question.includes("web")) {

        response = "Web Developer roadmap: HTML --> CSS --> JS --> React --> Projects";
    }
    else if (question.includes("cyber")) {

        response = "Cyber Security roadmap: Networking --> Linux --> Security Tools";
    }
    else if (question.includes("data")) {

        response = "Data Scientist roadmap: Python --> SQL --> ML --> Analytics";
    }

    document.getElementById("chatMessages").innerHTML +=

        "<p><b>You:</b> "
        +
        input.value
        +
        "</p>"
        +
        "<p><b>AI:</b> "
        +
        response
        +
        "</p>";

    input.value = "";
}

function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let skills = document.getElementById("resumeSkills").value;

    document.getElementById("resumePreview").innerHTML =

        `
    <h3>${name}</h3>
    <p>${email}</p>
    <p>${skills}</p>
    `;
}

function calculateRoadmapProgress() {

    let steps = document.querySelectorAll(".roadmapStep");

    let completed = 0;

    steps.forEach(step => {

        if (step.checked) {
            completed++;
        }
    });

    let progress = (completed / steps.length) * 100;

    document.getElementById("roadmapProgress").innerHTML = progress.toFixed(0) + "% Completed";
}


function predictSalary() {

    let career = document.getElementById("careerSelect").value;

    let salary = "";

    switch (career) {

        case "AI Engineer":
            salary = "8L - 25L";
            break;

        case "Web Developer":
            salary = "4L - 12L";
            break;

        case "Cyber Security":
            salary = "6L - 20L";
            break;

        case "Data Scientist":
            salary = "7L - 22L";
            break;
    }

    document.getElementById("salaryResult").innerHTML = "Expected Salary: " + salary;
}

function downloadCareerReport() {

    let career = localStorage.getItem("career") || "Not Selected";

    let roadmap = localStorage.getItem("roadmap") || "No Roadmap";

    let report =
        "CAREER REPORT\n\n"
        +
        "Career: "
        + career
        +
        "\n\n"
        +
        roadmap;

    let blob = new Blob([report], { type: "text/plain" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CareerReport.txt";
    link.click();
}



function toggleDarkMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
    updateDashboard();
}