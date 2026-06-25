// quotes.js
const quotes = [
    "“The future depends on what you do today.” – Mahatma Gandhi",
    "“Choose a job you love, and you will never have to work a day in your life.” – Confucius",
    "“Don't watch the clock; do what it does. Keep going.” – Sam Levenson",
    "“The only way to do great work is to love what you do.” – Steve Jobs",
    "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",
    "“Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it.” – Lou Holtz",
    "“Believe you can and you're halfway there.” – Theodore Roosevelt",
    "“It is never too late to be what you might have been.” – George Eliot"
];

function displayRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteElement = document.getElementById("quoteContainer");
    if (quoteElement) {
        quoteElement.innerText = quotes[randomIndex];
    }
}

window.addEventListener("DOMContentLoaded", () => {
    displayRandomQuote();
});
