import quotes from "./quotes.js";

const toggleFavoriteBtn = document.getElementById("toggle-favorite");
const favoritesContainer = document.getElementById("favorites-container");
let lastIndex = -1;
let currentQuoteIndex;

function handleButtonClick(buttonId, action) {
    document.getElementById(buttonId).addEventListener("click", action);
}

function generateQuote() {
    do {
        currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    } while (currentQuoteIndex === lastIndex);

    const randomQuote = quotes[currentQuoteIndex];
    lastIndex = currentQuoteIndex;

    document.getElementById("quote").innerHTML =
        quotes[currentQuoteIndex].quote;
    document.getElementById("author").innerText =
        "— " + quotes[currentQuoteIndex].author;

    toggleFavoriteBtn.textContent = randomQuote.isFavorite
        ? "Вилучити"
        : "Улюблене";

    toggleFavoriteBtn.style.display = "inline-block";
}

handleButtonClick("quote-button", generateQuote);

function toggleFavorite() {
    const currentQuote = quotes[currentQuoteIndex];

    currentQuote.isFavorite = !currentQuote.isFavorite;
    toggleFavoriteBtn.textContent = currentQuote.isFavorite
        ? "Вилучити"
        : "Улюблене";

    if (currentQuote.isFavorite) {
        const favoriteCard = document.createElement("div");

        favoriteCard.classList.add("favorite-card");
        favoriteCard.innerHTML = `<p>${currentQuote.quote} – ${currentQuote.author}</p>`;
        favoritesContainer.appendChild(favoriteCard);
    } else {
        const favoriteCards = document.querySelectorAll(".favorite-card");

        favoriteCards.forEach((card) => {
            if (card.textContent.includes(currentQuote.quote)) {
                card.remove();
            }
        });
    }
}

handleButtonClick("toggle-favorite", toggleFavorite);

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document
        .getElementById("favorites-container")
        .classList.toggle("dark-mode");
});
