function filterTemplate(data) {

  function getFilterIngredientsDom() { 
    const filterContainer = document.createElement('div');
    filterContainer.classList.add("not-visible");
    const filter = document.createElement('p');
    filter.textContent = data

    filterContainer.appendChild(filter);

    return filterContainer;
  }
  function filterContainerDom() {

  }
  function getFilterUstensilesDom() {

  }
  return {
    getFilterIngredientsDom,
    filterContainerDom,
    getFilterUstensilesDom,
  };
}
