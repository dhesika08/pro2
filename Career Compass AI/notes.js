// notes.js
function saveNotes() {
    let notes = document.getElementById("studyNotes").value;
    localStorage.setItem("studyNotes", notes);
    
    // Quick visual feedback
    let btn = document.querySelector("#notesArea button");
    let originalText = btn.innerText;
    btn.innerText = "Saved!";
    setTimeout(() => {
        btn.innerText = originalText;
    }, 2000);
}

function loadNotes() {
    let savedNotes = localStorage.getItem("studyNotes");
    if (savedNotes) {
        document.getElementById("studyNotes").value = savedNotes;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadNotes();
});
