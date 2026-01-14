function heartBlast() {
  for (let i = 0; i < 120; i++) {
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

heartBlast();

function goFinal() {
  window.location.href = "final.html";
}
function startMusicAndGo() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().then(() => {
    window.location.href = "final.html";
  }).catch(err => {
    console.log("Music play blocked:", err);
    window.location.href = "final.html";
  });
}
