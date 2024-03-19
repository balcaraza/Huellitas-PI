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
            favorite => favorite.id=== productId
        );

        // const favoriteButton = product.querySelector('.favorite');
        const favoriteButtonActive= product.querySelector("#corazon-lleno");
        const favoriteButtonVacio= product.querySelector("#corazon-vacio");
        
        if (favoriteButtonActive && favoriteButtonVacio) {
            favoriteButtonActive.classList.toggle("active", isFavorite);
            favoriteButtonVacio.classList.toggle("active", isFavorite);
          }
        // favoriteButtonActive.classList.toggle('active', isFavorite);
        // favoriteButtonVacio.classList.toggle('active', isFavorite);
        // favoriteButton.classList.toggle('favorite-active', isFavorite);

        
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
