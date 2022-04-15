const searchBtn = document.getElementById('button-addon2');
const searchInput = document.getElementById('search-input');
const dietCheckboxes = document.getElementById('diet');
const allergiesCheckboxes = document.getElementById('allergies');
const cuisineCheckboxes = document.getElementById('cuisine-type');
const mealCheckboxes = document.getElementById('meal-type');

let dietCheckedRes = [];
let allergiescheckedRes = [];
let cuisineCheckedRes = [];
let mealCheckedRes = [];

function searchInputHandler(e) {
  e.preventDefault();
  let userInput = searchInput.value.trim();
  console.log(userInput);

  if (!searchInput) {
    console.log('input search location');
    return;
  }

  let dietsChecked = dietCheckboxes.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  let allergiesChecked = allergiesCheckboxes.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  let cuisineChecked = cuisineCheckboxes.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  let mealChecked = mealCheckboxes.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  dietsChecked.forEach((input) => {
    let checked = input.value.toLowerCase();

    dietCheckedRes.push(checked);
    console.log(dietCheckedRes);
  });

  allergiesChecked.forEach((input) => {
    let checked = input.value.toLowerCase();

    allergiescheckedRes.push(checked);
    console.log(allergiescheckedRes);
  });

  cuisineChecked.forEach((input) => {
    let checked = input.value.toLowerCase();

    cuisineCheckedRes.push(checked);
    console.log(cuisineCheckedRes);
  });

  mealChecked.forEach((input) => {
    let checked = input.value.toLowerCase();

    mealCheckedRes.push(checked);
    console.log(mealCheckedRes);
  });

  getAPI(userInput);
}

function getAPI(userInp) {
  if (!userInp) {
    return;
  }
  let url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${userInp}&app_id=d09318a2&app_key=c4d5edd2551e343b96358250d0f75a0f`;

  if (
    dietCheckedRes != null ||
    dietCheckedRes != '' ||
    dietCheckedRes != undefined
  ) {
    url += '&diet=' + dietCheckedRes;
  }
  if (
    allergiescheckedRes != null ||
    allergiescheckedRes != '' ||
    allergiescheckedRes != undefined
  ) {
    url += '&health=' + allergiescheckedRes;
  }
  if (
    cuisineCheckedRes != null ||
    cuisineCheckedRes != '' ||
    cuisineCheckedRes != undefined
  ) {
    url += '&cuisineType=' + cuisineCheckedRes;
  }
  if (
    mealCheckedRes != null ||
    mealCheckedRes != '' ||
    mealCheckedRes != undefined
  ) {
    url += '&&mealType=' + mealCheckedRes;
  }

  console.log(url);
}

searchBtn.addEventListener('click', searchInputHandler);
