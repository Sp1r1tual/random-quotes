import quotes from "./src/quotes.js";
import {
    showQuote,
    createFavoriteCard,
    removeFavoriteFromList,
    updateFavoriteIcon,
} from "./src/quotesManager.js";
import { generateRandomIndex } from "./utilities/math.js";

const toggleFavoriteBtn = document.getElementById("toggle-favorite");
const quoteButton = document.getElementById("quote-button");

let lastIndex = -1;
let currentQuoteIndex = -1;

function generateQuote() {
    if (quotes.length === 0) {
        console.error("Список цитат порожній!");
        return;
    }

    currentQuoteIndex = generateRandomIndex(quotes.length, lastIndex);

    const randomQuote = quotes[currentQuoteIndex];
    lastIndex = currentQuoteIndex;
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");

    showQuote(randomQuote, quoteText, authorText);

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
        const favoritesContainer = document.getElementById(
            "favorites-container"
        );
        const favoriteCard = createFavoriteCard(
            currentQuote.id,
            currentQuote,
            (quote) => {
                if (
                    currentQuoteIndex !== -1 &&
                    quotes[currentQuoteIndex] === quote
                ) {
                    updateFavoriteIcon(toggleFavoriteBtn, false);
                }
            }
        );
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
