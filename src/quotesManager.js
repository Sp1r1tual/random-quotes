function createFavoriteCard(quote, onRemoveFavorite) {
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
        onRemoveFavorite(quote);
    });

    return favoriteCard;
}

function removeFavoriteFromList(quoteToRemove) {
    document.querySelectorAll(".favorite-card").forEach((card) => {
        if (card.textContent.includes(quoteToRemove.quote)) {
            card.remove();
        }
    });
}

function updateFavoriteIcon(button, isFavorite) {
    button.src = isFavorite ? "heart-filled.png" : "heart-empty.png";
    button.alt = isFavorite ? "Видалити з улюбленого" : "Додати в улюблене";
}

export { createFavoriteCard, removeFavoriteFromList, updateFavoriteIcon };
