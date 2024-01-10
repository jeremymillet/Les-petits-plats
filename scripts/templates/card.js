function cardTemplate(data) {
    const { id, name, servings, time, description, appliance, ingredients, ustensils, image } = data
    const picture = `./assets/images/${image}`;
    function getCardDom() {
        const cardsContainer= document.querySelector(".cards-container");
        const article = document.createElement("article");
        const imgContainer = document.createElement("div");
        const textContainer = document.createElement("div");
        const timeRecipe = document.createElement("p");
        timeRecipe.textContent = time;

        const img = document.createElement("img");
        img.setAttribute("src",picture)

        const title = document.createElement("h3");
        title.textContent = name

        const labelRecipe = document.createElement("label")
        labelRecipe.textContent = "Recette"

        const textRecipe = document.createElement("p");
        textRecipe.textContent = description

        const ingredientsContainer = document.createElement("div");
        const labelIngredients = document.createElement("label");

        ingredientsContainer.appendChild(labelIngredients);

        ingredients.forEach(element => {
            const ingredientContainer = document.createElement("div")

            const ingredientName = document.createElement("p")
            ingredientName.textContent = element.ingredient;

            const ingredientQuantity = document.createElement("p")
            ingredientQuantity.textContent = element.quantity + element.unit;

            ingredientContainer.appendChild(ingredientName);
            ingredientContainer.appendChild(ingredientQuantity);
            
            ingredientsContainer.appendChild(ingredientContainer);
        });
        textContainer.appendChild(title);
        textContainer.appendChild(labelRecipe);
        textContainer.appendChild(textRecipe);
        textContainer.appendChild(ingredientsContainer);
        imgContainer.appendChild(img);
        article.appendChild(timeRecipe);
        article.appendChild(imgContainer)
        article.appendChild(textContainer);

        return (article);
        
    }
     return {id,name,servings,time,description,appliance,ingredients,ustensils,picture,getCardDom};
}
