function filterTemplate(data) {

  function getFilterIngredientsDom() { 
    const filterContainer = document.createElement('div');
    const close = document.createElement("img");
    close.classList.add("unselected-filter-card");
    close.src = "../../../assets/logo/close.svg";
    filterContainer.classList.add("filter-card");
    const filter = document.createElement('p');
    filter.textContent = data

    filterContainer.appendChild(filter);
    filterContainer.appendChild(close);

    return filterContainer;
  }
  function getFilterAppareilsDom() {
    const filterContainer = document.createElement("div");
    const close = document.createElement("img");
    close.classList.add("unselected-filter-card");
    close.src = "../../../assets/logo/close.svg";
  
    filterContainer.classList.add("filter-card");
    const filter = document.createElement("p");
    filter.textContent = data;
    filterContainer.appendChild(filter);
    filterContainer.appendChild(close);

    return filterContainer;
  }
  function getFilterUstensilesDom() {
    const filterContainer = document.createElement("div");
    const close = document.createElement("img");
    close.classList.add("unselected-filter-card");
    close.src = "../../../assets/logo/close.svg";
    filterContainer.classList.add("filter-card");
    const filter = document.createElement("p");
    filter.textContent = data;

    filterContainer.appendChild(filter);
    filterContainer.appendChild(close);

    return filterContainer;

  }
  return {
    getFilterIngredientsDom,
    getFilterAppareilsDom,
    getFilterUstensilesDom,
  };
}

function toogleFilter() {
  const filterTab = document.querySelectorAll(".filter-name");
  filterTab.forEach((button) => {
    button.addEventListener("click", () => { 
      button.parentNode.classList.toggle("active");
      })
  });
}
toogleFilter();

