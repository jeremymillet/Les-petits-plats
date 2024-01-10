import { recipes } from '../../data/recipes.js'

console.log(recipes);


export function displayMedia(media) {
  const photographersSectionMedia = document.querySelector(".cards-container");
  media.forEach((recipe) => {
      const mediaModel = cardTemplate(recipe);
      const PhotographerHeaderDom = mediaModel.getCardDom();
      photographersSectionMedia.appendChild(PhotographerHeaderDom);
  });
}
async function displayData(media) {
    displayMedia(media);
}

async function init() {
  // Récupère les datas des photographes
  displayData(recipes);
}

init();
