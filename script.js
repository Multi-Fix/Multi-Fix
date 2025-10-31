const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Inicialmente ocultamos el menú en móvil
function initMenu() {
  if (window.innerWidth <= 768) {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// Abrir / cerrar menú al hacer clic
menuBtn.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

// Ajustar al redimensionar
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Ejecutamos al cargar
initMenu();
