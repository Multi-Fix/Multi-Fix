document.getElementById("formContacto")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const numero = "5210000000000"; // ⚠️ Cambia este número
  const texto = `Hola, soy ${nombre}. Correo: ${email}. Mensaje: ${mensaje}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});
