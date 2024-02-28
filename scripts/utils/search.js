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
  
}
function searchByIngredient(value, recipes) {

}
function searchByName(value, recipes) {
 
}
export function hundleInput() {
  newRecipes = [];
  const value = getInputValue();
  
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
  } else {
    deleteBtn.classList.remove("visible");
  }
});

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
