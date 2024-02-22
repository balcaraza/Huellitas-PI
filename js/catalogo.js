document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón de favoritos por su clase
    const favoriteButton = document.querySelector('.button-favorite');

    // Agregar un event listener para el evento de clic
    favoriteButton.addEventListener('click', function () {
        // Alternar la clase clicked al botón de favoritos
        favoriteButton.classList.toggle('clicked');
    });
});

