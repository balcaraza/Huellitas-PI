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
let isValid = true;

let regexNombre = new RegExp("^[a-z0-9_-]{3,15}$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContrasena = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");

btnValidarFirst.addEventListener("click", function(event){
    event.preventDefault();
    nombre.style.border = "";
    limpiarCampos(correo,contrasena,alertUnoTxt,alertUno,isValid);
    nombre.value = nombre.value.trim();
    contrasena.value = contrasena.value.trim();
    correo.value = correo.value.trim();
    correo.value = correo.value.toLowerCase();
    if (nombre.value.length < 3) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un nombre válido.<br/>`);
            alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre
    validacionContraCorreo(correo,contrasena, alertUnoTxt,alertUno,isValid);

    // if(isValid){
     //limpiarCampos(nombre,correo,contrasena,alertUnoTxt,alertUno,isValid);limpiarCampos(nombre,correo,contrasena,alertUnoTxt,alertUno,isValid);
    // }//if isValid
});
btnValidarSecond.addEventListener("click", function(event){
    event.preventDefault();
    limpiarCampos(correo2,contrasena2,alertDosTxt,alertDos,isValid);
    contrasena2.value = contrasena.value.trim();
    correo2.value = correo2.value.trim();
    correo2.value = correo2.value.toLowerCase();
    contrasena2.value = contrasena2.value.trim();
    correo2.value = correo2.value.trim();
    correo2.value = correo2.value.toLowerCase();
    validacionContraCorreo(correo2,contrasena2,alertDosTxt,alertDos,isValid);

    // if(isValid){
        //limpiarCampos(correo2,contrasena2,alertDosTxt,alertDos,isValid);
    // }//if isValid
});




function validacionContraCorreo(correo,contrasena,alertTxt,alert,isValid) {
    if (!regexCorreo.test(correo.value)) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un correo válido.<br/>`);
        alert.style.display = "block";
        correo.style.border = "solid red thin";
        isValid = false;
    };//if 
    if (!regexContrasena.test(contrasena.value)) {
        alertTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa una contraseña con mínimo ocho caracteres,
             al menos una letra mayúscula, letra minúscula, 
             un número y un carácter especial.<br/>`);
             alert.style.display = "block";
        contrasena.style.border = "solid red thin";
        isValid = false;
    };//if
    
};//Funcion Validacion de correo y contraseña

function limpiarCampos(correo,contrasena,alertTxt,alert,isValid){
        //Para limpiar al oprimir el botón
        correo.style.border = "";
        contrasena.style.border = "";
        alertTxt.innerHTML = "";
        alert.style.display = "none";
        isValid = true;
};//Funcion para la limpieza