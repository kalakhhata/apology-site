function goToFinal() {
  // Trigger heart explosion animation before redirect
  finalHeartBlast();

  // Redirect to final page after a short delay (1 second)
  setTimeout(() => {
    window.location.href = "final.html"; // replace with your final page filename
  }, 5000);
}

// Heart explosion animation
function finalHeartBlast() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.fontSize = Math.random() * 50 + 20 + "px";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }, i * 60);
  }
}
