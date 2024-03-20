//
let sutotal2= document.getElementById("sutotal2");
let subTotalPago = document.getElementById("subTotalPago");
let listaProductosCarrito = document.getElementById("listaProductosCarrito");
//let carrito=new Array();//arreglo vacio de productos.

const carritoGuardado = localStorage.getItem("carrito");
const carrito = JSON.parse(carritoGuardado);
let total = 0.00;

let cardCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
cardCarrito.forEach(function (item) {
    let nuevoItemHTML = `
  <div class="card mb-3 " style="max-width: 951px">
  <div class="row g-0">
      <div class="col-md-4">
          <img src="${item.img}" class="img-fluid mx-auto d-block" alt="productCarritoimag" ><!-- mx-auto d-block esta clase de bostrap resueve el problema de la imagen-->
      </div>
      <div class="col-md-8">
          <div class="card-body ">
          <h5 class="card-title styTitle"> Nombre de producto </h5>
              <hr>
          <p class="styDescripcion">${item.description}</p>
          <h5 class="styPrecio">${item.precio}</h5>
          </div>
      </div>
  </div>
</div>`;


    listaProductosCarrito.insertAdjacentHTML("beforeend", nuevoItemHTML);
    let precioSinSimbolo = item.precio.slice(1); 
    console.log(precioSinSimbolo)
    total += parseFloat(precioSinSimbolo);
    

});
console.log(total);



let item2InnerHTML = "Subtotal: $" + total.toFixed(2); 
let item3InnerHTML = "Envio: $100" ; 
let item4InnerHTML = "Total: $" + (parseFloat(total) + 100).toFixed(2);




subTotalPago.insertAdjacentHTML("beforeend", `<div>${item2InnerHTML}</div>`);//Envio
subTotalPago.insertAdjacentHTML("beforeend", `<div>${item3InnerHTML}</div>`); //subtotal 
subTotalPago.insertAdjacentHTML("beforeend", `<div>${item4InnerHTML}</div>`);//total
//sutotal2.insertAdjacentHTML("beforeend", `<div>${item4InnerHTML}</div>`);//tota
function sumarProductos(carrito) {
    let suma = 0;
    for (let index = 0; index < carrito.length; index++) {
        let element = carrito.precio[index];
        suma += element;

    }
};

