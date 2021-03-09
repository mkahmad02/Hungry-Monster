const searchFoods = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
}

const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');

    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'foods'
        const foodInfo = `
            <h3 class="foods-name">${food.strMeal}</h3>
            <img onclick="getIngredients(${food.idMeal})" src="${food.strMealThumb}">`;
        foodDiv.innerHTML = foodInfo;    
        foodContainer.appendChild(foodDiv);
    })
}

const getIngredients = (id) =>{
    //console.log('clicked', id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals[0]))
  
}
const displayIngredients = (ingredient) => {
    console.log(ingredient);
    const ingredientDiv = document.getElementById('food-ingredients');
    ingredientDiv.innerHTML = `
    <img src="${ingredient.strMealThumb}"
    <h3>Ingredients:</h>
    <h5>${ingredient.strIngredient1}</h5>
    <h5>${ingredient.strIngredient2}</h5>
    <h5>${ingredient.strIngredient3}</h5>
    <h5>${ingredient.strIngredient4}</h5>
    <h5>${ingredient.strIngredient5}</h5>
    <h5>${ingredient.strIngredient6}</h5>
    <h5>${ingredient.strIngredient7}</h5>
    <h5>${ingredient.strIngredient8}</h5>
    <h5>${ingredient.strIngredient9}</h5>
    <h5>${ingredient.strIngredient10}</h5>


    `
 }

   

