function goToFinal() {
  // Trigger heart explosion animation before redirect
  finalHeartBlast();

  // Redirect to final page after a short delay
  setTimeout(() => {
    window.location.href = "final.html"; // your final page
  }, 4000); // slightly shorter for mobile
}

// Heart explosion animation
function finalHeartBlast() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = Math.random() > 0.6 ? "🎀" : "💖"; // 40% chance ribbon
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.fontSize = Math.random() * 40 + 15 + "px"; // mobile-friendly sizes
      document.body.appendChild(heart);

      // Remove after animation
      setTimeout(() => heart.remove(), 4000);
    }, i * 40); // faster spawn for smoother look
  }
}

// Optional: continuous floating hearts in background
function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = Math.random() > 0.7 ? "🎀" : "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Start floating hearts on page load
window.addEventListener("DOMContentLoaded", startFloatingHearts);
