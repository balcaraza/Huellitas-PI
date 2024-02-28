document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón de favoritos por su clase
    const favoriteButton = document.querySelector('.button-favorite');

    // Agregar un event listener para el evento de clic
    favoriteButton.addEventListener('click', function () {
        // Alternar la clase clicked al botón de favoritos
        favoriteButton.classList.toggle('clicked');
    });
});

const itemsContainer = document.getElementById("list-items");
function addItem(item){
        itemsContainer.insertAdjacentHTML("beforeend",`
            <div class="card ">
                <div>
                  <img  style="max-height:300px" src="${item.img}" class="card-img-top" alt="Ropa Minie">
                  <button class="button-favorite">
                    <i class="fa-regular fa-heart"></i>
                  </button> 
                  <img class="img-carrito" src="./src/img/CarritoCompras.png" alt="Carrito Compras">
                </div>
                <div class="card-body">
                  <p class="">${item.description}</p>
                  <h5 class="card-precio">${item.precio}</h5>
                </div>
              </div>
              
        </div>`);
   
}//createCards
        
        // Llamadas a la función addItem con objetos que representan diferentes ítems
        addItem({
            'img':'./src/img/Productos/RopaMinie.jpg',
            'description':'Ropa para mascota disney minnie mouse camisa textil rosa grande',
            'precio':'$145.80'});
        addItem({
            'img':'./src/img/Productos/CepilloLimpieza.jpg',
            'description':'Cepillo  de limpieza para mascotas sintético azul 19.7x10.6x5 Cm',
            'precio':'$79.90'});
        addItem({'img':'./src/img/Productos/TazonPanda.jpg',
            'description':'Tazón para mascota panda animal faces plástico blanco',
            'precio':'$99.90'});
        addItem({
            'img':'./src/img/Productos/PelucheDinosaurio.jpg',
            'description':'Peluche para mascota dinosaurio 100% Poliéster 35.5x13 Cm',
            'precio':'$129.90'});
        addItem({
            'img':'./src/img/Productos/JugueteFutbol.jpg',
            'description':'Juguete para mascota con sonido',
            'precio':'$29.90'});
            addItem({
              'img':'./src/img/Productos/toallitaAzul.jpg',
              'description':'Toalla de baño con capucha absorbente de alta calidad',
              'precio':'$150'});
          addItem({
              'img':'./src/img/Productos/casaGatos.jpg',
              'description':'Casa para gatos, color morada con rascadero',
              'precio':'$350'});
        addItem({
            'img':'./src/img/Productos/ChalecoArnes.jpg',
            'description':'Chaleco con arnés para mascotas 100% poliéster azul 25x35',
            'precio':'$99.90'});
        addItem({
            'img':'./src/img/Productos/DisfrazLaGarra.jpg',
            'description':'Disfraz para mascota disney alíen toy story textil verde grande',
            'precio':'$149.90'});
        addItem({'name':'Tazón Rosa',
            'img':'./src/img/Productos/TazonRosa.jpg',
            'description':'Tazón para mascota disney minnie mouse plástico rosa',
            'precio':'$99.90'});
        addItem({
            'img':'./src/img/Productos/cama.jpg',
            'description':'Cama Resistente con Relleno Suave y Color cafe',
            'precio':'$299'});
        
        addItem({
            'img':'./src/img/Productos/collarPerro.jpg',
            'description':'Collar de piel, color cafe, grabado',
            'precio':'$250'});

        