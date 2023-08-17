const recipeName = document.getElementById('recipe-name');
const recipeCategory = document.getElementById('recipe-category')
const recipeOrigin = document.getElementById('recipe-origin')
const recipeImage = document.getElementById('recipe-image')
const recipeInstructions = document.getElementById('recipe-instructions')
const recipeInstructionsVideo = document.getElementById('recipe-instructions--video')
const recipeIngredientList = document.getElementById('recipe-ingredient-list')

recipeName.textContent = "Pizza"
recipeCategory.textContent = "Italien"
recipeOrigin.textContent = "Italy"



let apiRecipes = []
let mealsArray = []

function showRecipevideo() {}

function updateDom() {
  mealsArray.map((meal) => {
    console.log(meal)
    recipeName.textContent = meal.strMeal
    recipeCategory.textContent = meal.strCategory
    recipeOrigin.textContent = meal.strArea
    recipeImage.src = meal.strMealThumb
    recipeInstructions.textContent = meal.strInstructions
    if(meal.strYoutube.length >= 4) {
      recipeInstructionsVideo.style.display = "block"
      recipeInstructionsVideo.setAttribute('href' , `${meal.strYoutube}`)
    }
    for(let i = 1; i<= 100; i++ ){
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]

      if (ingredient && ingredient.length >0 && measure && measure.length > 0) {
        const listItem = document.createElement("li");
        listItem.style.listStyle = "none"
        const listLine = document.createElement("hr");
        listItem.textContent = `${measure} ${ingredient}`;
        recipeIngredientList.appendChild(listItem);
        recipeIngredientList.appendChild(listLine);
      }
    }
  })
}


async function getRecipes() {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  try {
    const response = await fetch(apiUrl)
    apiRecipes = await response.json();
    mealsArray = apiRecipes.meals;
    updateDom();
  } catch (error) {
    alert(error)
  }
}

recipeInstructionsVideo.addEventListener('click', showRecipevideo)

getRecipes();
