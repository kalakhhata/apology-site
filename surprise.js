function startMusicAndGo() {
  const audio = document.getElementById("bgMusic");
  audio.play();           // Start the music
  audio.loop = true;      // Loop continuously

  // Optional: change button text
  const btn = document.querySelector("button");
  btn.innerText = "Playing 🎵";
  btn.disabled = true;

  // Trigger heart explosion animation
  finalHeartBlast();
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
