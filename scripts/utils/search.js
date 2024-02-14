import {
  displayIngredientsFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
    displayNbRecipes,
    triRecipesFromDom,
  displayMedia} from "./helpers.js";
import { recipes } from "../../data/recipes.js";
var newRecipes = [];
const input = document.querySelector(".search-input input");
const searchBtn = document.querySelector(".search-button");
const deleteBtn = document.querySelector(".search-input .close");

function getInputValue() {
  const inputValue = input.value;
  return inputValue;
}

function searchByDescription(value) {
    recipes.forEach((recipe) => {
       const descriptionWords = recipe.description.toLowerCase().split(" ");
    if (descriptionWords.includes(value.toLowerCase())) {
      newRecipes.push(recipe);
    }
  });
}

function searchByIngredient(value) {
  recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => { 
          if (ingredient.toLowerCase === value) { 
            newRecipes.push(recipe);
          }
      })
  });
}

function searchByName(value) {
    recipes.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(value.toLowerCase())) {
            newRecipes.push(recipe);
        }
    }); 
}
deleteBtn.addEventListener("click", () => {
    input.value = "";
    displayMedia(recipes);
    displayNbRecipes(recipes);
    const recipesFromDom = triRecipesFromDom(recipes);
    const ustensils = sortNameUstensiles(recipesFromDom);
    const ingredients = sortNameIngredients(recipesFromDom);
    const appliance = sortNameAppareils(recipesFromDom);
    displayIngredientsFilters(ingredients, "ingredients");
    displayIngredientsFilters(appliance, "appareils");
    displayIngredientsFilters(ustensils, "ustensiles");
});

searchBtn.addEventListener("click", () => {
    newRecipes = [];
    const value = getInputValue();
    searchByName(value);
    searchByIngredient(value);
    searchByDescription(value);

    if (newRecipes.length === 0) {
        displayNbRecipes(newRecipes);
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.innerHTML = "";
        alert("rien a été trouvé ")
    }
    else {
        const uniqueRecipes = Object.values(newRecipes).reduce((acc, curr) => {
        if (!acc.some((recipe) => recipe.id === curr.id)) {
            acc.push(curr);
        }
        return acc;
        }, []);
        uniqueRecipes.sort((a, b) => a.id - b.id);
        displayMedia(uniqueRecipes);
        displayNbRecipes(uniqueRecipes);
        const recipesFromDom = triRecipesFromDom(recipes);
        const ustensils = sortNameUstensiles(recipesFromDom);
        const ingredients = sortNameIngredients(recipesFromDom);
        const appliance = sortNameAppareils(recipesFromDom);
        displayIngredientsFilters(ingredients, "ingredients");
        displayIngredientsFilters(appliance, "appareils");
        displayIngredientsFilters(ustensils, "ustensiles");
    }    
});


