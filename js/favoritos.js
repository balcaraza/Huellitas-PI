const btnsFavorite=document.querySelectorAll('.favorite');
const products = document.querySelectorAll(".card-product")

let favorites=[]

const updateFavoritesInLocalStorage=()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage=()=>{
    const storedFavorites=localStorage.getItem("favorites");

    if (storedFavorites){
        favorites=JSON.parse(storedFavorites);
        showHTML();
    }
};

const toggleFavorite =(product)=>{
    const index=favorites.findIndex(
        element=> element.id === product.id
);
if(index >-1){
    favorites.splice(index,1);
    updateFavoritesInLocalStorage(); 
} else{
    favorites.push(product);
    updateFavoritesInLocalStorage();
}
};

const showHTML =() => {
    products.forEach(product =>{
        const contentCard = product.querySelector(".card-body")
        const productId =contentCard.dataset.productId;
        //const productId =product.id;

        const isFavorite = favorites.some(
            favorite => favorite.id === productId
        );

        const favoriteButton = product.querySelector('.favorite');
        const favoriteButtonActive= product.querySelector("#corazon-lleno");
        const favoriteButtonVacio= product.querySelector("#corazon-vacio");
        
        //if (favoriteButtonActive && favoriteButtonVacio) {
            favoriteButtonActive.classList.toggle("active", isFavorite);
            favoriteButtonVacio.classList.toggle("active", isFavorite);
          //}
        // favoriteButtonActive.classList.toggle('active', isFavorite);
        // favoriteButtonVacio.classList.toggle('active', isFavorite);
        favoriteButton.classList.toggle('favorite-active', isFavorite);

        
      console.log(isFavorite);
      console.log(productId);
    });
};
btnsFavorite.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const card=e.target.closest('.card-body')
        const product= {
            id:card.dataset.productID,
            producto: card.querySelector(".producto").textContent,
            precio: card.querySelector(".precio").textContent,

        };
        toggleFavorite(product);

        showHTML();
    });
});
loadFavoritesFromLocalStorage();

itemsContainer = document.getElementById("items-favoritos")

const traerFavoritosCatalogo = JSON.parse(localStorage.getItem("favoritos"));
console.log(traerFavoritosCatalogo);

traerFavoritosCatalogo.forEach(function (item) { 
    // Crear el HTML para cada elemento
    let itemHTML = `<div class="card-product" id="${item.id}">
    <div class="card mb-3" style="max-width: 540px;">      
     <div class="row g-0">
       <div class="col-md-4">
        <!-- <button type="button" class="favButton"> -->
         <!-- </button> -->
        <img src= "${item.img}" class="img-fluid card-img-top rounded-start" alt="...">           
       </div>
       <div class="col-md-8 contenedor-texto">
         <div class="card-body" id="1">
           <p class="card-text precio">${item.precio}</p>
           <p class="description">${item.description}</p>
           <div class="botones">
             <button class="favorite">
               <i class="fa-regular fa-heart" id="corazon-vacio"></i>
               <i class="fa-solid fa-heart" id="corazon-lleno"></i>
             </button>
               <a href="compra.html" >
                 <img class="img-carrito" src="./src/img/CarritoCompras.png" width="25px" height="25px alt="Carrito Compras">
               </a>
           </div>`
  
    // Insertar el HTML generado en el contenedor
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);

  });
  //const card = e.target.closest(".card");
  // Crear un objeto con la información del producto basado en el elemento card





