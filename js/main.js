let btnValidarFirst = document.getElementById("btnValidarFirst");
let btnValidarSecond = document.getElementById("btnValidarSecond");
let alertUno = document.getElementById("alertUno");
let alertUnoTxt = document.getElementById("alertUnoTxt");
let alertDosTxt = document.getElementById("alertDosTxt");
let alertDos = document.getElementById("alertDos");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let correo2 = document.getElementById("correo2");
let contrasena = document.getElementById("Password");
let contrasena2 = document.getElementById("Password2");
let telefono = document.getElementById("numero");
let confirmarContrasena = document.getElementById("ConfirmPassword");
let isValid = true;
//Variables que vamos a utilizar

let regexNombre = new RegExp("^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContrasena = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");
let regexTelefono = new RegExp("^\\d{10}$"); // Ajusta la expresión regular según tus requisitos
//Expresiones regulares que vamos a utilizar


btnValidarFirst.addEventListener("click", function(event) {
    event.preventDefault();
    nombre.style.border = "";
    limpiarCampos(correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno);
    nombre.value = nombre.value.trim();
    contrasena.value = contrasena.value.trim();
    correo.value = correo.value.trim();
    correo.value = correo.value.toLowerCase();
    telefono.value = telefono.value.trim();
    confirmarContrasena.value = confirmarContrasena.value.trim();
    isValid = validarCampos(correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno, isValid);
});//Boton del form de registro

btnValidarSecond.addEventListener("click", function(event) {
    event.preventDefault();
    limpiarCampos(correo2, contrasena2, confirmarContrasena2, telefono2, alertDosTxt, alertDos);
    contrasena2.value = contrasena.value.trim();
    correo2.value = correo2.value.trim();
    correo2.value = correo2.value.toLowerCase();
    contrasena2.value = contrasena2.value.trim();
    correo2.value = correo2.value.trim();
    correo2.value = correo2.value.toLowerCase();
    contrasena2.value = contrasena2.value.trim();
    isValid = validarCampos(correo2, contrasena2, confirmarContrasena2, telefono2, alertDosTxt, alertDos, isValid); 
});//Boton del form de registro Inicio de Sesion

function validarCampos(correo, contrasena, confirmarContrasena, telefono, alertTxt, alert, isValid) {
    if (!regexCorreo.test(correo.value)) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un correo que contenga un "@" y un dominio.<br/>`);
        alert.style.display = "block";
        correo.style.border = "solid red thin";
        isValid = false;
    }
    if (!regexContrasena.test(contrasena.value)) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa una contraseña con mínimo ocho caracteres,
             al menos una letra mayúscula, letra minúscula, 
             un número y un carácter especial.<br/>`);
        alert.style.display = "block";
        contrasena.style.border = "solid red thin";
        isValid = false;
    }
    if (contrasena.value !== confirmarContrasena.value) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Las contraseñas no coinciden.<br/>`);
        alert.style.display = "block";
        contrasena.style.border = "solid red thin";
        confirmarContrasena.style.border = "solid red thin";
        isValid = false;
    }
    if (!regexTelefono.test(telefono.value)) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un número de teléfono válido (10 dígitos).<br/>`);
        alert.style.display = "block";
        telefono.style.border = "solid red thin";
        isValid = false;
    }
    if (/(.)\1{9}/.test(telefono.value)) { // Verifica si hay 10 dígitos iguales consecutivos
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un número de teléfono válido (sin secuencias de dígitos repetidos).<br/>`);
        alert.style.display = "block";
        telefono.style.border = "solid red thin";
        isValid = false;
    }
  // Validación de mínimo 2 palabras y máximo 10 palabras en el nombre
  let numPalabras = nombre.value.trim().split(/\s+/).length;
  if (numPalabras < 2 || numPalabras > 10) {
      alertUnoTxt.insertAdjacentHTML("beforeend",
          `Por favor ingresa entre 2 y 10 palabras en el nombre.<br/>`);
      alertUno.style.display = "block";
      nombre.style.border = "solid red thin";
      isValid = false;
  }
  nombre.value="";
  numero.value="";
  correo.value="";
  contrasena.value="";
  confirmarContrasena.value="";
  
  if (isValid) {
    limpiarCampos(correo, contrasena, confirmarContrasena, telefono, alertTxt, alert)
}

    return isValid;
}

function limpiarCampos(correo, contrasena, confirmarContrasena, telefono, alertTxt, alert) {
    correo.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";
    telefono.style.border = "";
    alertTxt.innerHTML = "";
    alert.style.display = "none";
}