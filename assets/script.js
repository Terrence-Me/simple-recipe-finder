const searchBtn = document.getElementById('button-addon2');
const searchInput = document.getElementById('search-input');
const dietCheckboxes = document.getElementById('diet');
const allergiesCheckboxes = document.getElementById('allergies');
const cuisineCheckboxes = document.getElementById('cuisine-type');
const mealCheckboxes = document.getElementById('meal-type');
const mealCard = document.getElementById('meal-card');
const mealCardLink = document.querySelector('.meal-card_link');

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

  consolidateUrl(userInput);
}

function consolidateUrl(userInp) {
  if (!userInp) {
    return;
  }
  let url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${userInp}&app_id=d09318a2&app_key=c4d5edd2551e343b96358250d0f75a0f`;

  if (
    dietCheckedRes != null ||
    dietCheckedRes != '' ||
    dietCheckedRes != undefined
  ) {
    url += '&diet=' + dietCheckedRes.join('&');
  }
  if (
    allergiescheckedRes != null ||
    allergiescheckedRes != '' ||
    allergiescheckedRes != undefined
  ) {
    url += '&health=' + allergiescheckedRes.join('&');
  }
  if (
    cuisineCheckedRes != null ||
    cuisineCheckedRes != '' ||
    cuisineCheckedRes != undefined
  ) {
    url += '&cuisineType=' + cuisineCheckedRes.join('&cuisineType=');
  }
  if (
    mealCheckedRes != null ||
    mealCheckedRes != '' ||
    mealCheckedRes != undefined
  ) {
    url += '&mealType=' + mealCheckedRes.join('&mealType=');
  }

  console.log(url);
  getUrl(url);
}

function getUrl(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      buildCards(data);
    });
}

function buildCards(data) {
  console.log(data);
  mealCard.innerHTML = data.hits
    .map((item, index) => {
      return ` <div class="card m-4 p-1 card-res">
          <img src=${item.recipe.images.THUMBNAIL.url}
              class="card-img-top" alt="">
          <div class=" card-body card-body_title">
              <h5 class="card-title card-title_name">${item.recipe.label}</h5>
          </div>
          <div class="card-body d-flex card-body_links">
              <a href="recipe.html" class="card-link">Recipe Information</a>
              
          </div>
      </div>`;
    })
    .join(' ');
  localStorage.setItem('currentSearch', JSON.stringify(data));
}

function clikedLinkHandler(e) {
  if (e.target.tagName.toLowerCase() === 'a') {
    let clickedRecipe =
      e.target.parentElement.parentElement.children[1].textContent.trim();
    console.log(clickedRecipe);
    localStorage.setItem('clickedRecipe', JSON.stringify(clickedRecipe));
  } else {
    return;
  }
  console.log(e.target);
}

mealCardLink.addEventListener('click', clikedLinkHandler);
searchBtn.addEventListener('click', searchInputHandler);
