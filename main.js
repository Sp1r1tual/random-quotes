const quotes = [
    "Роби, що можеш, з тим, що маєш, там, де ти є. — Теодор Рузвельт",
    "Єдиний спосіб робити велику справу – любити те, що ти робиш. — Стів Джобс",
    "Не бійся провалу. Це не кінець світу. — Дензел Вашингтон",
    "Життя – це 10% того, що з тобою відбувається, і 90% того, як ти на це реагуєш. — Чарльз Свіндолл",
];

let lastIndex;

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    document.getElementById("quote").innerText = quotes[randomIndex];
}
