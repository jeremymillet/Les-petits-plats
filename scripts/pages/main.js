import { recipes } from '../../data/recipes.js'

function displayMedia(recipes) {
  const cardsContainer = document.querySelector(".cards-container");
  recipes.forEach((recipe) => {
    const mediaModel = cardTemplate(recipe);
    const cardDom = mediaModel.getCardDom();
    cardsContainer.appendChild(cardDom);
  });
}
function displayIngredientsFilters(ingredients) {
  const filterIngredientsContainer = document.querySelector(
    "#option-ingredients-container"
  );
  ingredients.forEach((ingredient) => {
    const filterModel = filterTemplate(ingredient);
    const filterDom = filterModel.getFilterIngredientsDom();
    filterIngredientsContainer.appendChild(filterDom);
  });
}


async function displayNbRecipes(recipes) {
  const nbRecipes = document.querySelector(".nb-recipes")
  nbRecipes.innerText = recipes.length  +" recettes"
}
async function displayData(recipes) {
  displayMedia(recipes);
}

function sortNameIngredients(recipes) {
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
  return allIngredientNames
}
function sortNameAppareils(recipes,test) {
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
function sortNameUstensiles(recipes) {
 const allUstensilNames = [];
 // Boucle à travers chaque recette
 recipes.forEach((recipe) => {
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

async function init() {
  // Récupère les datas des photographes
  displayNbRecipes(recipes);
  displayData(recipes);
  const ustensils = sortNameUstensiles(recipes);
  const ingredients = sortNameIngredients(recipes);
  const appliance = sortNameAppareils(recipes);
  displayIngredientsFilters(ingredients);
  console.log(ustensils);
  console.log(ingredients);
  console.log(appliance);
}

init();
