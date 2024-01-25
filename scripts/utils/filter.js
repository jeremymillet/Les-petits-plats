function filter() {
    function filterActif(type) {
      let dynamicVariableName = `filter${type}Active`;
      window[dynamicVariableName] = [];
      const allElements = document.querySelectorAll(
        `#option-${type}-container .filter-card`
      );
      allElements.forEach((element) => {
        element.addEventListener("click", () => {
          if (!element.classList.contains("active")) {
            element.classList.add("active");
            window[dynamicVariableName] = document.querySelectorAll(`#option-${type}-container .filter-card.active`);
            console.log(window[dynamicVariableName]);
            return window[dynamicVariableName];
          }
        });
        element.childNodes[1].addEventListener("click", (event) => {
          event.stopPropagation();
          if (element.classList.contains("active")) {
            element.classList.remove("active");
            window[dynamicVariableName] = document.querySelectorAll(
              `#option-${type}-container .filter-card.active`
            );
            console.log(window[dynamicVariableName]);
            return window[dynamicVariableName];
          };
        })
      })
      return window[dynamicVariableName];
    };
    filterActif("ingredients");
    filterActif("appareils");
    filterActif("ustensiles");
}

export default filter;