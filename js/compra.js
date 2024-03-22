// Esperar a que el DOM esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del formulario de envío
  let nombre = document.getElementById("nombre");
  let calle = document.getElementById("calle");
  let numero = document.getElementById("numero");
  let colonia = document.getElementById("colonia");
  let municipio = document.getElementById("municipio");
  let estado = document.getElementById("estado");
  let cp = document.getElementById("cp");
  let telefono = document.getElementById("telefono");
  let instruc = document.getElementById("instruc");

  // Obtener referencias a los elementos del formulario de pago
  let nombreTarjeta = document.getElementById("nombreTarjeta");
  let numTarjeta = document.getElementById("numTarjeta");
  let mesVencimiento = document.getElementById("mesVencimiento");
  let anioVencimiento = document.getElementById("anioVencimiento");
  let ccv = document.getElementById("ccv");

  // Obtener referencias a los elementos de alerta
  let alertOne = document.getElementById("alert");
  let alertTxt = document.getElementById("alertTxt");
  let alert2 = document.getElementById("alert2");
  let alertTxt2 = document.getElementById("alertTxt2");

  // Expresiones regulares
  let regexTelefono = new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$");
  let regexTelefono2 = new RegExp(/(.)\1{4}/);
  let isValid = true;

  //modal de pedido
  let exampleModal = document.getElementById("exampleModal");
  // Función para validar el teléfono
  function validarTelefono() {
    if (!regexTelefono.test(telefono.value)) {
      return false;
    }
    if (regexTelefono2.test(telefono.value)) {
      return false;
    }
    return true;
  }

  // Agregar evento al botón de "Pagar"
  let pagar = document.getElementById("pagar");
  pagar.addEventListener("click", function (event) {
    event.preventDefault();
    isValid = true;
    // Limpiar estilos y mensajes de alerta
    nombre.style.border = "";
    calle.style.border = "";
    numero.style.border = "";
    colonia.style.border = "";
    municipio.style.border = "";
    estado.style.border = "";
    cp.style.border = "";
    telefono.style.border = "";
    instruc.style.border = "";
    nombreTarjeta.style.border = "";
    numTarjeta.style.border = "";
    mesVencimiento.style.border = "";
    anioVencimiento.style.border = "";
    ccv.style.border = "";
    alertTxt.innerHTML = "";
    alertTxt2.innerHTML = "";
    alertOne.style.display = "none";
    alert2.style.display = "none";

    // Validar nombre completo
    nombre.value = nombre.value.trim();
    let numPalabras = nombre.value.trim().split(/\s+/).length;
    if (numPalabras < 2 || numPalabras > 5) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese <strong>Nombre</strong> y <strong>Apellido</strong>.<br/>`);
      alertOne.style.display = "block";
      nombre.style.border = "solid red thin";
      isValid = false;
    } //if nombre

    //Validación calle
    calle.value = calle.value.trim();
    if (calle.value.length < 3) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese una <strong>Calle</strong> válida.<br/>`);
      alertOne.style.display = "block";
      calle.style.border = "solid red thin";
      isValid = false;
    } //if calle

    //Validación número.
    numero.value = numero.value.trim();
    if (numero.value.length < 1) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Número</strong> válido.<br/>`);
      alertOne.style.display = "block";
      numero.style.border = "solid red thin";
      isValid = false;
    } //if length me valida que tenga un dato permite letra s porque puede ser 1-A

    //Validación de Colonia
    colonia.value = colonia.value.trim();
    if (colonia.value.length < 3) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese una <strong>Colonia</strong> válida.<br/>`);
      alertOne.style.display = "block";
      colonia.style.border = "solid red thin";
      isValid = false;
    } //if colonia

    //Validacion municipio
    municipio.value = municipio.value.trim();
    if (municipio.value.length < 4) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Municipio</strong> válido.<br/>`);
      alertOne.style.display = "block";
      municipio.style.border = "solid red thin";
      isValid = false;
    } //if municipio

    //Validación estado
    if (estado.value == "Seleccione uno...") {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Estado</strong>.<br/>`);
      alertOne.style.display = "block";
      estado.style.border = "solid red thin";
      isValid = false;
    } //if estado

    //Validación cp
    if (cp.value.length !== 5) {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Código Postal</strong> válido.<br/>`);
      alertOne.style.display = "block";
      cp.style.border = "solid red thin";
      isValid = false;
    } //if para verificar la expresión

    //validación telefono
    telefono.value = telefono.value.trim();
    if (!validarTelefono()) {
      //si validarTelefono me regresa un falso
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un número de <strong>Teléfono</strong> válido (10 dígitos).<br/>`);
      alertOne.style.display = "block";
      telefono.style.border = "solid red thin";
      isValid = false;
    } //if ! ValidarTelefono
    //Instrucciones
    let contPalabra = instruc.value.trim().split(/\s+/).length;
    if (contPalabra < 3 && instruc.value !== "") {
      alertTxt.insertAdjacentHTML("beforeend", `Por favor, que sus <strong>Instrucciones</strong> sean mayor a 3 palabras.`);
      alertOne.style.display = "block";
      instruc.style.border = "solid red thin";
      isValid = false;
    } // if contInstru

    //Validaciones de Formulario Método de pago

    // Validar nombre de la tarjeta
    nombreTarjeta.value = nombreTarjeta.value.trim();
    let numNom = nombreTarjeta.value.trim().split(/\s+/).length;
    if (numNom < 2 || numNom > 5) {
      alertTxt2.insertAdjacentHTML("beforeend", `Por favor, ingrese <strong>Nombre</strong> y <strong>Apellido</strong>.<br/>`);
      alert2.style.display = "block";
      nombreTarjeta.style.border = "solid red thin";
      isValid = false;
    } //if nombreTarjeta

    //validar tarjeta
    numTarjeta.value = numTarjeta.value.trim();
    if (numTarjeta.value.length < 4) {
      alertTxt2.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Numero de tarjeta</strong> válido.<br/>`);
      alert2.style.display = "block";
      numTarjeta.style.border = "solid red thin";
      isValid = false;
    } //if numero tarjeta

    //Validacióon Numer
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth();
    anioVencimiento.value = anioVencimiento.value.trim();
    let aniActual = fechaActual.getFullYear();
    console.log(fechaActual);
    if (mesVencimiento.value == "Mes") {
      alertTxt2.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Mes</strong>.<br/>`);
      alert2.style.display = "block";
      mesVencimiento.style.border = "solid red thin";
      isValid = false;
    }
    if((Number(anioVencimiento.value) == Number(aniActual)) && (mesVencimiento.value < (mesActual+1))) {
      alertTxt2.insertAdjacentHTML("beforeend", `La <strong>Fecha</strong> ya venció.<br/>`);
      alert2.style.display = "block";
      mesVencimiento.style.border = "solid red thin";
      anioVencimiento.style.border = "solid red thin";
      isValid = false;
    }
    //Validación año
   

    if (anioVencimiento.value == "") {
      alertTxt2.insertAdjacentHTML("beforeend", `Por favor ingrese un <strong>Año</strong>.<br/>`);
      alert2.style.display = "block";
      anioVencimiento.style.border = "solid red thin";
      isValid = false;
    }else if ((Number(anioVencimiento.value) < Number(aniActual))) {
      alertTxt2.insertAdjacentHTML("beforeend", `La <strong>Fecha</strong> ya venció.<br/>`);
      alert2.style.display = "block";
      anioVencimiento.style.border = "solid red thin";
      mesVencimiento.style.border = "solid red thin";
      isValid = false;
      
    }
