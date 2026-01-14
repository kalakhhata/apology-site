const text = 
`I know I messed up...
But Yana mara intention ava nata its just situation avi hati yana ❤️
Every smile of yours matters to me nd etle hu tane hasava memes mokaltoto please ave reply api de ne.
Please forgive me 🥺`;

let index = 0;
const speed = 50;
const element = document.getElementById("typeText");

function typeEffect() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

function goSurprise() {
  window.location.href = "surprise.html";
}
