let insertarImagen=document.getElementById("insertarImagen");
let insertarDescripcion=document.getElementById("insertarDescripcion");
let insertarPrecio=document.getElementById("insertarPrecio");
let btnAgregar = document.getElementById("btnAgregar");
let formularioProducto = document.getElementById("formularioProducto");
let productosNuevos = [];



btnAgregar.addEventListener("click", function(){
let nuevoProducto = {
    "img" : insertarImagen.value,
    "description" : insertarDescripcion.value,
    "precio" : insertarPrecio.value
};
productosNuevos.push(nuevoProducto);
localStorage.setItem("productosNuevos", JSON.stringify(productosNuevos));
    
insertarImagen.value="";
insertarDescripcion.value="";
insertarPrecio.value="";

});//btnAgregar