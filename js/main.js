let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let tittle = document.getElementById("tittle");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("Contrasena");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let isValid = true;

let regexNombre = new RegExp("^[a-z0-9_-]{3,15}$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContrasena = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");
signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    tittle.innerHTML = "Inicia Sesión";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    tittle.innerHTML = "Registrate";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

signUp.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarCampos(nombre,correo,contrasena,alertValidacionesTexto,alertValidaciones,isValid);
    nombre.value = nombre.value.trim();
    contrasena.value = contrasena.value.trim();
    correo.value = correo.value.trim();
    correo.value = correo.value.toLowerCase();
    validacionNomCorr(nombre.value, correo.value);

    //if (isValid) {
        //limpiarCampos(nombre,correo,contrasena,alertValidacionesTexto,alertValidaciones,isValid);
        //Para que cuando envie los datos deje en blanco los input
        // nombre.value = "";
        // correo.value = "";
        // contrasena.value = "";
    //}//if isValid
});//btnAgregar

function validacionNomCorr(nombre, correo) {
    if (!regexNombre.test(nombre)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor ingresa un nombre válido.<br/>`);
        alertValidaciones.style.display = "block";
       nombre.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre
    if (!regexCorreo.test(correo)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor ingresa un correo válido.<br/>`);
        alertValidaciones.style.display = "block";
        correo.style.border = "solid red thin";
        isValid = false;
    };//if 
};//Funcion Validacion de nombre y correo
function validacionContra(contrasena) {
    if (!regexContrasena.test(contrasena)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor ingresa una contraseña con mínimo ocho caracteres,
             al menos una letra mayúscula, letra minúscula, 
             un número y un carácter especial.<br/>`);
        alertValidaciones.style.display = "block";
        contrasena.style.border = "solid red thin";
        isValid = false;
    };//if
    

};//Funcion Validacion de nombre y correo

function limpiarCampos(nombre,correo,contrasena,alertValidacionesTexto,alertValidaciones,isValid){
        //Para limpiar al oprimir el botón
        nombre.style.border = "";
        correo.style.border = "";
        contrasena.style.border = "";
        alertValidacionesTexto.innerHTML = "";
        alertValidaciones.style.display = "none";
        isValid = true;
};//Funcion para la limpieza