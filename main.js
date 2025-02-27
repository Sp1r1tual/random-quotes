import quotes from "./quotes.js";

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

    do {
        currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    } while (currentQuoteIndex === lastIndex);

    const randomQuote = quotes[currentQuoteIndex];
    lastIndex = currentQuoteIndex;

    quoteText.innerHTML = randomQuote.quote;
    authorText.innerText = "— " + randomQuote.author;

    updateFavoriteIcon(randomQuote.isFavorite);
    toggleFavoriteBtn.style.display = "inline";
}

function toggleFavorite() {
    if (currentQuoteIndex === -1) {
        console.warn("Цитата ще не згенерована");
        return;
    }

    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite;
    updateFavoriteIcon(currentQuote.isFavorite);

    if (currentQuote.isFavorite) {
        const favoriteCard = createFavoriteCard(currentQuote);
        favoritesContainer.appendChild(favoriteCard);
    } else {
        removeFavoriteFromList(currentQuote);
    }
}

function createFavoriteCard(quote) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");

    favoriteCard.innerHTML = `
        <p>${quote.quote} – ${quote.author}</p>
        <img src="heart-filled.png" class="favorite-icon" alt="Видалити з улюбленого">
    `;

    const icon = favoriteCard.querySelector(".favorite-icon");
    icon.addEventListener("click", () => {
        quote.isFavorite = false;
        favoriteCard.remove();
        if (currentQuoteIndex !== -1 && quotes[currentQuoteIndex] === quote) {
            updateFavoriteIcon(false);
        }
    });

    return favoriteCard;
}

function updateFavoriteIcon(isFavorite) {
    toggleFavoriteBtn.src = isFavorite ? "heart-filled.png" : "heart-empty.png";
    toggleFavoriteBtn.alt = isFavorite
        ? "Видалити з улюбленого"
        : "Додати в улюблене";
}

function removeFavoriteFromList(quoteToRemove) {
    document.querySelectorAll(".favorite-card").forEach((card) => {
        if (card.textContent.includes(quoteToRemove.quote)) {
            card.remove();
        }
    });
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    favoritesContainer.classList.toggle("dark-mode");
});

quoteButton.addEventListener("click", generateQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

quotes.forEach((quote) => {
    if (quote.isFavorite) {
        const favoriteCard = createFavoriteCard(quote);
        favoritesContainer.appendChild(favoriteCard);
    }
});