//Validacion ccv
    if (ccv.value.length !== 3) {
      alertTxt2.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Código de Seguridad</strong> válido.<br/>`);
      alert2.style.display = "block";
      ccv.style.border = "solid red thin";
      isValid = false;
    } //if para verificar la expresión

    //Modal de pedido realizado
    if (isValid) {
      guardarCompra(nombre.value, calle.value, numero.value, colonia.value, municipio.value, estado.value, cp.value, telefono.value,
         instruc.value, nombreTarjeta.value, numTarjeta.value, mesVencimiento.value, anioVencimiento.value, ccv.value);
      modalTxt.innerText = "Pedido realizado";
      $("#exampleModal").modal("show");
     
      nombre.style.border = "";
    calle.style.border = "";
    numero.style.border = "";
    colonia.style.border = "";
    municipio.style.border = "";
    estado.style.border = "";
    cp.style.border = "";
    telefono.style.border = "";
    instruc.style.border = "";
    nombreTarjeta.style.border = "";
    numTarjeta.style.border = "";
    mesVencimiento.style.border = "";
    anioVencimiento.style.border = "";
    ccv.style.border = "";
    alertTxt.innerHTML = "";
    alertTxt2.innerHTML = "";
    alertOne.style.display = "none";
    alert2.style.display = "none";
    } //if


  });
});

function validarTelefono() {
  if (!regexTelefono.test(telefono.value)) {
    return false;
  } //if regex telefono
  if (regexTelefono2.test(telefono.value)) {
    return false;
  } //if regex2 telefono

  return true;
} //validarTeléfono

function guardarCompra(nombre, calle, numero, colonia, municipio, estado, cp, telefono, instruc, nombreTarjeta, numTarjeta, mes, anio, ccv){
  var compra = {
    "nombre": nombre,
    "calle": calle,
    "numero": numero,
    "colonia": colonia,
    "municipio": municipio,
    "estado": estado,
    "cp": cp,
    "telefono": telefono,
    "instrucciones": instruc,
    "nombreTarjeta": nombreTarjeta,
    "numeroTarjeta": numTarjeta,
    "mes": mes,
    "anio": anio,
    "ccv": ccv
  }
  var compraJSON =JSON.stringify(compra);
  localStorage.setItem('compra', compraJSON);
  

}