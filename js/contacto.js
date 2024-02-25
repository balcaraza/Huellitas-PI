const btn = document.getElementById("button"); //declarar botón Agregar

let txtNombre = document.getElementById("nombre"); //declarar texto a recibir caja nombre
let txtTelefono = document.getElementById("telefono"); //declarar texto a recibir caja teléfono
let txtCorreo = document.getElementById("correo"); //declarar texto a recibir caja correo
let txtMensaje = document.getElementById("mensaje"); //declarar texto a recibir caja mensaje

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let isValid = true;

let regexTelefono = new RegExp("^[0-9]{10,10}$");
let regexCorreo = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+[.]{1}[^@ \t\r\n]+");
function validarTelefono() {
    if (!regexTelefono.test(txtTelefono.value)) {
        return false;
    }//if para verificar la expresión
    const numerosProhibidos = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"];
    if (numerosProhibidos.includes(txtTelefono.value)) {
        return false;
    }
    return true;
}//validarTeléfono

btn.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarCampos(txtNombre,txtTelefono,txtCorreo,txtMensaje,isValid,alertValidacionesTexto,alertValidacionesTexto );
    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();
    txtCorreo.value = txtCorreo.value.toLowerCase();
    txtMensaje.value = txtMensaje.value.trim();
    let contPalabra = txtMensaje.value.split(" ");

    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor ingresa un nombre válido.<br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre
    if (!regexCorreo.test(txtCorreo.value)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor ingresa un correo válido.<br/>`);
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid red thin";
        isValid = false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre

    if (!validarTelefono()) { //si validarTelefono me regresa un falso
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `El <strong>Teléfono</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        isValid = false;
    };//if ! ValidarTelefono

    if (contPalabra.length < 10) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
            `Por favor especifique más su mensaje.<br/>`);
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
            alert('Mensaje enviado correctamente!');
        }).catch((err) => {
            btn.value = 'Enviar';
            alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            console.error('Error al enviar el mensaje:', err);
        });
        //Para limpiar despues de enviar
        limpiarCampos(txtNombre,txtTelefono,txtCorreo,txtMensaje,isValid,alertValidacionesTexto,alertValidacionesTexto );
        txtNombre.value = "";
        txtTelefono.value = "";
        txtCorreo.value = "";
        txtMensaje.value = "";
    }//if isValid
});//btnAgregar
function limpiarCampos(txtNombre,txtTelefono,txtCorreo,txtMensaje,isValid,alertValidacionesTexto,alertValidacionesTexto ){
    txtNombre.style.border = "";
    txtTelefono.style.border = "";
    txtCorreo.style.border = "";
    txtMensaje.style.border ="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    isValid = true;
};//function limpiarCampos