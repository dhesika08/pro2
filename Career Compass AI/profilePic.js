// profilePic.js
function uploadProfilePic(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Image = e.target.result;
            localStorage.setItem("profileImage", base64Image);
            document.getElementById("profileImage").src = base64Image;
        };
        reader.readAsDataURL(file);
    }
}

function loadProfilePic() {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        document.getElementById("profileImage").src = savedImage;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadProfilePic();
});
