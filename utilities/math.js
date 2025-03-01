function generateRandomIndex(max, lastIndex = -1) {
    if (max <= 0) {
        throw new Error("Максимальне значення має бути більше 0");
    }

    if (max === 1) {
        return 0;
    }

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * max);
    } while (newIndex === lastIndex);

    return newIndex;
}

function generateRandomId() {
    return Math.floor(Math.random() * 0xffffffff)
        .toString(16)
        .padStart(8, "0");
}

export { generateRandomIndex, generateRandomId };
