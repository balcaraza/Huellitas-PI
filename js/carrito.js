let subTotalPago= document.getElementById("subTotalPago");
let listaProductosCarrito =document.getElementById("listaProductosCarrito");
let carrito=new Array();//arreglo vacio de productos.
let total=0.00;
carrito=[
    {
        img: "./src/img/Productos/RopaMinie.jpg",
        description: "Ropa para mascota, disney minnie mouse, camisa textil, rosa y grande",
        precio: "145.80",
      },
      {
        img: "./src/img/Productos/CepilloLimpieza.jpg",
        description: "Cepillo de limpieza para mascotas sintético azul 19.7x10.6x5 Cm",
        precio: "79.90",
      }
];

let carritoJSON = JSON.stringify(carrito);

localStorage.setItem("carrito", carritoJSON);

carrito.forEach(function(item){
    let itemHTML;//varaible vacia.
    
    if(carrito.length>0){

        itemHTML=`
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
                    <h5 class="styPrecio">$${item.precio}</h5>
                    </div>
                </div>
            </div>
        </div>`;  
    }
    listaProductosCarrito.insertAdjacentHTML("beforeend",itemHTML);//si le pones element jamas lo hara :p
});

function calcularSubtotal(carrito) {
    let total = 0;
    carrito.forEach(function(item) {
        total += parseFloat(item.precio);
    });
    return total.toFixed(2);
}
// Calcular el subtotal y mostrarlo

let item2InnerHTML = "Subtotal: $" + calcularSubtotal(carrito);
subTotalPago.insertAdjacentHTML("afterend", `<div>${item2InnerHTML}</div>`);

    function sumarProductos(carrito){
        let suma=0;
        for (let index = 0; index < carrito.length; index++) {
            let element = carrito.precio[index];
            suma+=element;
            
        }
    };