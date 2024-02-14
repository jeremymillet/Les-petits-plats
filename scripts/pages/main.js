import { recipes } from '../../data/recipes.js'
import filters from '../utils/filters.js'
import {
  displayIngredientsFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  displayNbRecipes,
  displayMedia,
  triRecipesFromDom,
} from "../utils/helpers.js";



async function displayData(recipes) {
  displayMedia(recipes);
}


async function init() {
  // Récupère les datas des photographes
  displayData(recipes);
  displayNbRecipes(recipes);
  const recipesFromDom = triRecipesFromDom(recipes);
  const ustensils = sortNameUstensiles(recipesFromDom);
  const ingredients = sortNameIngredients(recipesFromDom);
  const appliance = sortNameAppareils(recipesFromDom);
  displayIngredientsFilters(ingredients, "ingredients");
  displayIngredientsFilters(appliance, "appareils");
  displayIngredientsFilters(ustensils, "ustensiles");
  filters();
  
}

init();
