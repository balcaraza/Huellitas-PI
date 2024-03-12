
let itemsContainer = document.getElementById("list-items");

//Arreglo de los productos favoritos
let favoritos = [] 

let productos = [
  {
    id: "1",
    img: "./src/img/Productos/RopaMinie.jpg",
    description: "Ropa para mascota, disney minnie mouse, camisa textil, rosa y grande",
    precio: "145.80",
  },
  {
    id: "2",
    img: "./src/img/Productos/CepilloLimpieza.jpg",
    description: "Cepillo de limpieza para mascotas sintético azul 19.7x10.6x5 Cm",
    precio: "79.90",
  },

  { id: "3", img: "./src/img/Productos/TazonPanda.jpg", description: "Tazón para mascota, panda animal de plástico y color blanco", precio: "$99.90" },
  {
    img: "./src/img/Productos/PelucheDinosaurio.jpg",
    description: "Peluche para mascota de dinosaurio, 100% Poliéster 35.5x13 Cm",
    precio: "129.90",
  },
  {
    img: "./src/img/Productos/JugueteFutbol.jpg",
    description: "Juguete para mascota con sonido",
    precio: "29.90",
  },
  {
    img: "./src/img/Productos/toallitaAzul.jpg",
    description: "Toalla de baño con capucha, absorbente de alta calidad",
    precio: "150",
  },
  {
    img: "./src/img/Productos/casaGatos.jpg",
    description: "Casa para gatos, color morada con rascadero",
    precio: "350",
  },
  {
    img: "./src/img/Productos/ChalecoArnes.jpg",
    description: "Chaleco con arnés para mascotas 100% poliéster azul 25x35",
    precio: "99.90",
  },
  {
    img: "./src/img/Productos/DisfrazLaGarra.jpg",
    description: "Disfraz para mascota, de disney alíen toy story, textil de color verde y grande",
    precio: "149.90",
  },
  {
    img: "./src/img/Productos/TazonRosa.jpg",
    description: "Tazón para mascota de disney minnie mouse, plástico y de color rosa",
    precio: "99.90",
  },
  {
    img: "./src/img/Productos/cama.jpg",
    description: "Cama Resistente con Relleno Suave y Color cafe",
    precio: "299",
  },
  {
    img: "./src/img/Productos/collarPerro.jpg",
    description: "Collar de piel, color cafe, grabado",
    precio: "250",
  },
];
let productosJSON = JSON.stringify(productos);
localStorage.setItem("productos", productosJSON);


productos.forEach(function (item) {
  // Crear el HTML para cada elemento
  let itemHTML = `
        <div class="card" id="${item.id}">
            <div>
                <img style="max-height:300px" src="${item.img}" class="card-img-top" alt="...">
                <button class="button-favorite">
                <i class="fa-regular fa-heart" id="corazon-vacio"></i>
                <i class="fa-solid fa-heart" id="corazon-lleno"></i>
                </button> 
                <a href="compra.html" >
                  <img class="img-carrito" src="./src/img/CarritoCompras.png" alt="Carrito Compras">
                </a>
            </div>
            <div class="card-body">
                <p class="">${item.description}</p>
                <h5 class="card-precio">$${item.precio}</h5>
            </div>
        </div>`;

  // Insertar el HTML generado en el contenedor
  itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
});

localStorage.setItem("productos", productosJSON);
nuevoProducto =  JSON.parse(localStorage.getItem("productosNuevos")) || [];
nuevoProducto.forEach(function (item) {
let nuevoItemHTML = `
        <div cl    ass="card">
            <div>
                <img style="max-height:300px" src="${item.img}" class="card-img-top" alt="...">
                <button class="button-favorite">
                    <i class="fa-regular fa-heart"></i>
                </button> 
                <img class="img-carrito" src="./src/img/CarritoCompras.png" alt="Carrito Compras">
            </div>
            <div class="card-body">
                <p class="">${item.description}</p>
                <h5 class="card-precio">$${item.precio}</h5>
            </div>
        </div>`;

  // Insertar el HTML generado en el contenedor
  itemsContainer.insertAdjacentHTML("beforeend",nuevoItemHTML);
    
});

//Actualizar los favoritos en el localStorage
const actualizarFavoritos = () => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

//Cargar los favoritos
const cargaFavoritos = () => {
  const almacenarFavoritos = localStorage.getItem("favoritos");

  if(almacenarFavoritos){
    favoritos = JSON.parse(almacenarFavoritos);
  }
};

//Agrega un evento que escucha el evento DOMContentLoaded al objeto document. El DOMContentLoaded se dispara cuando el HTML ha sido completamente cargado y analizado
document.addEventListener("DOMContentLoaded", function() {
  //Se seleccionan todos los elementos del DOM que tienen la clase .button-favorite y se almacenan en la variable btnFavorite
  const btnFavorite = document.querySelectorAll(".button-favorite");
  //Iterar sobre cada botón en la colección btnFavorite
  btnFavorite.forEach(boton => {
    boton.addEventListener('click', () => {
      const card = e.target.closest(".card");
      

    });
  });
});


// Llamadas a la función addItem con objetos que representan diferentes ítems
/*
addItem({
  img: "./src/img/Productos/RopaMinie.jpg",
  description: "Ropa para mascota disney minnie mouse camisa textil rosa grande",
  precio: "$145.80",
});
addItem({
  img: "./src/img/Productos/CepilloLimpieza.jpg",
  description: "Cepillo  de limpieza para mascotas sintético azul 19.7x10.6x5 Cm",
  precio: "$79.90",
});
addItem({ img: "./src/img/Productos/TazonPanda.jpg", description: "Tazón para mascota panda animal faces plástico blanco", precio: "$99.90" });
addItem({
  img: "./src/img/Productos/PelucheDinosaurio.jpg",
  description: "Peluche para mascota dinosaurio 100% Poliéster 35.5x13 Cm",
  precio: "$129.90",
});
addItem({
  img: "./src/img/Productos/JugueteFutbol.jpg",
  description: "Juguete para mascota con sonido",
  precio: "$29.90",
});
addItem({
  img: "./src/img/Productos/toallitaAzul.jpg",
  description: "Toalla de baño con capucha absorbente de alta calidad",
  precio: "$150",
});
addItem({
  img: "./src/img/Productos/casaGatos.jpg",
  description: "Casa para gatos, color morada con rascadero",
  precio: "$350",
});
addItem({
  img: "./src/img/Productos/ChalecoArnes.jpg",
  description: "Chaleco con arnés para mascotas 100% poliéster azul 25x35",
  precio: "$99.90",
});
addItem({
  img: "./src/img/Productos/DisfrazLaGarra.jpg",
  description: "Disfraz para mascota disney alíen toy story textil verde grande",
  precio: "$149.90",
});
addItem({
  name: "Tazón Rosa",
  img: "./src/img/Productos/TazonRosa.jpg",
  description: "Tazón para mascota disney minnie mouse plástico rosa",
  precio: "$99.90",
});
addItem({
  img: "./src/img/Productos/cama.jpg",
  description: "Cama Resistente con Relleno Suave y Color cafe",
  precio: "$299",
});

addItem({
  img: "./src/img/Productos/collarPerro.jpg",
  description: "Collar de piel, color cafe, grabado",
  precio: "$250",
});
*/