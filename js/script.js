// ===============================
// IMPROSTOCK - Funciones JavaScript
// ===============================

// Mensaje de bienvenida al cargar el Dashboard
function bienvenida() {
    alert("Bienvenido a Improstock - Sistema de Gestión de Inventarios");
}

// Validación del Login
function validarLogin() {

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    if (correo === "" || password === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    alert("Inicio de sesión exitoso.");

    window.location.href = "dashboard.html";

    return false;
}

// Registrar producto
function registrarProducto() {

    if (confirm("¿Desea registrar este producto?")) {
        alert("Producto registrado correctamente.");
    }

}

// Registrar pedido
function registrarPedido() {

    if (confirm("¿Desea registrar este pedido?")) {
        alert("Pedido registrado correctamente.");
    }

}

// Mostrar fecha actual
function mostrarFecha() {

    const fecha = new Date();

    const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const texto = fecha.toLocaleDateString("es-ES", opciones);

    const elemento = document.getElementById("fechaActual");

    if (elemento) {
        elemento.innerHTML = texto;
    }

}