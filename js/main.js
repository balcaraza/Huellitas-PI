//Registro
let btnValidarFirst = document.getElementById("btnValidarFirst");
let alertUno = document.getElementById("alertUno");
let alertUnoTxt = document.getElementById("alertUnoTxt");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("Password");
let telefono = document.getElementById("numero");
let confirmarContrasena = document.getElementById("ConfirmPassword");
let exampleModal = document.getElementById("exampleModal");


let registros =[];
//Flag
let isValid = true;
//variables del form de inicio de sesion

//Variables validaciones

let regexNombre = new RegExp("^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
let regexContrasena = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿]).{8,}$");
let regexTelefono = new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"); //filtra numeros 0000000000, 0000000001
let regexTelefono2 = new RegExp(/(.)\1{4}/); // secuencia de 5 caracteres consecutivos entre si

//validacion para el telefono ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$

const eye = document.querySelector('.eyeOne');
eye.addEventListener('click', () => {
  let input = document.querySelector(".viewOne");
  if (input.type === "password") {
    input.type = "text";
    eye.setAttribute('src', 'src/img/eye.png'); // Cambia la imagen a 'eye.png'
  } else {
    input.type = "password";
    eye.setAttribute('src', 'src/img/closeye.png'); // Cambia la imagen a 'closeye.png'
  }
});
const eyeDos = document.querySelector('.eyeTwo');
eyeDos.addEventListener('click', () => {
  let inputDos = document.querySelector(".viewTwo");
  if (inputDos.type === "password") {
    inputDos.type = "text";
    eyeDos.setAttribute('src', 'src/img/eye.png'); // Cambia la imagen a 'eye.png'
  } else {
    inputDos.type = "password";
    eyeDos.setAttribute('src', 'src/img/closeye.png'); // Cambia la imagen a 'closeye.png'
  }
});
const eyeTres = document.querySelector('.eyeTres');
eyeTres.addEventListener('click', () => {
  let inputTres = document.querySelector(".viewTres");
  if (inputTres.type === "password") {
    inputTres.type = "text";
    eyeTres.setAttribute('src', 'src/img/eye.png'); // Cambia la imagen a 'eye.png'
  } else {
    inputTres.type = "password";
    eyeTres.setAttribute('src', 'src/img/closeye.png'); // Cambia la imagen a 'closeye.png'
  }
});

// 1 click boton
btnValidarFirst.addEventListener("click", function (event) {
  event.preventDefault();
  limpiarCampos(nombre, correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno);
  isValid = true;
  nombre.value = nombre.value.trim();
  contrasena.value = contrasena.value.trim();
  correo.value = correo.value.trim();
  correo.value = correo.value.toLowerCase();
  telefono.value = telefono.value.trim();
  confirmarContrasena.value = confirmarContrasena.value.trim();
  isValid = validarCampos(correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno, isValid);
  if (isValid) {
    let registrosGuardados = localStorage.getItem("registros");
    if (registrosGuardados) {
      registros = JSON.parse(registrosGuardados);
    }//if
   let registro = {
      "nombre": nombre.value,
      "Correo": correo.value,
      "telefono": telefono.value,
      "contrasena": contrasena.value,
    };
    registros.push(registro);
    localStorage.setItem("registros", JSON.stringify(registros));
    modalTxt.innerText = "Su registro fue exitoso";
    $("#exampleModal").modal("show");
   
    limpiarCampos(nombre, correo, contrasena, confirmarContrasena, telefono, alertUnoTxt, alertUno);
    nombre.value = "";
    correo.value = "";
    telefono.value = "";
    contrasena.value = "";
    confirmarContrasena.value = "";
  } //if
}); //Boton del form de registro

function validarCampos(correo, contrasena, confirmarContrasena, telefono, alertTxt, alert, isValid) {
  if (!regexCorreo.test(correo.value)) {
    //validacion dominio
    alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un <strong>Correo</strong> válido con formato 'nombre@dominio'.<br/>`);
    alert.style.display = "block";
    correo.style.border = "solid red thin";
    isValid = false;
  }
  if(registros.some(registro => registro.Correo === correo.value)){
    alertTxt.insertAdjacentHTML("beforeend", `Este <strong>Usuario</strong> ya existe.<br/>`);
    alert.style.display = "block";
    correo.style.border = "solid red thin";
    isValid = false;
  }
  if (!regexContrasena.test(contrasena.value)) {
    alertTxt.insertAdjacentHTML(
      "beforeend",
      `Por favor, ingrese una <strong>Contraseña</strong> con mínimo ocho caracteres,
             al menos una letra mayúscula, letra minúscula, 
             un número y un carácter especial.<br/>`
    );
    alert.style.display = "block";
    contrasena.style.border = "solid red thin";
    isValid = false;
  }
  if (contrasena.value !== confirmarContrasena.value) {
    alertTxt.insertAdjacentHTML("beforeend", `Las <strong>Contraseñas</strong> no coinciden.<br/>`);
    alert.style.display = "block";
    contrasena.style.border = "solid red thin";
    confirmarContrasena.style.border = "solid red thin";
    isValid = false;
  }
  if (!regexTelefono.test(telefono.value)) {
    alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un número de <strong>Teléfono</strong> válido (10 dígitos).<br/>`);
    alert.style.display = "block";
    telefono.style.border = "solid red thin";
    isValid = false;
  }else if (regexTelefono2.test(telefono.value)) {
    alertTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese un número de <strong>Teléfono</strong> válido (10 dígitos).<br/>`);
    alert.style.display = "block";
    telefono.style.border = "solid red thin";
    isValid = false;
  }

  // Validación de mínimo 2 palabras y máximo 10 palabras en el nombre
  let numPalabras = nombre.value.trim().split(/\s+/).length;
  if (numPalabras < 2 || numPalabras > 5) {
    alertUnoTxt.insertAdjacentHTML("beforeend", `Por favor, ingrese <strong>Nombre</strong> y <strong>Apellido</strong>.<br/>`);
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




// funcion que lee el LocalSorage


btnValidarSecond.addEventListener("click", function () {
  event.preventDefault();
  //limpiar campos
  correo2.style.border = "";
  contrasena2.style.border = "";
  alertDosTxt.innerHTML = "";
  alertDos.style.display = "none";
  
  let sesion = {
    "correo2": correo2.value,
    "contrasena2": contrasena2.value,
  };

  let registroGuardado = localStorage.getItem("registros");
  let array = JSON.parse(registroGuardado);
  console.log(array);
  console.log(sesion);
  let encontrado = false;
  if(array === null){
    alertDosTxt.insertAdjacentHTML("beforeend", `<strong>Correo</strong> y/o <strong>Contraseña</strong> no válidos.<br/>`);
    alertDos.style.display = "block";
    correo2.style.border = "solid red thin";
    contrasena2.style.border = "solid red thin";
  }else {for (let i = 0; i < array.length; i++) {
    if (array[i].Correo === sesion.correo2 && array[i].contrasena === sesion.contrasena2) {
      encontrado = true;
      break;
    }}
    if (encontrado) {
      console.log("Sesión válida");
      // Hacer algo si la sesión es válida
      window.location.href = "index.html"; ///redirige una vez que se ha pasado el login.
    } else {
      console.log("Sesión inválida");
      // Hacer algo si la sesión es inválida
      alertDosTxt.insertAdjacentHTML("beforeend", `<strong>Correo</strong> y/o <strong>Contraseña</strong> no válidos.<br/>`);
      alertDos.style.display = "block";
      correo2.style.border = "solid red thin";
      contrasena2.style.border = "solid red thin";
    }
}

 
 
});
