var cerrar=document.getElementById('cerrar');
var cerrar2=document.getElementById('cancelar');
var tarjeta=document.getElementById("tarjeta");

//mostrar tarjeta
document.getElementById("mostrarTarjeta").addEventListener("click", function() {
    document.getElementById("tarjeta").style.display = "block";
});

//botones de cerrar tarjeta y cancelar
cerrar.addEventListener("click", function(){
   tarjeta.style.display = 'none'; 
})
cancelar.addEventListener("click", function(){
   tarjeta.style.display = 'none'; 
})

