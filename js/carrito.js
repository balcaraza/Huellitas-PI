/*
function getData(){
    let promesa = fetch("https://fakestoreapi.com/products",{method:"GET"});
    promesa.then((response)=>{
        response.json().then((data)=>{createCards(data)})
        .catch((error)=>{console.log("Ha ocurrido un error en el json", error)});
    })
    .catch((error)=> {console.log("Ocurrio un error en la  solicitud", error)});
}

let productsCarrito = document.getElementById("productsCarrito");

function createCards(productos){
    productos.forEach(producto => {
        productsCarrito.insertAdjacentHTML("beforeend", 
        ` 
        <div class="card mb-3 " style="max-width: 951px; width:700px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.image}" class="img-fluid mx-auto d-block" alt="productCarritoimag" style="width=64px; height=64px;" >
                </div>
                <div class="col-md-8">
                    <div class="card-body ">
                        <h5 class="card-title">${producto.title} </h5>
                        <p class="card-text">

                        <p><strong>Precio:${producto.price}</strong></p>
                        <p>Descripcion: </p>
                        <p>${producto.description} </p>

                        </p>
                        <div class="panelBtn">
                            <div class="btn-group">
                                <button type="button" class="btn btn-success" id ="moreProduct"> + </button> 
                                <button type="button" class="btn disabled" id="disableBtnNumber" >6</button> 
                                <button type="button" class="btn btn-success" id ="lessProduct"> - </button>
                            </div>
                            <button type="button" class="btn btn-danger" id="deleteProduct"><img src="./src/img/delproductos2.png" alt="trash" style="height: 24px; width: 24px;"></button>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
        `
        )
        
    });
}
getData();

*/
let listaProductosCarrito =document.getElementById("listaProductosCarrito");
let carrito=[
    {    
        img: "./src/img/Productos/JugueteFutbol.jpg",
        description: "Juguete para mascota con sonido",
        precio: "29.90"
    },
];//arreglo vacio de productos.

let carritoJSON = JSON.stringify(carrito);

localStorage.setItem("carrito", carritoJSON);

carrito.forEach(function(item){
    let itemHTML;//varaible vacia.
    
    if(!carrito.length){

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


       
    }else {
 
        itemHTML =`<h5 class="card-title styTitle"> Aun no tienes nada en tu carrito </h5>`;
    }

    listaProductosCarrito.insertAdjacentHTML("beforeend",itemHTML);//si le pones element jamas lo hara :p
});




