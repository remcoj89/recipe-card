const recipeName = document.getElementById('recipe-name');
const recipeImage = document.getElementById('recipe-image')
const recipeCategory = document.getElementById('category');
const recipeVideo = document.getElementById('video');
const recipeDescription = document.getElementById('recipe-description');
const newRecipeBtn = document.getElementById('btn-next')
const originalRecipeBtn = document.getElementById('link-to-original-recipe')

let apiRecipes = []
let mealsArray = []

// Revailing Elements on Scroll
// const observer = new IntersectionObserver()


// Update the DOM
function updateDOM() {
  // main Card Container
  mealsArray.forEach((result) => {
    recipeImage.src = `${result.strMealThumb}`;
    recipeName.textContent = result.strMeal;
    recipeCategory.textContent = result.strCategory;
    recipeVideo.src = `${result.strYoutube}`;
    recipeDescription.textContent = result.strInstructions;
    originalRecipeBtn.href = `${result.strSource}`;

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
    // createList(mealsArray);
    console.log(mealsArray)
  } catch (error) {
    alert(error)
  }
}

// Get a new Recipe
newRecipeBtn.addEventListener('click', function(){
  getRecipes();
})
//  On load
getRecipes();
