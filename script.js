// Obtener elementos
const openModalBtn = document.getElementById("open-cookie-modal");
const closeModalBtn = document.getElementById("close-cookie-modal");
const confirmBtn = document.querySelector(".confirm-btn");
const cookieModal = document.getElementById("cookie-modal");

// Abrir el modal
openModalBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  cookieModal.style.display = "block";
});

// Cerrar el modal al hacer clic en la "X"
closeModalBtn.addEventListener("click", function () {
  cookieModal.style.display = "none";
});

// Cerrar el modal al hacer clic en el botón "Confirmar mis preferencias"
confirmBtn.addEventListener("click", function () {
  cookieModal.style.display = "none";
  // Aquí puedes agregar código para guardar la preferencia de cookies si es necesario
});

// Cerrar el modal al hacer clic fuera del contenido modal
window.addEventListener("click", function (event) {
  if (event.target == cookieModal) {
    cookieModal.style.display = "none";
  }
});