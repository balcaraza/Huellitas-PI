let btnAgregar = document.getElementById("btnAgregar"); //declarar botón Agregar

let txtNombre = document.getElementById("nombre"); //declarar texto a recibir caja nombre
let txtTelefono = document.getElementById("telefono"); //declarar texto a recibir caja teléfono
let txtCorreo = document.getElementById("correo"); //declarar texto a recibir caja correo
let txtMensaje = document.getElementById("mensaje"); //declarar texto a recibir caja mensaje

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let arroba="";
let puntoCom="";
let isValid=true;

function validarTelefono(){  
    if(txtTelefono.value.length!=10){
        return false;
    }//if que revisa que se ingresen 10 dígitos
    if(isNaN(txtTelefono.value)){
        return false;
    }//if que revisa que se ingresen números
    return true;
}//validarCantidad

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
    isValid=true;
    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();
    txtCorreo.value = txtCorreo.value.toLowerCase();
    arroba =txtCorreo.value.includes('@');
    puntoCom=txtCorreo.value.includes('.com');
    txtMensaje.value =  txtMensaje.value.trim();
    let contPalabra= txtMensaje.value.split(" ");
  
    if (txtNombre.value.length<3){ 
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `Por favor ingresa un nombre válido.<br/>`);
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red thin";
        isValid=false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre
    if (arroba==false || puntoCom==false){ 
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `Por favor ingresa un correo válido.<br/>`);
        alertValidaciones.style.display="block";
        txtCorreo.style.border="solid red thin";
        isValid=false;
    };//if que comprueba que se hayan ingresado al menos 3 carcacteres en nombre

    if(!validarTelefono()){ //si validarTelefono me regresa un falso
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `El <strong>Teléfono</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red thin";
        isValid=false;
    };//if ! ValidarTelefono

    if (contPalabra.length<10){ 
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `Por favor especifique más su mensaje.<br/>`);
        alertValidaciones.style.display="block";
        txtMensaje.style.border="solid red thin";
        isValid=false;
    };//if contPalabra
    //if (isValid){
   // }//if isValid
});//btnAgregar