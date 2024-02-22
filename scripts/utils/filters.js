

import {
  displayIngredientsFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  displayNbRecipes,
} from "../utils/helpers.js";
import { recipes } from "../../data/recipes.js";
import { newRecipes,refreshDisplay} from "./search.js";


function filters() {
  let teste = [];

  function setupSort() {
    const uniqueRecipes = teste.reduce((acc, curr) => {
      if (!acc.some((recipe) => recipe.id === curr.id)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    uniqueRecipes.sort((a, b) => a.id - b.id);
    refreshDisplay(uniqueRecipes, teste);
  }

  function event() {
    const dropDownBtn = document.querySelectorAll(".filter-card");
    dropDownBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (teste.length > 0) {
          searchByIngredient(teste);
        } else {
          searchByIngredient(newRecipes);
        }
      });
    });
    const unselectedBtn = document.querySelectorAll(".unselected-filter-card");
    unselectedBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (teste.length > 0) {
          searchByIngredient(teste);
        } else {
          searchByIngredient(newRecipes);
        }
      });
    });
    const unselectedBtnTags = document.querySelectorAll(
      ".active-filter div img"
    );
    unselectedBtnTags.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (teste.length > 0) {
          searchByIngredient(teste);
        } else {
          searchByIngredient(newRecipes);
        }
      });
    });
  }
  const dropDownBtn = document.querySelectorAll(".filter-card");
  dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      searchByIngredient(newRecipes);
    });
  });

  function searchByIngredient(recipes) {
    const allTags = document.querySelectorAll(".active-filter div");
    const ingredients = [];
    const ustensiles = [];
    const appareils = [];

    allTags.forEach((tag) => {
      if (tag.classList.contains("ingredients")) {
        ingredients.push(tag.innerText.toLowerCase());
      } else if (tag.classList.contains("ustensiles")) {
        ustensiles.push(tag.innerText.toLowerCase());
      } else if (tag.classList.contains("appareils")) {
        appareils.push(tag.innerText.toLowerCase());
      }
    });

    const filteredRecipes = recipes.filter((recipe) => {
      const hasSelectedIngredients =
        ingredients.length === 0 ||
        ingredients.every((ingredient) => {
          return recipe.ingredients.some(
            (item) => item.ingredient.toLowerCase() === ingredient
          );
        });

      const hasSelectedUstensiles =
        ustensiles.length === 0 ||
        ustensiles.every((ustensil) => {
          return recipe.ustensils.some(
            (item) => item.toLowerCase() === ustensil.toLowerCase()
          );
        });

      const hasSelectedAppareils =
        appareils.length === 0 ||
        appareils.every((appareil) => {
          return recipe.appliance.toLowerCase() === appareil.toLowerCase();
        });

      return (
        hasSelectedIngredients && hasSelectedUstensiles && hasSelectedAppareils
      );
    });

    // Remplace le contenu de 'teste' par les nouvelles recettes filtrées
    teste.splice(0, teste.length, ...filteredRecipes);

    // Mettre en place le tri si nécessaire
    setupSort();
    event();
  }
  
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
          displayIngredientsFilters(data, category);
        });
        const filteredWords = data.filter((word) => {
          return word.toLowerCase().includes(inputValue);
        });
        displayIngredientsFilters(filteredWords, category);
      } else {
        displayIngredientsFilters(data, category);
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
