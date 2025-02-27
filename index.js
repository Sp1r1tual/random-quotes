import quotes from "./src/quotes.js";
import {
    createFavoriteCard,
    removeFavoriteFromList,
    updateFavoriteIcon,
} from "./src/quotesManager.js";
import { generateRandomIndex } from "./utilities/math.js";

const favoritesContainer = document.getElementById("favorites-container");
const quoteButton = document.getElementById("quote-button");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const toggleFavoriteBtn = document.getElementById("toggle-favorite");

let lastIndex = -1;
let currentQuoteIndex = -1;

toggleFavoriteBtn.style.display = "none";

function generateQuote() {
    if (quotes.length === 0) {
        console.error("Список цитат порожній!");
        return;
    }

    currentQuoteIndex = generateRandomIndex(quotes.length, lastIndex);
    const randomQuote = quotes[currentQuoteIndex];
    lastIndex = currentQuoteIndex;

    quoteText.innerHTML = randomQuote.quote;
    authorText.innerText = "— " + randomQuote.author;

    updateFavoriteIcon(toggleFavoriteBtn, randomQuote.isFavorite);
    toggleFavoriteBtn.style.display = "inline";
}

function toggleFavorite() {
    if (currentQuoteIndex === -1) {
        console.warn("Цитата ще не згенерована");
        return;
    }

    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite;
    updateFavoriteIcon(toggleFavoriteBtn, currentQuote.isFavorite);

    if (currentQuote.isFavorite) {
        const favoriteCard = createFavoriteCard(currentQuote, (quote) => {
            if (
                currentQuoteIndex !== -1 &&
                quotes[currentQuoteIndex] === quote
            ) {
                updateFavoriteIcon(toggleFavoriteBtn, false);
            }
        });
        favoritesContainer.appendChild(favoriteCard);
    } else {
        removeFavoriteFromList(currentQuote);
    }
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    favoritesContainer.classList.toggle("dark-mode");
});

quoteButton.addEventListener("click", generateQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);
