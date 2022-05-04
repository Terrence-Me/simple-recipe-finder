const topSection = document.getElementById('top-section');
const ingredients = document.getElementById('ingredients');
const nutritionalFacts = document.getElementById('nutritional-facts');
let currentSearch;
let currentRecipe = JSON.parse(localStorage.getItem('clickedRecipe'));

if (localStorage.getItem('currentSearch')) {
  currentSearch = JSON.parse(localStorage.getItem('currentSearch'));
}

let searchedItem = currentSearch.hits.filter(function (item, index) {
  if (item.recipe.label === currentRecipe) {
    return item.recipe;
  }
});

console.log(searchedItem);
topSection.innerHTML = searchedItem.map((item, index) => {
  return `<div>
  <p class = "fs-3 fw-bold m-0">${item.recipe.label}</p>
  </div>
  <div class="m-1">
  <img src=${item.recipe.images.REGULAR.url}
  class="card-img-top  p-2" alt="">
  </div>`;
});

let ingredientsList = searchedItem[0].recipe.ingredientLines;

ingredients.innerHTML = ingredientsList
  .map((item) => {
    return `<li class = "fs-6">${item}</li>`;
  })
  .join(' ');

let nutritionalVal = searchedItem[0].recipe.totalNutrients;
let yield = searchedItem[0].recipe.yield;

console.log(searchedItem[0].recipe.yield);

console.log(nutritionalVal);
let nutritionLength = Object.keys(nutritionalVal).length;
// console.log(nutritionLength);

for (let val in nutritionalVal) {
  let nutritionValLi = document.createElement('li');
  let nutritionMeasure = nutritionalVal[val].quantity / yield;

  nutritionValLi.classList = 'fs-6 p-1 m-1 nutritionalVals';
  nutritionValLi.innerText = `${
    nutritionalVal[val].label
  }  ${nutritionMeasure.toFixed(2)}${nutritionalVal[val].unit}`;
  nutritionalFacts.append(nutritionValLi);
}

// window.onbeforeunload = () => {
//   localStorage.removeItem('clickedRecipe');
// };
