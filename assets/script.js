const searchBtn = document.getElementById('button-addon2');
const searchInput = document.getElementById('search-input');

function searchInputHandler(e) {
  e.preventDefault();
  let userInput = searchInput.value.trim();

  if (!searchInput) {
    console.log('input search location');
    return;
  }

  console.log(userInput);
}

searchBtn.addEventListener('click', searchInputHandler);
