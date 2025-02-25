const quotes = [
    {
        quote: "Роби, що можеш, з тим, що маєш, там, де ти є",
        author: "Теодор Рузвельт",
    },
    {
        quote: "Єдиний спосіб робити велику справу – любити те, що ти робиш",
        author: "Стів Джобс",
    },
    {
        quote: "Не бійся провалу. Це не кінець світу",
        author: "Дензел Вашингтон",
    },
    {
        quote: "Життя – це 10% того, що з тобою відбувається, і 90% того, як ти на це реагуєш",
        author: "Чарльз Свіндолл",
    },
];

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

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
