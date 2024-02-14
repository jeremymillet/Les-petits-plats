

import {
  displayIngredientsFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  displayNbRecipes,
  triRecipesFromDom,
} from "../utils/helpers.js";
import { recipes } from "../../data/recipes.js";

 const recipesFromDom = triRecipesFromDom(recipes);
 const ustensils = sortNameUstensiles(recipesFromDom);
 const ingredients = sortNameIngredients(recipesFromDom);
 const appliance = sortNameAppareils(recipesFromDom);

function filters() {
  
  function setupFilterInput(inputElement, deleteElement, filterArray, category) {
    inputElement.addEventListener("input", () => {
      let inputValue = inputElement.value;
      if (inputValue.length > 1) {
        deleteElement.style.display = "flex";
        deleteElement.addEventListener("click", () => {
          deleteElement.style.display = "none";
          inputElement.value = "";
          displayIngredientsFilters(filterArray, category);
        });
        const filteredWords = filterArray.filter((word) => {
          return word.toLowerCase().includes(inputValue);
        });
        displayIngredientsFilters(filteredWords, category);
      
      } else {
        displayIngredientsFilters(filterArray,  category);
      }
    });
  }

  function CheckSearchFilterInput() {
    const inputIngredients = document.querySelector(".filter-search-container-ingredients input");
    const deleteInputValueIngredients = document.querySelector(".filter-search-container-ingredients .delete-value");
    const inputAppareils = document.querySelector(".filter-search-container-appareils input");
    const deleteInputValueAppareils = document.querySelector(".filter-search-container-appareils .delete-value");
    const inputUstensiles = document.querySelector(".filter-search-container-ustensiles input");
    const deleteInputValueUstensiles = document.querySelector(".filter-search-container-ustensiles .delete-value");

    setupFilterInput(inputIngredients, deleteInputValueIngredients, ingredients, "ingredients");
    setupFilterInput(inputAppareils, deleteInputValueAppareils, appliance, "appareils");
    setupFilterInput(inputUstensiles, deleteInputValueUstensiles, ustensils, "ustensiles");
  }
  CheckSearchFilterInput();
}

export default filters;
