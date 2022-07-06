//image array
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //add html from js
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);  //add js to html