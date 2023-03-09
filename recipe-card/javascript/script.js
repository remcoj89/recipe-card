const recipeName = document.getElementById('recipe-name');
const recipeImage = document.getElementById('recipe-image')
const recipeCategory = document.getElementById('category');
const recipeVideo = document.getElementById('video');
const recipeDescription = document.getElementById('recipe-description');
const newRecipeBtn = document.getElementById('btn-next')

let apiRecipes = []
let mealsArray = []

// Creating an ingredient list


// Update the DOM
function updateDOM() {
    // main Card Container
    mealsArray.forEach((result) => {
        recipeImage.src = `${result.strMealThumb}`;
        recipeName.textContent = result.strMeal;
        recipeCategory.textContent = result.strCategory;
        recipeVideo.src = `${result.strYoutube}`;
        recipeDescription.textContent = result.strInstructions;
    });
}

// Get Recipes from API
async function getRecipes() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    try {
        const response = await fetch(apiUrl);
        apiRecipes = await response.json();
        mealsArray = apiRecipes.meals
        updateDOM(mealsArray);
    } catch (error) {
        alert(error)
    }
}

// Changing the html

//  On load
getRecipes();
