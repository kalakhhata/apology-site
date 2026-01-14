const text = 
`I know I messed up...
But Yana mara intention ava nata its just situation avi hati yana ❤️
Every smile of yours matters to me nd etle hu tane hasava memes mokaltoto please ave reply api de ne.
Please forgive me 🥺`;

let index = 0;
const speed = 50;

function typeEffect() {
  const element = document.getElementById("typeText");
  if (!element) return; // safety check

  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

// Start typing when page loads
window.addEventListener("DOMContentLoaded", typeEffect);

// Redirect to surprise page
function goSurprise() {
  window.location.href = "surprise.html";
}
