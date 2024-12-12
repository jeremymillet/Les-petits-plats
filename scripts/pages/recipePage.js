import { recipes } from "../../data/recipes-min.js";


function getIdUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function displayRecipe(recipe) {
    const {
      id,
      name,
      servings,
      time,
      description,
      appliance,
      ingredients,
      ustensils,
      image,
    } = recipe;
    console.log(recipe);
    const picture = `../../assets/images/${image}`;
    // Display the recipe in the DOM
    const headerImg = document.querySelector('.header-img');
    headerImg.setAttribute("src", picture);

    const recipeTitle = document.querySelector('.recipe-title');
    recipeTitle.textContent = name;

    const recipeTime = document.querySelector('.recipe-time');
    recipeTime.textContent = `${time} min`;

    const recipeUstensils = document.querySelector(".ustensiles-list")
    ustensils.map(ustensil => {
        const li = document.createElement('li');
        li.textContent = ustensil;
        recipeUstensils.appendChild(li);
    })
    const recipeAppliance = document.querySelector(".appliance-list");

    const li = document.createElement("li");
    li.textContent = appliance;
    recipeAppliance.appendChild(li);
    ;


    const ingredientsContainer = document.querySelector(".ingredients-list");
    ingredients.forEach((element) => {
      const ingredientContainer = document.createElement("div");
      ingredientContainer.classList.add("ingredient-container");

      const ingredientName = document.createElement("p");
      ingredientName.textContent = element.ingredient;
      ingredientName.classList.add("ingredient");

      const ingredientQuantity = document.createElement("p");
      if (element.quantity === undefined) {
        ingredientQuantity.textContent = "-";
      } else {
        ingredientQuantity.textContent = `${element.quantity} ${
          element.unit === undefined ? "" : element.unit
        }`;
      }
      ingredientQuantity.classList.add("quantity");

      ingredientContainer.appendChild(ingredientName);
      ingredientContainer.appendChild(ingredientQuantity);

      ingredientsContainer.appendChild(ingredientContainer);
    });

    const recipeDescription = document.querySelector(".recipe-description");
    recipeDescription.textContent = description;

}

function getRecipeById(id) { 
    const recipe = recipes.filter(recipe => recipe.id == id)
    return recipe[0];
}

const id = getIdUrl();
console.log(id)
const recipe = getRecipeById(id)
console.log(recipe)
displayRecipe(recipe);