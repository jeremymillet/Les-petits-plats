import { recipes } from '../../data/recipes.js'

export function displayMedia(recipes) {
  const cardsContainer = document.querySelector(".cards-container");
  recipes.forEach((recipe) => {
    const mediaModel = cardTemplate(recipe);
    const cardDom = mediaModel.getCardDom();
    cardsContainer.appendChild(cardDom);
  });
}

async function displayNbRecipes(recipes) {
  const nbRecipes = document.querySelector(".nb-recipes")
  nbRecipes.innerText = recipes.length  +" recettes"
}
async function displayData(recipes) {
  displayMedia(recipes);
}

async function init() {
  // Récupère les datas des photographes
  displayNbRecipes(recipes);
  displayData(recipes);
}

init();
