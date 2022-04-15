const searchBtn = document.getElementById('button-addon2');
const searchInput = document.getElementById('search-input');
const dietCheckboxes = document.getElementById('diet');
const allergiesCheckboxes = document.getElementById('allergies');
const cuisineCheckboxes = document.getElementById('cuisine-type');
const mealCheckboxes = document.getElementById('meal-type');

function searchInputHandler(e) {
  e.preventDefault();
  let userInput = searchInput.value.trim();
  console.log(userInput);
  let dietCheckedRes = [];
  let allergiescheckedRes = [];
  let cuisineCheckedRes = [];
  let mealCheckedRes = [];

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
    let checked = input.value;

    dietCheckedRes.push(checked);
    console.log(dietCheckedRes);
  });

  allergiesChecked.forEach((input) => {
    let checked = input.value;

    allergiescheckedRes.push(checked);
    console.log(allergiescheckedRes);
  });

  cuisineChecked.forEach((input) => {
    let checked = input.value;

    cuisineCheckedRes.push(checked);
    console.log(cuisineCheckedRes);
  });

  mealChecked.forEach((input) => {
    let checked = input.value;

    mealCheckedRes.push(checked);
    console.log(mealCheckedRes);
  });
}

searchBtn.addEventListener('click', searchInputHandler);
