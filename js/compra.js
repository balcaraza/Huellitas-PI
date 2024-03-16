// card de formulario
var cerrar = document.getElementById("cerrar");
var cancelar = document.getElementById("cancelar");
var tarjeta = document.getElementById("tarjeta");

// botones
let pagar = document.getElementById("pagar");
//mostrar tarjeta
document.getElementById("mostrarTarjeta").addEventListener("click", function () {
  document.getElementById("tarjeta").style.display = "block";
});

//botones de cerrar tarjeta y cancelar
cerrar.addEventListener("click", function () {
  tarjeta.style.display = "none";
});
cancelar.addEventListener("click", function () {
  tarjeta.style.display = "none";
});

//datos de direccion de enevio
let nombre = document.getElementById("nombre");
let calle = document.getElementById("calle");
let numero = document.getElementById("numero");
let colonia = document.getElementById("colonia");
let municipio = document.getElementById("municipio");
let estado = document.getElementById("estado");

let cp = document.getElementById("cp");
let telefono = document.getElementById("telefono");
let instruc = document.getElementById("instruc");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//datos de la tarjeta
let nombreTarjeta = document.getElementById("nombreTarjeta");
let mesVencimiento = document.getElementById("mesVencimiento");
let ccv = document.getElementById("ccv");

let alertValidaciones2 = document.getElementById("alertValidaciones2");
let alertValidacionesTexto2 = document.getElementById("alertValidacionesTexto2");
//Expresiones Regulares
let regexTelefono = new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$");
let regexTelefono2 = new RegExp(/(.)\1{4}/);
let codigoPos = new RegExp("^d{5}$");
let isValid = true;
//boton pagar
pagar.addEventListener("click", function (event) {
  event.preventDefault();
  //direccion de envio
  nombre.style.border = "";
  calle.style.border = "";
  numero.style.border = "";
  colonia.style.border = "";
  municipio.style.border = "";
  estado.style.border = "";
  cp.style.border = "";
  telefono.style.border = "";
  instruc.style.border = "";

  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  //metodo de pago
  nombreTarjeta.style.border = "";
  mesVencimiento.style.border = "";
  ccv.style.border = "";
  alertValidacionesTexto2.innerHTML = "";
  alertValidaciones2.style.display = "none";
  //Espacios Vacios direccion
  nombre.value = nombre.value.trim();
  calle.value = calle.value.trim();
  numero.value = numero.value.trim();
  colonia.value = colonia.value.trim();
  municipio.value = municipio.value.trim();
  estado.value = municipio.value.trim();
  cp.value = cp.value.trim();
  telefono.value = telefono.value.trim();
  instruc = instruc.value.trim();
  let contIns = instruc.value.trim().split(" ");
  //Espacios vacios tarjeta
  nombreTarjeta.value = nombreTarjeta.value.trim();
  mesVencimiento = mesVencimiento.value.trim();
  ccv = ccv.value.trim();
  isValid = true;

  //validación del nombre
  let numPalabras = nombre.value.trim().split(/\s+/).length;
  if (numPalabras < 2 || numPalabras > 5) {
   alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingresa su nombre completo.<br/>`);
   alertValidaciones.style.display = "block";
    nombre.style.border = "solid red thin";
    isValid = false;
  } //if nombre
  //Validacion calle
  if (calle.value.length < 3) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese una calle válida.<br/>`);
    alertValidaciones.style.display = "block";
    calle.style.border = "solid red thin";
    isValid = false;
  } //if calle
  //Validación número.
  if (numero.value.length < 1) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese un número válido .<br/>`);
    alertValidaciones.style.display = "block";
    numero.style.border = "solid red thin";
    isValid = false;
  } //if length me valida que tenga un dato permite letra s porque puede ser 1-A
  //Validación de Colonia
  if (colonia.value.length < 3) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese una colonia válida.<br/>`);
    alertValidaciones.style.display = "block";
    colonia.style.border = "solid red thin";
    isValid = false;
  } //if colonia
  //Validacion municipio
  if (municipio.value.length < 4) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese un municipio válida.<br/>`);
    alertValidaciones.style.display = "block";
    municipio.style.border = "solid red thin";
    isValid = false;
  } //if municipio
  //Validación estado
  if (estado.value == 0) {
   alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese un estado.<br/>`);
   alertValidaciones.style.display = "block";
   estado.style.border = "solid red thin";
   isValid = false;
 } //if municipio
  //Validación cp
  if (!codigoPos.test(cp.value)) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor ingrese un código postal válido.<br/>`);
    alertValidaciones.style.display = "block";
    cp.style.border = "solid red thin";
    isValid = false;
  } //if para verificar la expresión
  //validación telefono
  if (!validarTelefono()) { //si validarTelefono me regresa un falso
   alertValidacionesTexto.insertAdjacentHTML("beforeend",
       `El teléfono no es correcto.<br/>`);
   alertValidaciones.style.display = "block";
   telefono.style.border = "solid red thin";
   isValid = false;
};//if ! ValidarTelefono
//validar instrucciones

if(contIns.length < 7) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor `);
        alertValidaciones.style.display = "block";
        instruc.style.border = "solid red thin";
        isValid = false;
    };//else if contInstru 
}); //boton aceptar

function validarTelefono() {
  if (!regexTelefono.test(telefono.value)) {
    return false;
  } //if regex telefono
  if (regexTelefono2.test(telefono.value)) {
    return false;
  } //if regex2 telefono

  return true;
} //validarTeléfono

//validaciones metodo de pago
