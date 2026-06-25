let aiScore = 0;
let webScore = 0;
let cyberScore = 0;
let dataScore = 0;

function startQuiz() {
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

function answer(type) {

    switch (type) {

        case "coding":
            aiScore += 2;
            webScore += 2;
            break;

        case "math":
            aiScore += 2;
            dataScore += 3;
            break;

        case "security":
            cyberScore += 4;
            break;

        case "web":
            webScore += 4;
            break;
    }
}

function showCareerResult() {

    let total = aiScore + webScore + cyberScore + dataScore;

    if (total === 0) {
        document.getElementById("result").innerHTML = "Please answer the questions first.";
        return;
    }

    let ai = parseFloat(((aiScore / total) * 100).toFixed(1));
    let web = parseFloat(((webScore / total) * 100).toFixed(1));
    let cyber = parseFloat(((cyberScore / total) * 100).toFixed(1));
    let data = parseFloat(((dataScore / total) * 100).toFixed(1));

    document.getElementById("result").innerHTML = `
    <h3>Career Compatibility</h3>
    <div class="compatibility-list">
        <div class="compatibility-card" onclick="selectCareer('AI')">
            <span class="career-title">AI Engineer</span>
            <span class="career-percentage">${ai}%</span>
        </div>
        <div class="compatibility-card" onclick="selectCareer('WEB')">
            <span class="career-title">Web Developer</span>
            <span class="career-percentage">${web}%</span>
        </div>
        <div class="compatibility-card" onclick="selectCareer('CYBER')">
            <span class="career-title">Cyber Security</span>
            <span class="career-percentage">${cyber}%</span>
        </div>
        <div class="compatibility-card" onclick="selectCareer('DATA')">
            <span class="career-title">Data Scientist</span>
            <span class="career-percentage">${data}%</span>
        </div>
    </div>
    <p class="select-tip">💡 Click on any option above to explore its roadmap and dashboard status!</p>
    `;

    // Automatically select the highest scoring career
    let scores = [
        { code: 'AI', score: aiScore },
        { code: 'WEB', score: webScore },
        { code: 'CYBER', score: cyberScore },
        { code: 'DATA', score: dataScore }
    ];
    scores.sort((a, b) => b.score - a.score);
    if (scores[0].score > 0) {
        selectCareer(scores[0].code);
    }

    drawChart(ai, web, cyber, data);
}

function analyzeSkills() {

    let skillsInput = document.getElementById("skills");
    if (!skillsInput) return;

    let skills = skillsInput.value.toLowerCase();

    let missing = [];

    if (!skills.includes("javascript"))
        missing.push("JavaScript");

    if (!skills.includes("react"))
        missing.push("React");

    if (!skills.includes("node"))
        missing.push("NodeJS");

    let skillResultDiv = document.getElementById("skillResult");
    if (missing.length === 0) {
        skillResultDiv.innerHTML = `
        <div class="skills-success">🎉 You have all the core web development skills!</div>
        `;
    } else {
        skillResultDiv.innerHTML = `
        <h3>Missing Skills</h3>
        <ul class="missing-skills-list">
            ${missing.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
        `;
    }
}


let careerChartInstance = null;

function drawChart(ai, web, cyber, data) {

    const canvas = document.getElementById("careerChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Destroy old chart instance to prevent 'Canvas already in use' error
    if (careerChartInstance) {
        careerChartInstance.destroy();
    }

    careerChartInstance = new Chart(ctx, {
        type: "bar",

        data: {
            labels: ["AI", "Web", "Cyber", "Data"],

            datasets: [{
                label: "Compatibility %",
                data: [ai, web, cyber, data],
                backgroundColor: ["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

function showInternships(career) {

    let internships = "";

    switch (career) {

        case "AI":
            internships =
                `
            AI Intern<br>
            Machine Learning Intern<br>
            Data Analyst Intern
            `;
            break;

        case "WEB":
            internships =
                `
            Frontend Intern<br>
            Full Stack Intern<br>
            React Developer Intern
            `;
            break;

        case "CYBER":
            internships =
                `
            Security Intern<br>
            SOC Analyst Intern
            `;
            break;

        case "DATA":
            internships =
                `
            Data Analyst Intern<br>
            BI Intern
            `;
            break;
    }

    document.getElementById("internships").innerHTML = internships;
}

function showinterviewQuestions(career) {

    let questions = "";

    switch (career) {

        case "AI":
            questions =
                `
            1. What is ML?<br>
            2. What is Deep Learning?<br>
            3. Explain Overfitting.
            `;
            break;

        case "WEB":
            questions =
                `
            1. What is HTML?<br>
            2. Explain JavaScript.<br>
            3. What is React?
            `;
            break;

        case "CYBER":
            questions =
                `
            1. What is a firewall?<br>
            2. Explain SQL Injection.<br>
            3. What is penetration testing?
            `;
            break;

        case "DATA":
            questions =
                `
            1. What is data normalization?<br>
            2. Explain the difference between supervised and unsupervised learning.<br>
            3. What is a confusion matrix?
            `;
            break;
    }

    document.getElementById("interviewQuestions").innerHTML = questions;
}

function resetQuiz() {

    aiScore = 0;
    webScore = 0;
    cyberScore = 0;
    dataScore = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("roadmapResult").innerHTML = "Select a career to view roadmap.";
    document.getElementById("internships").innerHTML = "";
    document.getElementById("interviewQuestions").innerHTML = "";

    if (typeof careerChartInstance !== "undefined" && careerChartInstance !== null) {
        careerChartInstance.destroy();
        careerChartInstance = null;
    }
}

function getScores() {
    return {
        ai: aiScore,
        web: webScore,
        cyber: cyberScore,
        data: dataScore
    };
}




