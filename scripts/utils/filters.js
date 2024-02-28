

import {
  displayDropdownFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  searchByTag,
  
} from "../utils/helpers.js";

import { newRecipes} from "./search.js";


function filters() {

  const dropDownBtn = document.querySelectorAll(".filter-card");
  dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      searchByTag(newRecipes);
    });
  });
 
  function setupFilterInput(inputElement, deleteElement, category) {
    inputElement.addEventListener("input", () => {
      let data = [];
      if (category === "ingredients") {
        data = sortNameIngredients(newRecipes);
      } else if (category === "appareils") {
        data = sortNameAppareils(newRecipes);
      } else if (category === "ustensiles") {
        data = sortNameUstensiles(newRecipes);
      }
      let inputValue = inputElement.value;
      if (inputValue.length > 1) {
        deleteElement.style.display = "flex";
        deleteElement.addEventListener("click", () => {
          deleteElement.style.display = "none";
          inputElement.value = "";
        });
        const filteredWords = data.filter((word) => {
          return word.toLowerCase().includes(inputValue);
        });
        displayDropdownFilters(filteredWords, category);
      } else {
        displayDropdownFilters(data, category);
      }
    });
  }

  function CheckSearchFilterInput() {
    const inputIngredients = document.querySelector(
      ".filter-search-container-ingredients input"
    );
    const deleteInputValueIngredients = document.querySelector(
      ".filter-search-container-ingredients .delete-value"
    );
    const inputAppareils = document.querySelector(
      ".filter-search-container-appareils input"
    );
    const deleteInputValueAppareils = document.querySelector(
      ".filter-search-container-appareils .delete-value"
    );
    const inputUstensiles = document.querySelector(
      ".filter-search-container-ustensiles input"
    );
    const deleteInputValueUstensiles = document.querySelector(
      ".filter-search-container-ustensiles .delete-value"
    );

    setupFilterInput(
      inputIngredients,
      deleteInputValueIngredients,
      "ingredients"
    );
    setupFilterInput(inputAppareils, deleteInputValueAppareils, "appareils");
    setupFilterInput(inputUstensiles, deleteInputValueUstensiles, "ustensiles");
  }
  CheckSearchFilterInput();
}

export default filters;
