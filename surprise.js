const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const nextBtn = document.getElementById("nextBtn");

// Play / Pause Music Button
musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.innerText = "Pause Music ⏸️";
  } else {
    audio.pause();
    musicBtn.innerText = "Play Music 🎵";
  }
});

// Go to final page (or trigger final animations)
nextBtn.addEventListener("click", () => {
  // Optional: add hearts explosion before redirect
  finalHeartBlast();

  // Redirect to final page after short delay
  setTimeout(() => {
    window.location.href = "final.html"; // replace with your final page
  }, 1000); // 1 second delay
});

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
