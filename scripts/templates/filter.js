
function filterTemplate(data) {
   function getFilterDom(type) {
     const filterContainer = document.createElement("div");
     const allTags = document.querySelectorAll(".active-filter div");
     allTags.forEach((tag) => {
       if (tag.childNodes[0].textContent === data) {
         filterContainer.classList.add("active");
       }
     });
     filterContainer.classList.add("filter-card");
     filterContainer.addEventListener("click", (e) => {
       if (!filterContainer.classList.contains("active")) {
         filterContainer.classList.add("active");
         getTag(data, type);
       }
     });
     const close = document.createElement("img");
     close.classList.add("unselected-filter-card");
     close.src = "../../../assets/logo/close.svg";
     close.addEventListener("click", (event) => {
       event.stopPropagation();
       filterContainer.classList.remove("active");
       const allTags = document.querySelectorAll(".active-filter div");
       allTags.forEach((tag) => {
         if (tag.childNodes[0].textContent === data) {
           tag.remove();
         }
       });
     });
     const filter = document.createElement("p");
     filter.textContent = data;
     filterContainer.appendChild(filter);
     filterContainer.appendChild(close);

     return filterContainer;
   }
   function getTag(name, type) {
     const activeFilterContainer = document.querySelector(".active-filter");
     const filterActiveContainer = document.createElement("div");
     filterActiveContainer.classList.add(`${type}`);
     const filterActiveContent = document.createElement("p");
     filterActiveContent.textContent = name;
     const deleteActiveFilter = document.createElement("img");
     deleteActiveFilter.src = "../../assets/logo/croix.svg";
     deleteActiveFilter.addEventListener("click", (e) => {
       const dropDownItems = document.querySelectorAll(
         `#option-${type}-container .filter-card.active`
       );
       dropDownItems.forEach((item) => {
         if (
           item.childNodes[0].textContent === filterActiveContent.textContent
         ) {
           item.classList.remove("active");
         }
       });
       filterActiveContainer.remove();
     });

     filterActiveContainer.appendChild(filterActiveContent);
     filterActiveContainer.appendChild(deleteActiveFilter);
     activeFilterContainer.appendChild(filterActiveContainer);
   }
   return {
     getFilterDom,
   };
 }
function toogleFilter() {
  const filterTab = document.querySelectorAll(".filter-name");
  filterTab.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.classList.toggle("active");
    });
  });
}
toogleFilter();
