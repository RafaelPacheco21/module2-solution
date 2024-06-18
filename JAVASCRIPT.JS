// TODO: PASO 0: Modificar función loadMenuItems para cargar una categoría aleatoria
var randomCategoryShortName = getRandomCategory();

// Función para obtener una categoría aleatoria
function getRandomCategory() {
    var categories = ["L", "D", "Sushi", "Appetizers"]; // Lista de categorías posibles
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// TODO: PASO 1: Implementar función para cargar elementos del menú según la categoría aleatoria
function loadMenuItems(categoryShortName) {
    // Aquí deberías implementar la lógica para cargar los elementos del menú según la categoría aleatoria
    console.log("Cargando elementos del menú para categoría: " + categoryShortName);
    // Simulación de carga de elementos del menú
    // Puedes implementar una lógica de AJAX aquí para obtener los elementos reales del menú
}
