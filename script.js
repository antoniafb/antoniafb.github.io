AOS.init({
  duration: 1000,
});

const words = ["Web Developer ", "Data Analyst ", "Cyber Security Enthusiast "];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    j--;
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

/* DARK MODE */

document.getElementById("darkToggle").onclick = function () {
  document.body.classList.toggle("dark");
};
