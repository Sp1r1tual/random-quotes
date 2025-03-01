function showQuote(randomQuote, quoteText, authorText) {
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
        quote.isFavorite = false;
        favoriteCard.remove();
        onRemoveFavorite(quote);
    });

    return favoriteCard;
}

function findCardById(id) {
    return document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
}

function removeFavoriteFromList(quoteToRemove) {
    const card = findCardById(quoteToRemove.id);
    if (card) {
        card.remove();
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
