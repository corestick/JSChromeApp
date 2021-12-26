const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

body.style.backgroundImage = `url(./img/${chosenImage})`;
body.style.backgroundRepeat = `no-repeat`;
body.style.backgroundPosition = `absolute`;
