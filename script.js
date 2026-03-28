const yesBtn = document.getElementById("yes"); // actually NO button 😏
const noBtn = document.getElementById("no");   // actually YES button 😈
const question = document.getElementById("question");

// when she clicks NO (your yesBtn)
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// make YES button run away 😂
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
