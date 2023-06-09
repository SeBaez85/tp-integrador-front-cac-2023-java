const valorTicket = 200;
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

const cantidadTickets = document.querySelector("#cantidad-tickets");
const categoria = document.querySelector("#categorias");
const pTotalAPagar = document.querySelector("#total-a-pagar");
const botonResumen = document.querySelector("#boton-resumen");
const botonBorrar = document.querySelector("#borrar");
const formulario = document.querySelector("#formulario");

botonResumen.addEventListener("click", (event) => {
  event.preventDefault();
  comprobacion();
  calcularDescuentos();
});

function calcularDescuentos() {
  const totalSinDesc = cantidadTickets.value * valorTicket;

  switch (categoria.value) {
    case "1":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${totalSinDesc}</p>`;
      break;
    case "2":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc - totalSinDesc * descuentoEstudiante
      }</p>`;

      break;
    case "3":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc - totalSinDesc * descuentoTrainee
      }</p>`;

      break;
    case "4":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc - totalSinDesc * descuentoJunior
      }</p>`;

      break;
  }
}

function comprobacion() {
  nombre = document.querySelector('input[placeholder="Nombre"]').value;
  apellido = document.querySelector('input[placeholder="Apellido"]').value;
  correo = document.querySelector('input[placeholder="Correo"]').value;

  if (nombre == "" && apellido == "" && correo == "") {
    return Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: "¡POR FAVOR COMPLETÁ LOS CAMPOS!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (nombre == "") {
    return Swal.fire({
      icon: "warning",
      title: "¡Advertencia!",
      text: "¡Por favor ingresá tu nombre!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (apellido == "") {
    return Swal.fire({
      icon: "warning",
      title: "¡Advertencia!",
      text: "¡Por favor ingresá tu apellido!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (correo == "") {
    return Swal.fire({
      icon: "warning",
      title: "¡Advertencia!",
      text: "¡Por favor ingresá tu correo!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (cantidadTickets.value == "" || cantidadTickets.value == 0) {
    return Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: "¡Debés ingresar una cantidad válida de tickets!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}
function resetear() {
  formulario.reset();
  pTotalAPagar.innerHTML = `<p>Total a pagar: $ </p>`;
}

botonBorrar.addEventListener("click", resetear);
