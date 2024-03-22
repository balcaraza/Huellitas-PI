const btnsFavorite=document.querySelectorAll('.favorite');
const products = document.querySelectorAll(".card-product");
let img = document.getElementById(".img-fav");

// Traer los datos de las cards de catalogo a favoritos
itemsContainer = document.getElementById("items-favoritos")

const traerFavoritosCatalogo = JSON.parse(localStorage.getItem("favoritos"));
console.log(traerFavoritosCatalogo);

traerFavoritosCatalogo.forEach(function (item) { 
    // Crear el HTML para cada elemento
    let itemHTML = `<div class="card-product" id="${item.id}">
    <div class="card mb-3" style="max-width: 540px;">      
     <div class="row g-0">
       <div class="col-md-4 cont-img">        
        <img   src=${item.img} class="img-fluid card-img-top rounded-start img-fav" fav" alt="...">            
       </div>
       <div class="col-md-8 contenedor-texto">
         <div class="precio" id="1">
           <p class="card-text">${item.precio}</p>
          </div>
          <div class="card-body" id="1">
           <p class="description">${item.description}</p>
          </div>
           <div class="botones">
             <button class="favorite" onclick="removeFavorite('${item.id}')">
               <i class="fa-solid fa-heart" id="corazon-lleno"></i>
             </button>
              <button class="button-addcarito">
                 <i class="fa-solid fa-cart-shopping" id="${item.id}"></i>
                </button> 
           </div>
        </div>`
  
    // Insertar el HTML generado en el contenedor
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
  
  // Funcion para remover un favorito de localStorage y actualizar la vista
function removeFavorite(id) {
  const index = traerFavoritosCatalogo.findIndex(item => item.id === id);
  if (index !== -1) {
      traerFavoritosCatalogo.splice(index, 1); // Elimina el elemento del arreglo
      localStorage.setItem("favoritos", JSON.stringify(traerFavoritosCatalogo)); // Actualiza localStorage
      document.getElementById(id).remove(); // Elimina la tarjeta del DOM
  }
}




