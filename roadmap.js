function generateRoadmap(career) {

    let roadmap = "";

    switch (career) {

        case "AI":
            roadmap = `
                <h3> AI Engineer Roadmap</h3>

                <ul>
                    <li>Learn Python</li>
                    <li>Learn Data Structures</li>
                    <li>Numpy & Pandas</li>
                    <li>Statistics</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Neural Networks</li>
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                    <li>Generative AI</li>
                    <li>Build AI Projects</li>
                    <li>Create Portfolio</li>

                </ul>

                <h4>Expected Salary</h4>
                <p>6 LPA - 25 LPA</p>
                `;

            break;

        case "WEB":
            roadmap = `
                <h3> Full Stack Web Developer Roadmap</h3>
            
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Git & GitHub</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>REST APIs</li>
                    <li>Authentication</li>
                    <li>Deployment</li>
                    <li>Build Full Stack Projects</li>
                    
                </ul>
                
                <h4>Expected Salary</h4>
                <p>4 LPA - 20 LPA</p>
                `;

            break;

        case "CYBER":
            roadmap = `
                <h3> Cyber Security Analyst Roadmap</h3>
                
                <ul>
                    <li>Computer Networks</li>
                    <li>Linux Basics</li>
                    <li>Python</li>
                    <li>Cyber Security Fundamentals</li>
                    <li>Ethical Hacking</li>
                    <li>Web Security</li>
                    <li>Cryptography</li>
                    <li>Penetration Testing</li>
                    <li>Bug Bounty</li>
                    <li>CTF Challenges</li>
                    <li>Security Certifications</li>
                </ul>
                
                <h4>Expected Salary</h4>
                <p>5 LPA - 22 LPA</p>
                `;

            break;

        case "DATA":
            roadmap = `
                <h3> Data Scientist Roadmap</h3>
                
                <ul>
                    <li>Python</li>
                    <li>Statistics</li>
                    <li>Probability</li>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>Data Visualization</li>
                    <li>SQL</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Data Analytics Projects</li>
                </ul>
                
                <h4>Expected Salary</h4>
                <p>6 LPA - 24 LPA</p>
                `;

            break;

        default:
            roadmap = `
                <h3>Select a career first</h3>
                `;
    }


    const roadmapDiv = document.getElementById("roadmapResult");
    if (roadmapDiv) {
        roadmapDiv.innerHTML = roadmap;
    }
    localStorage.setItem("roadmap", roadmap);
}

function selectCareer(careerCode) {
    let displayName = "";
    switch (careerCode) {
        case "AI":
            displayName = "AI Engineer";
            break;
        case "WEB":
            displayName = "Full Stack Web Developer";
            break;
        case "CYBER":
            displayName = "Cyber Security Analyst";
            break;
        case "DATA":
            displayName = "Data Scientist";
            break;
        default:
            displayName = "Not Selected";
    }
    localStorage.setItem("career", displayName);
    generateRoadmap(careerCode);
    if (typeof updateDashboard === "function") {
        updateDashboard();
    }
}




