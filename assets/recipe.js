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

// let test1 = currentSearch.hits.map((item, index) => {
//   if (item.recipe.label === currentRecipe) {
//     return;
//   }
// });
console.log(test1);
