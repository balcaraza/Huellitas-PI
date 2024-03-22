// 1 captura de informacion del html
let insertarDescripcion = document.getElementById("nombreProducto");
let insertarPrecio = document.getElementById("precioProducto");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let imagen = document.getElementById("miImagen");
let modalTxt = document.getElementById("modalTxt");
let exampleModal = document.getElementById("exampleModal");
let contentImagen = document.getElementById("contentImagen");
let id=18;

let productosNuevos = [];

// 2 Validaciones de campo precio con bandera
let isValid = true;
function validarCantidad() {
  if (insertarPrecio.value.length == 0) {
    return false;
  }
  if (isNaN(insertarPrecio.value)) {
    return false;
  }
  if (Number(insertarPrecio.value) <= 0) {
    return false;
  }
  return true;
} //validarcantidad


// 3 Click en el boton
btnAgregar.addEventListener("click", function () {
  event.preventDefault();
  //limpiar campos
  insertarDescripcion.style.border = "";
  insertarPrecio.style.border = "";
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  isValid = true;
  insertarDescripcion.value = insertarDescripcion.value.trim();
  insertarPrecio.value = insertarPrecio.value.trim();
  let contPalabra = insertarDescripcion.value.split(" ");

  // 4 Alertas por campos incompletos o erroneos
  if (imagen.src.includes("#")) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor, ingrese una <strong>Imagen</strong>.<br/>`);
    alertValidaciones.style.display = "block";
    isValid = false;
  } //if validar imagen

  if (contPalabra.length < 5) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor, escriba una <strong>Descripción</strong> con al menos 5 palabras.<br/>`);
    alertValidaciones.style.display = "block";
    insertarDescripcion.style.border = "solid red thin";
    isValid = false;
  } //if contPalabra
  if (!validarCantidad()) {
    alertValidacionesTexto.insertAdjacentHTML("beforeend", ` El <strong>Precio</strong> no es correcto.<br/>`);
    alertValidaciones.style.display = "block";
    insertarPrecio.style.border = "solid red thin"; //Para señalar el campo que esta mal
    isValid = false;
  } //if ! validarCantidad
    //Obtener el ultimo id de la key de todos los productos en caso que hayas ido a catalogo y regresado a ingresar
    //un producto
    // Obtener los productos de otra clave en localStorage
    let idtodosProductos = localStorage.getItem("todosProductos");
    if (idtodosProductos) {
      let productos = JSON.parse(idtodosProductos);// Convertir los productos a un array
      if (productos.length > 0) {// Verificar si hay productos en el array
        let ultimoProducto = productos[productos.length - 1]; // Obtener el último producto del array
        id = ultimoProducto.id;// Obtener el ID del último producto
      }
    } 
    //Esto es en caso de que le des f5 a la pagina de formulario y ya hay productos en la key nuevos productos
    let idNewProductos = localStorage.getItem("productosNuevos");
    if (idNewProductos) {
      let productos = JSON.parse(idNewProductos);// Convertir los productos a un array
      if (productos.length > 0) {// Verificar si hay productos en el array
        let ultimoProducto = productos[productos.length - 1]; // Obtener el último producto del array
        id = ultimoProducto.id;// Obtener el ID del último producto
      }
    } 
  // 5 Recuperar los productos existentes del localStorage muestra los productos en catalogo
  if (isValid) {
    
    console.log("ID del último producto de otra clave:", id);
    //if todosProductos
    id++;
    let productosGuardados = localStorage.getItem("productosNuevos");
    if (productosGuardados) {
      productosNuevos = JSON.parse(productosGuardados);
    }//if
    let nuevoProducto = {
      "id": id,
      "img": imagen.src,
      "description": insertarDescripcion.value,
      "precio": insertarPrecio.value
    };
    // 6 Se agregan los productos nuevos al local Storage
    productosNuevos.push(nuevoProducto);
    localStorage.setItem("productosNuevos", JSON.stringify(productosNuevos));
    modalTxt.innerText = "Se agregó correctamente el producto";
    $('#exampleModal').modal('show');
    // Limpiamos los campos
    insertarDescripcion.style.border = "";
    insertarPrecio.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    insertarDescripcion.value = "";
    insertarPrecio.value = "";
    imagen.src = "#";
    contentImagen.style.display = "none";


  } //isValid
});
