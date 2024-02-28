import {
  displayDropdownFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  displayNbRecipes,
  displayMedia,
  refreshDropdownEvent,
  searchByTag,
} from "./helpers.js";
import { recipes } from "../../data/recipes.js";


export let newRecipes = [...recipes];
const input = document.querySelector(".search-input input");
const searchBtn = document.querySelector(".search-button");
const deleteBtn = document.querySelector(".search-input .close");

export function getInputValue() {
  const inputValue = input.value;
  return inputValue;
}

function searchByDescription(value, recipes) {
  recipes.forEach((recipe) => {
    const descriptionWords = recipe.description.toLowerCase().split(" ");
    if (descriptionWords.includes(value.toLowerCase())) {
      newRecipes.push(recipe);
    }
  });
}
function searchByIngredient(value, recipes) {
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => { 
      if (ingredient.ingredient.toLowerCase() === value) {
          newRecipes.push(recipe);
        }
      })
  });
}
function searchByName(value, recipes) {
  recipes.forEach((recipe) => {
    if (recipe.name.toLowerCase().includes(value.toLowerCase())) {
      newRecipes.push(recipe);
    }
  });
}
export function hundleInput() {
  newRecipes = [];
  const value = getInputValue();
  if (value.length >= 3) {
    searchByName(value, recipes);
    searchByIngredient(value, recipes);
    searchByDescription(value, recipes);

    if (newRecipes.length === 0) {
      displayNbRecipes(newRecipes);
      const cardsContainer = document.querySelector(".cards-container");
      cardsContainer.innerHTML = "";
      cardsContainer.innerHTML = `Aucune recette ne contient ${value} vous pouvez chercher «
tarte aux pommes », « poisson » `;
    } else {
      const uniqueRecipes = Object.values(newRecipes).reduce((acc, curr) => {
        if (!acc.some((recipe) => recipe.id === curr.id)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      uniqueRecipes.sort((a, b) => a.id - b.id);
      searchByTag(uniqueRecipes);
      refreshDisplay(uniqueRecipes);
      refreshDropdownEvent();
    }
  } else {
    alert("vous devez rentrer au moins 3 caractères");
  }
}
export function refreshDisplay(newRecipes) {
  displayMedia(newRecipes);
  displayNbRecipes(newRecipes);
  const ustensils = sortNameUstensiles(newRecipes);
  const ingredients = sortNameIngredients(newRecipes);
  const appliance = sortNameAppareils(newRecipes);
  displayDropdownFilters(ingredients, "ingredients");
  displayDropdownFilters(appliance, "appareils");
 displayDropdownFilters(ustensils, "ustensiles");
}

input.addEventListener("input", (e) => { 
  const value = getInputValue();
  if (value.length >= 3) {
    deleteBtn.classList.add("visible");
  }
  else {
    deleteBtn.classList.remove("visible");
  }
})

deleteBtn.addEventListener("click", () => {
  input.value = "";
  newRecipes = [...recipes];
  searchByTag(newRecipes);
  refreshDisplay(newRecipes);
  refreshDropdownEvent();
  deleteBtn.classList.remove("visible");
});

searchBtn.addEventListener("click", () => {
  hundleInput();
});


