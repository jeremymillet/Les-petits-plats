import { recipes } from "../../data/recipes-min.js";
import {
  newRecipes,
  refreshDisplay,
  hundleInput,
  getInputValue,
} from "./search-min.js";

export async function displayNbRecipes(recipes) {
  const nbRecipes = document.querySelector(".nb-recipes");
  nbRecipes.innerText = recipes.length + " recettes";
  const nbRecipesHeader = document.querySelector(".header-title");
  nbRecipesHeader.innerText = "CHERCHEZ PARMI PLUS DE "+recipes.length +" RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES";
}
export function displayMedia(recipes) {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const mediaModel = cardTemplate(recipe);
    const cardDom = mediaModel.getCardDom();
    cardsContainer.appendChild(cardDom);
  });
}

export function displayDropdownFilters(tableau, where) {
  const filterIngredientsContainer = document.querySelector(
    `#option-${where}-container`
  );
  filterIngredientsContainer.innerHTML = "";
  const tabToLowerCase = Array.from(
    new Set(tableau.map((val) => val.toLowerCase()))
  );
  tabToLowerCase.forEach((ingredient) => {
    const filterModel = filterTemplate(ingredient);
    const filterDom = filterModel.getFilterDom(where);
    filterIngredientsContainer.appendChild(filterDom);
  });
  refreshDropdownEvent();
}

export function sortNameIngredients(recipes) {
  const allIngredientNames = [];
  // Boucle à travers chaque recette
  recipes.forEach((recipe) => {
    // Boucle à travers chaque ingrédient de la recette
    recipe.ingredients.forEach((ingredient) => {
      // Vérifier si le nom de l'ingrédient est déjà dans le tableau
      if (!allIngredientNames.includes(ingredient.ingredient)) {
        // Ajouter le nom de l'ingrédient au tableau
        allIngredientNames.push(ingredient.ingredient);
      }
    });
  });
  return allIngredientNames;
}
export function sortNameAppareils(recipes) {
  const allApplianceNames = [];
  // Boucle à travers chaque recette
  recipes.forEach((recipe) => {
    // Vérifier si le nom de l'appareil est déjà dans le tableau
    if (!allApplianceNames.includes(recipe.appliance)) {
      // Ajouter le nom de l'appareil au tableau
      allApplianceNames.push(recipe.appliance);
    }
  });
  return allApplianceNames;
}
export function sortNameUstensiles(data) {
  const allUstensilNames = [];
  // Boucle à travers chaque recette
  data.forEach((recipe) => {
    // Boucle à travers chaque ustensile de la recette
    recipe.ustensils.forEach((ustensil) => {
      // Vérifier si le nom de l'ustensile est déjà dans le tableau
      if (!allUstensilNames.includes(ustensil)) {
        // Ajouter le nom de l'ustensile au tableau
        allUstensilNames.push(ustensil);
      }
    });
  });
  return allUstensilNames;
}

export function refreshDropdownEvent() {
  const dropDownBtn = document.querySelectorAll(".filter-card");
  dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      searchByTag(newRecipes);
    });
  });
  const unselectedBtn = document.querySelectorAll(".unselected-filter-card");
  unselectedBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const allTags = document.querySelectorAll(".active-filter div");
      if (allTags.length > 0) {
        searchByTag(recipes);
      } else {
        const inputValue = getInputValue();
        if (inputValue.length > 0) {
          hundleInput();
        } else {
          searchByTag(recipes);
        }
      }
    });
  });
  const unselectedBtnTags = document.querySelectorAll(".active-filter div img");
  unselectedBtnTags.forEach((btn) => {
    btn.addEventListener("click", () => {
      const allTags = document.querySelectorAll(".active-filter div");
      if (allTags.length > 0) {
        searchByTag(recipes);
      } else {
        const inputValue = getInputValue();
        if (inputValue.length > 0) {
          hundleInput();
        } else {
          searchByTag(recipes);
        }
      }
    });
  });
}
export function setupSort() {
  const uniqueRecipes = newRecipes.reduce((acc, curr) => {
    if (!acc.some((recipe) => recipe.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  uniqueRecipes.sort((a, b) => a.id - b.id);
  refreshDisplay(uniqueRecipes);
}
export function searchByTag(recipes) {
  // Sélectionne tous les tags actifs dans le filtre
  const allTags = document.querySelectorAll(".active-filter div");
  
  const ingredients = [];
  const ustensiles = [];
  const appareils = [];

  allTags.forEach((tag) => {
    if (tag.classList.contains("ingredients")) {
      ingredients.push(tag.textContent.toLowerCase());
    } else if (tag.classList.contains("ustensiles")) {
      ustensiles.push(tag.textContent.toLowerCase());
    } else if (tag.classList.contains("appareils")) {
      appareils.push(tag.textContent.toLowerCase());
    }
  });
  console.log(recipes);
  console.log("Ingrédients sélectionnés :", ingredients);
  console.log("Ustensiles sélectionnés :", ustensiles);
  console.log("Appareils sélectionnés :", appareils);

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

  console.log("Recettes filtrées :", filteredRecipes);

  newRecipes.splice(0, newRecipes.length, ...filteredRecipes);
  console.log("newRecipes après mise à jour :", newRecipes);

  setupSort();
  refreshDropdownEvent();
}

