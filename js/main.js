//Registro
let btnValidarFirst = document.getElementById("btnValidarFirst");
let alertUno = document.getElementById("alertUno");
let alertUnoTxt = document.getElementById("alertUnoTxt");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("Password");
let telefono = document.getElementById("numero");
let confirmarContrasena = document.getElementById("ConfirmPassword");

//Flag
let isValid = true;
//variables del form de inicio de sesion

//Variables validaciones

let regexNombre = new RegExp("^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContrasena = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿]).{8,}$");
let regexTelefono = new RegExp("^\\d{10}$"); 
let regexTelefono2 = new RegExp(/^(\d)\1{0,3}/);

 //validacion para el telefono ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$


// 1 click boton 

btnValidarFirst.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarCampos(nombre, correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno);
    isValid = true;
    nombre.value = nombre.value.trim();
    numero.value = numero.value.trim();
    contrasena.value = contrasena.value.trim();
    correo.value = correo.value.trim();
    correo.value = correo.value.toLowerCase();
    telefono.value = telefono.value.trim();
    confirmarContrasena.value = confirmarContrasena.value.trim();
    isValid = validarCampos(correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno, isValid);
    if (isValid) {

        let registro = {
            "nombre": nombre.value,
            "Correo": correo.value,
            "telefono": telefono.value,
            "contrasena": contrasena.value,
        };
        localStorage.setItem("registro", JSON.stringify(registro));
        modalTxt.innerText = "Su registro fue existoso";
        $('#exampleModal').modal('show');
        limpiarCampos(nombre, correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno);
        nombre.value = "";
        correo.value = "";
        telefono.value = "";
        contrasena.value = "";
        confirmarContrasena.value = "";
    }//if
});//Boton del form de registro

function validarCampos(correo, contrasena, confirmarContrasena, telefono, alertTxt, alert, isValid) {
    if (!regexCorreo.test(correo.value)) { //validacion dominio
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
    if (!(regexTelefono.test(telefono.value))&&(regexTelefono2.test(telefono.value))) {
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
    if (numPalabras < 2 || numPalabras > 5) {
        alertUnoTxt.insertAdjacentHTML("beforeend",
            `Por favor ingresa entre 2 y 5 palabras en el nombre.<br/>`);
        alertUno.style.display = "block";
        nombre.style.border = "solid red thin";
        isValid = false;
    }
    return isValid;
}

function limpiarCampos(nombre, correo, contrasena, confirmarContrasena, telefono, alertTxt, alert) {
    nombre.style.border = "";
    correo.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";
    telefono.style.border = "";
    alertTxt.innerHTML = "";
    alert.style.display = "none";
}

//----------------------INICIAR SESIÓN---------------

//Iniciar sesión
let btnValidarSecond = document.getElementById("btnValidarSecond");
let alertDosTxt = document.getElementById("alertDosTxt");
let alertDos = document.getElementById("alertDos");
let correo2 = document.getElementById("correo2");
let contrasena2 = document.getElementById("Password2");
let exampleModal = document.getElementById("exampleModal");
let validSesion;
let isValid2 = true;

// funcion que lee el LocalSorage
let registroGuardado = localStorage.getItem("registro");

btnValidarSecond.addEventListener("click", function () {
    event.preventDefault();
    //limpiar campos
    correo2.style.border = "";
    contrasena2.style.border = "";
    alertDosTxt.innerHTML = "";
    alertDos.style.display = "none";
    isValid2 = true;
    let sesion = {
        "correo2": correo2.value,
        "contrasena2": contrasena2.value,
    };

    //Traerte el local storage
    if (registroGuardado) {
        validSesion = JSON.parse(registroGuardado);
    }//if
    console.log(validSesion);
    console.log(sesion);
    
    if (validSesion.Correo != sesion.correo2) {
        alertDosTxt.insertAdjacentHTML("beforeend",
            `Correo no encontrado. Por favor regístrese<br/>`);
            alertDos.style.display = "block";
            correo2.style.border = "solid red thin";
        isValid2 = false;
    }//if verificar que el coreeo sea el mismo
    
    if (validSesion.contrasena != sesion.contrasena2) {
        alertDosTxt.insertAdjacentHTML("beforeend",
            `Contraseña invalida. Por favor compruebe su contraseña<br/>`);
            alertDos.style.display = "block";
            contrasena2.style.border = "solid red thin";
        isValid2 = false;
    }//if verificar que el coreeo sea el mismo


    //redirigir

    //window.location.href ='index.html';///redirige una vez que se ha pasado el login. 
/*
    if (isValid2) {
      
    }//if valid*/

});


