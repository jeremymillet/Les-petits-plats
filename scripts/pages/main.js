import { recipes } from "../../data/recipes-min.js";
import filters from "../utils/filters.js";
import {
  displayDropdownFilters,
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
  displayData(recipes);
  displayNbRecipes(recipes);
  const ustensils = sortNameUstensiles(recipes);
  const ingredients = sortNameIngredients(recipes);
  const appliance = sortNameAppareils(recipes);
  displayDropdownFilters(ingredients, "ingredients");
  displayDropdownFilters(appliance, "appareils");
  displayDropdownFilters(ustensils, "ustensiles");
  filters();
}

init();
