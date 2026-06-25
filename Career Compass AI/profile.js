// profile.js
function updateProfileUI() {
    let name = localStorage.getItem("userName") || "Guest User";
    let email = localStorage.getItem("userEmail") || "Not logged in";
    
    document.getElementById("profileNameDisplay").innerText = name;
    document.getElementById("profileEmailDisplay").innerText = email;
}

window.addEventListener("DOMContentLoaded", () => {
    updateProfileUI();
});
