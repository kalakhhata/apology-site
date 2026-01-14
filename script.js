function goNext() {
  window.location.href = "message.html";
}

// floating hearts auto
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);
