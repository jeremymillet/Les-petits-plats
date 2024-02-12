export async function displayNbRecipes(recipes) {
  const nbRecipes = document.querySelector(".nb-recipes");
  nbRecipes.innerText = recipes.length + " recettes";
}

export function displayIngredientsFilters(tableau, where) {
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
export function sortNameUstensiles(recipes) {
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

