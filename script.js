const valorTicket = 200;
const descuentoEstudiantes = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

const pTotalAPagar = document.querySelector("#total-a-pagar");
const botonResumen = document.querySelector("#boton-resumen");
const botonBorrar = document.querySelector("#borrar");
const formulario = document.querySelector("#formulario");

botonResumen.addEventListener("click", calcularDescuentos);

function calcularDescuentos() {
  const cantidadTickets = document.querySelector("#cantidad-tickets").value;
  const categoria = document.querySelector("#categorias").value;
  const totalSinDesc = cantidadTickets * valorTicket

  switch (categoria) {
    case "1":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc
      }</p>`;
      break;
    case "2":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
       totalSinDesc - (totalSinDesc * descuentoEstudiantes)
      }</p>`;

      break;
    case "3":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc - (totalSinDesc * descuentoTrainee)
      }</p>`;

      break;
    case "4":
      pTotalAPagar.innerHTML = `<p>Total a pagar: $${
        totalSinDesc - (totalSinDesc * descuentoJunior)
      }</p>`;

      break;
  }
}

function resetear(){
    formulario.reset();
    pTotalAPagar.innerHTML = `<p>Total a pagar: $ </p>`
}

botonBorrar.addEventListener("click", resetear)

