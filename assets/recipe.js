const topSection = document.getElementById('top-section');
const ingredients = document.getElementById('ingredients');
const nutritionalFacts = document.getElementById('nutritional-facts');
let currentSearch;
let currentRecipe = JSON.parse(localStorage.getItem('clickedRecipe'));

if (localStorage.getItem('currentSearch')) {
  currentSearch = JSON.parse(localStorage.getItem('currentSearch'));
  console.log(currentSearch);
}

console.log(currentSearch.hits);
console.log(currentRecipe);

let test1 = currentSearch.hits.filter(function (item, index) {
  if (item.recipe.label === currentRecipe) {
    return item.recipe;
  }
});

console.log(test1);
topSection.innerHTML = test1.map((item, index) => {
  return `<div>
  <p class = "fs-3 fw-bold">${item.recipe.label}</p>
  </div>
  <div class="m-1">
  <img src=${item.recipe.images.REGULAR.url}
  class="card-img-top  p-2" alt="">
  </div>`;
});

let ingredientsList = test1[0].recipe.ingredientLines;

ingredients.innerHTML = ingredientsList
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join(' ');

let nutritionalVal = test1[0].recipe.totalNutrients;

console.log(nutritionalVal);
let nutritionLength = Object.keys(nutritionalVal).length;
// console.log(nutritionLength);

for (let val in nutritionalVal) {
  let nutritionVal = document.createElement('li');
  nutritionVal.innerText = `${nutritionalVal[val].label} ${nutritionalVal[
    val
  ].quantity.toFixed(1)} ${nutritionalVal[val].unit}`;
  nutritionalFacts.append(nutritionVal);
}
