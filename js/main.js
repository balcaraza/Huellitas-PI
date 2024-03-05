let btnValidarFirst = document.getElementById("btnValidarFirst");
let alertUno = document.getElementById("alertUno");
let alertUnoTxt = document.getElementById("alertUnoTxt");
let numero = document.getElementById("numero");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("Password");
//variables del form de registro

//let correo2 = document.getElementById("correo2");
let contrasena2 = document.getElementById("Password2");
let btnValidarSecond = document.getElementById("btnValidarSecond");
let alertDosTxt = document.getElementById("alertDosTxt");
let alertDos = document.getElementById("alertDos");
let isValid = true;
//variables del form de inicio de sesion

let regexNom = new RegExp("^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$");//pendiente
let regexCorr = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContra = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");
let regexTel = new RegExp("^[0-9]{10,10}$");

function validarTelefono() {
    if (!regexTel.test(numero.value)) {
        return false;
    }//if para verificar la expresión
    const numerosProhibidos = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"];
    if (numerosProhibidos.includes(txtTelefono.value)) {
        return false;
    }
    return true;
}//validarTeléfono

function validarNombre() {
    if (!regexNom.test(nombre.value)) {
        return false;
    }//if para verificar la expresión
    return true;
}//validarNombre

function validarCorreo() {
    if (!regexCorr.test(correo.value)) {
        return false;
    }//if para verificar la expresión
    return true;
}//validarCorreo

function validarContra() {
    if (!regexContra.test(contrasena.value)) {
        return false;
    }//if para verificar la expresión
    return true;
}//validarCorreo
nombre.value="";
numero.value="";
correo.value="";
contrasena.value="";
confirmarContrasena.value="";

btnValidarFirst.addEventListener("click", function(event){
    event.preventDefault();
    nombre.style.border = "";
    numero.style.border = "";
    correo.style.border = "";
    contrasena.style.border = "";
    alertUno.style.display = "none";
    alertUnoTxt.innerHTML="";
    isValid = true;
    nombre.value = nombre.value.trim();
    numero.value = numero.value.trim();
    contrasena.value = contrasena.value.trim();
    correo.value = correo.value.trim();
    correo.value = correo.value.toLowerCase();
    if (validarNombre == false) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un nombre válido.<br/>`);
            alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que nombre sea correcto

    // validacionContraCorreo(correo,contrasena, alertUnoTxt,alertUno,isValid);
    // if(isValid){
     //limpiarCampos(nombre,correo,contrasena,alertUnoTxt,alertUno,isValid);limpiarCampos(nombre,correo,contrasena,alertUnoTxt,alertUno,isValid);
    // }//if isValid
    if (validarNombre == false) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un nombre válido.<br/>`);
            alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    };
    if (validarTelefono == false) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un número telefónico válido.<br/>`);
            alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    };
    if (validarCorreo == false) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa un correo válido.<br/>`);
            alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    };
});//boton validar Registro


// btnValidarSecond.addEventListener("click", function(event){
//     event.preventDefault();
//     limpiarCampos(correo2,contrasena2,alertDosTxt,alertDos,isValid);
//     contrasena2.value = contrasena.value.trim();
//     correo2.value = correo2.value.trim();
//     correo2.value = correo2.value.toLowerCase();
//     contrasena2.value = contrasena2.value.trim();
//     correo2.value = correo2.value.trim();
//     correo2.value = correo2.value.toLowerCase();
//     validacionContraCorreo(correo2,contrasena2,alertDosTxt,alertDos,isValid);

//     // if(isValid){
//         //limpiarCampos(correo2,contrasena2,alertDosTxt,alertDos,isValid);
//     // }//if isValid
// });




// function validacionContraCorreo(correo,contrasena,alertTxt,alert,isValid) {
//     if (!regexCorreo.test(correo.value)) {
//         alertTxt.insertAdjacentHTML("beforeend",
//             `Por favor ingresa un correo válido.<br/>`);
//         alert.style.display = "block";
//         correo.style.border = "solid red thin";
//         isValid = false;
//     };//if 
//     if (!regexContrasena.test(contrasena.value)) {
//         alertTxt.insertAdjacentHTML("beforeend",
//             `Por favor ingresa una contraseña con mínimo ocho caracteres,
//              al menos una letra mayúscula, letra minúscula, 
//              un número y un carácter especial.<br/>`);
//              alert.style.display = "block";
//         contrasena.style.border = "solid red thin";
//         isValid = false;
//     };//if
    
//Funcion Validacion de correo y contraseña

// function limpiarCampos(correo,contrasena,alertTxt,alert,isValid){
//         //Para limpiar al oprimir el botón
//         correo.style.border = "";
//         contrasena.style.border = "";
//         alertTxt.innerHTML = "";
//         alert.style.display = "none";
//         isValid = true;
// };//Funcion para la limpieza