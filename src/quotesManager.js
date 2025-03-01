function showQuote(randomQuote, quoteText, authorText) {
    if (!quoteText || !authorText) {
        console.error("Елементи для цитати або автора не знайдені");
        return;
    }
    quoteText.innerHTML = randomQuote.quote;
    authorText.innerText = "— " + randomQuote.author;
}

function createFavoriteCard(id, quote, onRemoveFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.dataset.quoteId = id;

    favoriteCard.innerHTML = `
        <p>${quote.quote} – ${quote.author}</p>
        <img src="heart-filled.png" class="favorite-icon" alt="Видалити з улюбленого">
    `;

    const icon = favoriteCard.querySelector(".favorite-icon");
    icon.addEventListener("click", () => {
        removeFavoriteFromList(quote, onRemoveFavorite);
    });

    return favoriteCard;
}

function findCardById(id) {
    return document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
}

function removeFavoriteFromList(quoteToRemove, onRemoveCallback = null) {
    const card = findCardById(quoteToRemove.id);
    if (card) {
        card.remove();
        quoteToRemove.isFavorite = false;
        if (onRemoveCallback) {
            onRemoveCallback(quoteToRemove);
        }
    }
}

function updateFavoriteIcon(button, isFavorite) {
    button.src = isFavorite ? "heart-filled.png" : "heart-empty.png";
    button.alt = isFavorite ? "Видалити з улюбленого" : "Додати в улюблене";
}

export {
    showQuote,
    createFavoriteCard,
    removeFavoriteFromList,
    updateFavoriteIcon,
};
