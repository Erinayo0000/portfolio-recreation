const typedText = document.querySelector(".typed-text");
const words = ["Web Developer", "UI/UX Designer", "Photographer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 2000; // delay between words

function type() {
    if (wordIndex < words.length) {
        if (!isDeleting && charIndex <= words[wordIndex].length) {
            typedText.textContent = words[wordIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else if (isDeleting && charIndex >= 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(type, erasingDelay);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex++;
                if (wordIndex >= words.length) wordIndex = 0;
            }
            setTimeout(type, newWordDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newWordDelay);
});
