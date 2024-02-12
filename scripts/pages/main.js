import { recipes } from '../../data/recipes.js'
import filters from '../utils/filters.js'
import { displayIngredientsFilters,sortNameIngredients,sortNameAppareils,sortNameUstensiles,displayNbRecipes} from "../utils/helpers.js";

function displayMedia(recipes) {
  const cardsContainer = document.querySelector(".cards-container");
  recipes.forEach((recipe) => {
    const mediaModel = cardTemplate(recipe);
    const cardDom = mediaModel.getCardDom();
    cardsContainer.appendChild(cardDom);
  });
}

async function displayData(recipes) {
  displayMedia(recipes);
}


async function init() {
  // Récupère les datas des photographes
  displayNbRecipes(recipes);
  displayData(recipes);
  const ustensils = sortNameUstensiles(recipes);
  const ingredients = sortNameIngredients(recipes);
  const appliance = sortNameAppareils(recipes);
  displayIngredientsFilters(ingredients, "ingredients");
  displayIngredientsFilters(appliance, "appareils");
  displayIngredientsFilters(ustensils, "ustensiles");
  filters();
  
}

init();
