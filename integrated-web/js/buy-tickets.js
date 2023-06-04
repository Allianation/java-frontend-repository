// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre      = document.getElementById("nombre");
let apellido    = document.getElementById("apellido");
let correo      = document.getElementById("correo");
let cantidad    = document.getElementById("cantidad");
let categoria   = document.getElementById("categoria");

// Función para quitar el estilo de error a los elementos del form
function removeClassError() {
    let x = document.querySelectorAll(".form-control, .form-select");

    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Calculo el total a pagar
function handleClickBuy() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    removeClassError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value === "") {
        alert("Por favor, escribí tu email.");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

    if (!emailValido(correo.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidad.value == 0) || (isNaN(cantidad.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    // Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de tickets por el valor
    let valorTotalTickets = (cantidad.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 0) {
        valorTotalTickets = valorTotalTickets;
    }
    if (categoria.value == 1) {
        valorTotalTickets = valorTotalTickets - (descuentoEstudiante / 100 * valorTotalTickets);
    }
    if (categoria.value == 2) {
        valorTotalTickets = valorTotalTickets - (descuentoTrainee / 100 * valorTotalTickets);
    }
    if (categoria.value == 3) {
        valorTotalTickets = valorTotalTickets - (descuentoJunior / 100 * valorTotalTickets);
    }

    // Inserto el valor en el HTML
    total.innerHTML = valorTotalTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', handleClickBuy);

// Reinicio los campos
function handleClickReset() {
    removeClassError();
    total.innerHTML = "";
}

// Botón Borrar recibe un escuchador y la funcion de reinicio
btnBorrar.addEventListener('click', handleClickReset);