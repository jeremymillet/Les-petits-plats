import { recipes } from '../../data/recipes.js'
import filters from '../utils/filters.js'
import {
  displayIngredientsFilters,
  sortNameIngredients,
  sortNameAppareils,
  sortNameUstensiles,
  displayNbRecipes,
  displayMedia,
} from "../utils/helpers.js";



async function displayData(recipes) {
  displayMedia(recipes);
}


async function init() {
  // Récupère les datas des photographes
  displayData(recipes);
  displayNbRecipes(recipes);
  const ustensils = sortNameUstensiles(recipes);
  const ingredients = sortNameIngredients(recipes);
  const appliance = sortNameAppareils(recipes);
  displayIngredientsFilters(ingredients, "ingredients");
  displayIngredientsFilters(appliance, "appareils");
  displayIngredientsFilters(ustensils, "ustensiles");
  filters();
  
}

init();
