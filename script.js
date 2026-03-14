const words = [
  " Web Developer ",
  " Data Analyst ",
  " Cyber Security Enthusiast ",
  " Tech Explorer ",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];

  let displayText;

  if (isDeleting) {
    displayText = currentWord.substring(0, charIndex--);
  } else {
    displayText = currentWord.substring(0, charIndex++);
  }

  document.getElementById("typing").textContent = displayText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
