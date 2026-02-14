const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const pantallaInicial = document.getElementById("pantallaInicial");
const mensajeSorpresa = document.getElementById("mensajeSorpresa");
const sobre = document.querySelector(".envoltura-sobre");
const musica = document.getElementById("musicaRomantica");

/* BOTÓN NO ESCAPA */
noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
});

/* BOTÓN SÍ */
yesBtn.addEventListener("click", () => {
  pantallaInicial.style.display = "none";
  mensajeSorpresa.style.display = "block";

  musica.volume = 0.5;
  musica.play();

  setTimeout(() => {
    mensajeSorpresa.style.display = "none";
    sobre.style.display = "block";
  }, 2500);
});

/* ABRIR SOBRE */
sobre.addEventListener("click", () => {
  sobre.classList.toggle("abierto");
});
