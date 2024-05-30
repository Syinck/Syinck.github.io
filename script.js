let clickCount = 0;
const presentImage = document.getElementById('present');
const messageElement = document.getElementById('message');

const messages = [
    "Don't open this!",
    "I'm warning you!",
    "You might not like what you see!",
    "You better be ready!",
    "Last chance!"
];

presentImage.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 5) {
        messageElement.textContent = messages[clickCount - 1];
    }
    if (clickCount === 5) {
        presentImage.src = 'bingo.jpg';
        messageElement.textContent = "I love you - pookie";
    }
});
