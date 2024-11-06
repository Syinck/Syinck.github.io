let clickCount = 0;
const presentImage = document.getElementById('present');
const messageElement = document.getElementById('message');

const messages = [
    "Hello Pooie",
    "You see there is something that I want to show you",
    "I think that you are really awesome",
    "I hope this serves as a cool suprise",
    "Alright here we go!"
];

presentImage.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 5) {
        messageElement.textContent = messages[clickCount - 1];
    }
    if (clickCount === 5) {
        presentImage.src = 'IMG_4010.jpg';
        messageElement.textContent = "Thank you for being such an amazing partner, I appreciate you so much and I can't wait to spend the day with you <3. I love you Kendall.";
    }
});
