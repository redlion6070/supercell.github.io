// Función para agregar un artículo al carrito
function addToCart(itemName, price) {
  // Obtener el carrito del localStorage, si no existe, crear un arreglo vacío
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Crear el nuevo artículo
  const item = {
    name: itemName,
    price: price
  };

  // Agregar el artículo al carrito
  cart.push(item);

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Actualizar la vista del carrito
  updateCartView();

  alert(`Se ha agregado ${itemName} al carrito.`);
}

// Función para actualizar la vista del carrito
function updateCartView() {
  // Obtener los artículos del carrito
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");

  // Limpiar el contenido actual del carrito
  cartItems.innerHTML = "";

  // Crear los elementos de la lista para cada artículo
  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price} gemas`;
    cartItems.appendChild(listItem);
  });
}

// Función para proceder al pago
function proceedToCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];

  if (cart.length > 0) {
    // Mover los artículos del carrito al historial de compras
    purchaseHistory.push(...cart);

    // Guardar el historial actualizado
    localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));

    // Vaciar el carrito
    localStorage.setItem("cart", JSON.stringify([]));

    // Actualizar las vistas del carrito y el historial
    updateCartView();
    updatePurchaseHistoryView();

    alert("Compra realizada. Los artículos han sido movidos al historial.");
  } else {
    alert("El carrito está vacío.");
  }
}

// Función para actualizar la vista del historial de compras
function updatePurchaseHistoryView() {
  const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
  const historyList = document.getElementById('history-items'); // Usar el id correcto

  // Limpiar el contenido actual del historial
  historyList.innerHTML = "";

  // Crear los elementos de la lista para cada artículo del historial
  purchaseHistory.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price} gemas`;
    historyList.appendChild(listItem);
  });
}


// Función para manejar el cierre de sesión
function closeSession() {
  alert("Cerrando sesión...");
  // Limpiar el carrito y el historial de compras del localStorage
  localStorage.removeItem("cart");
  localStorage.removeItem("purchaseHistory");

  // Redirigir a la página de inicio o cualquier otra página
  window.location.href = 'index.html';

  // Actualizar las vistas del carrito e historial
  updateCartView();
  updatePurchaseHistoryView();
}

// Llamar a la función para actualizar la vista del carrito cuando se cargue la página
window.onload = () => {
  updateCartView();
  updatePurchaseHistoryView(); // Actualizamos también el historial al cargar la página
};



