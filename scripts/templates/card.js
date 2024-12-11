function cardTemplate(data) {
    
    const { id, name, servings, time, description, appliance, ingredients, ustensils, image } = data
    const picture = `./assets/images/${image}`;

    function getCardDom() {
        const cardLink = document.createElement("a");
        cardLink.classList.add("card-link");
        cardLink.href = `/recipe.html?id=${id}`;
        const article = document.createElement("article");
        article.classList.add("card");
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("card-image-container");
        const textContainer = document.createElement("div");
        textContainer.classList.add("card-text-container");
        const timeRecipe = document.createElement("p");
        timeRecipe.classList.add("card-time");
        timeRecipe.textContent = time + "min";

        const img = document.createElement("img");
        img.setAttribute("src", picture)
        img.setAttribute("alt","cover recipes")

        const title = document.createElement("h3");
        title.textContent = name

        const labelRecipe = document.createElement("label")
        labelRecipe.classList.add("label-recipe")
        labelRecipe.textContent = "Recette"

        const textRecipe = document.createElement("p");
        textRecipe.textContent = description
        textRecipe.classList.add("recipe-description")

        const ingredientsContainer = document.createElement("div");
        ingredientsContainer.classList.add("ingredients-container");
        const labelIngredients = document.createElement("label");
        labelIngredients.textContent = "Ingredients"
        labelIngredients.classList.add("label-ingredients");


        ingredients.forEach(element => {
            const ingredientContainer = document.createElement("div")
            ingredientContainer.classList.add("ingredient-container");

            const ingredientName = document.createElement("p")
            ingredientName.textContent = element.ingredient;
            ingredientName.classList.add("ingredient");

            const ingredientQuantity = document.createElement("p")
            if (element.quantity === undefined) {
                ingredientQuantity.textContent = "-";
            }
            else {
                ingredientQuantity.textContent = `${element.quantity} ${element.unit === undefined ? "" : element.unit}`;
            }
            ingredientQuantity.classList.add("quantity");

            ingredientContainer.appendChild(ingredientName);
            ingredientContainer.appendChild(ingredientQuantity);
            
            ingredientsContainer.appendChild(ingredientContainer);
        });
        textContainer.appendChild(title);
        textContainer.appendChild(labelRecipe);
        textContainer.appendChild(textRecipe);
        textContainer.appendChild(labelIngredients);
        textContainer.appendChild(ingredientsContainer);
        imgContainer.appendChild(img);
        article.appendChild(timeRecipe);
        article.appendChild(imgContainer)
        article.appendChild(textContainer);
        cardLink.appendChild(article);

        return (cardLink);
        
    }
     return {id,name,servings,time,description,appliance,ingredients,ustensils,picture,getCardDom};
}
