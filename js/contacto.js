let btn = document.getElementById("button"); //declarar botón Agregar
let modalTxt =document.getElementById("modalTxt");

let txtNombre = document.getElementById("nombre"); //declarar texto a recibir caja nombre
let txtTelefono = document.getElementById("telefono"); //declarar texto a recibir caja teléfono
let txtCorreo = document.getElementById("correo"); //declarar texto a recibir caja correo
let txtMensaje = document.getElementById("mensaje"); //declarar texto a recibir caja mensaje

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let isValid = true;

let regexTelefono = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"); 
let regexTelefono2 = new RegExp(/(.)\1{4}/);

let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
function validarTelefono() {
    if (!regexTelefono.test(txtTelefono.value)) {
        return false;
    }//if para verificar la expresión
    if ((regexTelefono2.test(telefono.value))) {
        return false;
    }


    return true;
}//validarTeléfono

btn.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    txtTelefono.style.border = "";
    txtCorreo.style.border = "";
    txtMensaje.style.border ="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    isValid = true;
    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();
    txtCorreo.value = txtCorreo.value.toLowerCase();
    txtMensaje.value = txtMensaje.value.trim();
    let contPalabra = txtMensaje.value.split(" ");

    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor, ingrese <strong>Nombre</strong> y <strong>Apellido</strong>.<br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre
    if (!regexCorreo.test(txtCorreo.value)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `Por favor, ingrese un <strong>Correo</strong> válido con formato 'nombre@dominio'.<br/>`);
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre

    if (!validarTelefono()) { //si validarTelefono me regresa un falso
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor, ingrese un número de <strong>Teléfono</strong> válido (10 dígitos).<br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        isValid = false;
    };//if ! ValidarTelefono

    if (contPalabra.length < 7) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor, escriba su <strong>Mensaje</strong> con al menos 7 palabras.<br/>`);
        alertValidaciones.style.display = "block";
        txtMensaje.style.border = "solid red thin";
        isValid = false;
    };//if contPalabra
    if (isValid) {

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_phyk0bc';
        // Obtener los valores de los campos individuales
        const nombre = txtNombre.value.trim();
        const telefono = txtTelefono.value.trim();
        const correo = txtCorreo.value.trim();
        const mensaje = txtMensaje.value.trim();
        // Enviar los valores a través de EmailJS
        emailjs.send(serviceID, templateID, {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            mensaje: mensaje
        }).then(() => {
            btn.value = 'Enviar';
            modalTxt.innerText ="Mensaje enviado correctamente!";
            $('#exampleModal').modal('show'); // Mostrar el modal de Bootstrap
        }).catch((err) => {
            btn.value = 'Enviar';
            modalTxt.innerText ="Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
            $('#exampleModal').modal('show'); // Mostrar el modal de Bootstrap
            console.error('Error al enviar el mensaje:', err);
        });
        //Para limpiar despues de enviar
        txtNombre.style.border = "";
        txtTelefono.style.border = "";
        txtCorreo.style.border = "";
        txtMensaje.style.border ="";
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
        txtNombre.value = "";
        txtTelefono.value = "";
        txtCorreo.value = "";
        txtMensaje.value = "";
    }//if isValid
});//btnAgregar
