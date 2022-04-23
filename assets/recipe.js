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

// for (let i=0; i<nutritionalVal.length; i++) {

// }
for (let val in nutritionalVal) {
  let testVal = val;
  console.log(val);
  console.log(nutritionalVal[val].label);
  let newVal = [];

  newVal.push(testVal);
  console.log(newVal);
  // nutritionalFacts.innerHTML = `<li>${nutritionalVal[val].label} ${nutritionalVal[val].unit}</li>`;
}

// nutritionalFacts.innerHTML = nutritionalVal.map((item) => {
//   return `<li>${item.label}${item.unit}</li>`;
// });
