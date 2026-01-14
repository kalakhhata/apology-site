// Redirect to message page
function goNext() {
  window.location.href = "message.html";
}

// Continuous floating hearts
function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 30 + 15 + "px"; // mobile-friendly size
    document.body.appendChild(heart);

    // Remove after 4s
    setTimeout(() => heart.remove(), 4000);
  }, 500); // every 0.5s
}

// Start hearts on page load
window.addEventListener("DOMContentLoaded", startFloatingHearts);
