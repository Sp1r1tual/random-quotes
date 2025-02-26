import quotes from "./quotes.js";

let lastIndex;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    document.getElementById("quote").innerHTML = quotes[randomIndex].quote;

    document.getElementById("author").innerText =
        "— " + quotes[randomIndex].author;
}

document
    .getElementById("quote-button")
    .addEventListener("click", generateQuote);

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
