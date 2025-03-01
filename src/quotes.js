import { generateRandomId } from "../utilities/math.js";

const quotesData = [
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

const quotes = quotesData.map((quoteData) => ({
    id: generateRandomId(),
    ...quoteData,
    isFavorite: false,
}));
console.log(quotes);

export default quotes;
