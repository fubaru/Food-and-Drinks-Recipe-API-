/*------toggle navbar-------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  console.log(toggleNav);
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function (event) {
  if (event.target.closest(".nav-item")) {
    toggleNav();
  }
});

/*-------------sticky header--------------*/
window.addEventListener("scroll", function () {
  if (this.scrollY > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});
/*--------------All Global Variabeles------------*/
var meals = [];
var recipecard1El = document.querySelector("#recipeCard1");
var recipecard2EL = document.querySelector("#recipeCard2");
var recipecard3EL = document.querySelector("#recipeCard3");
var ingredients1EL = document.querySelector("#ingredients1");
var ingredients2EL = document.querySelector("#ingredients2");
var ingredients3EL = document.querySelector("#ingredients3");
var instructions1EL = document.querySelector("#instructions1");
var instructions2EL = document.querySelector("#instructions2");
var instructions3EL = document.querySelector("#instructions3");
var number1EL = document.querySelector("#number1");
var number2EL = document.querySelector("#number2");
var number3EL = document.querySelector("#number3");
var image1El = document.querySelector("#image1");
var recipesBtn = document.querySelector("#button-recipes");
/*------------End of Global Variables-------------*/

function populateData1() {
  var recipe1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
  var recipe1position = recipecard1El.getBoundingClientRect().top;
  fetch(recipe1)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipe1Data) {
      console.log(recipe1Data);
      recipecard1El.innerHTML = `<div class="group relative">
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="${recipe1Data.meals[0].strMealThumb}"
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
          <div>
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${recipe1Data.meals[0].strMeal}</span>
              </h3>
              <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
              <h3>Ingredients</h3>
              <ol>
              <li>${recipe1Data.meals[0].strIngredient1}</li>
              <li>${recipe1Data.meals[0].strIngredient2}</li>
              <li>${recipe1Data.meals[0].strIngredient3}</li>
              <li>${recipe1Data.meals[0].strIngredient4}</li>
              <li>${recipe1Data.meals[0].strIngredient5}</li>
              <li>${recipe1Data.meals[0].strIngredient6}</li>
              <li>${recipe1Data.meals[0].strIngredient7}</li>
              <li>${recipe1Data.meals[0].strIngredient8}<l/i>
              </ol>
              </p>
              <p class="mt-1 text-sm text-gray-500" id="instructions1">${recipe1Data.meals[0].strInstructions}
              </p>
          </div>
      </div>
  </div>`;
      /*var recipe2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
      fetch(recipe2)
        .then(function (response) {
          return response.json();
        })
        .then(function (recipe2Data) {
          console.log(recipe2Data);

          var recipe3 = `https://www.themealdb.com/api/json/v1/1/random.php`;
          fetch(recipe3)
            .then(function (response) {
              return response.json();
            })
            .then(function (recipe3Data) {
              console.log(recipe1Data);
              console.log(recipe2Data);
              console.log(recipe3Data);
            });
        });*/
      window.scrollTo({ top: recipe1position, left: 0, behavior: "smooth" });
    });
}
function populateData2() {
  var recipe2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
  fetch(recipe2)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipe2Data) {
      console.log(recipe2Data);
      recipecard2EL.innerHTML = `<div class="group relative">
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="${recipe2Data.meals[0].strMealThumb}"
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
          <div>
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${recipe2Data.meals[0].strMeal}</span>
              </h3>
              <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
              <h3>Ingredients</h3>
              <ol>
              <li>${recipe2Data.meals[0].strIngredient1}</li>
              <li>${recipe2Data.meals[0].strIngredient2}</li>
              <li>${recipe2Data.meals[0].strIngredient3}</li>
              <li>${recipe2Data.meals[0].strIngredient4}</li>
              <li>${recipe2Data.meals[0].strIngredient5}</li>
              <li>${recipe2Data.meals[0].strIngredient6}</li>
              <li>${recipe2Data.meals[0].strIngredient7}</li>
              <li>${recipe2Data.meals[0].strIngredient8}</li>
              <li>${recipe2Data.meals[0].strIngredient9}</li>
              </ol>
              </p>
              <p class="mt-1 text-sm text-gray-500" id="instructions1">${recipe2Data.meals[0].strInstructions}
              </p>
          </div>
      </div>
  </div>`;
    });
}
function populateData3() {
  var recipe3 = `https://www.themealdb.com/api/json/v1/1/random.php`;
  fetch(recipe3)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipe3Data) {
      console.log(recipe3Data);
      recipecard2EL.innerHTML = `<div class="group relative">
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="${recipe3Data.meals[0].strMealThumb}"
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
          <div>
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${recipe3Data.meals[0].strMeal}</span>
              </h3>
              <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
              <h3>Ingredients</h3>
              <ol>
              <li>${recipe3Data.meals[0].strIngredient1}</li>
              <li>${recipe3Data.meals[0].strIngredient2}</li>
              <li>${recipe3Data.meals[0].strIngredient3}</li>
              <li>${recipe3Data.meals[0].strIngredient4}</li>
              <li>${recipe3Data.meals[0].strIngredient5}</li>
              <li>${recipe3Data.meals[0].strIngredient6}</li>
              <li>${recipe3Data.meals[0].strIngredient7}</li>
              <li>${recipe3Data.meals[0].strIngredient8}</li>
              <li>${recipe3Data.meals[0].strIngredient9}</li>
              </ol>
              </p>
              <p class="mt-1 text-sm text-gray-500" id="instructions1">${recipe3Data.meals[0].strInstructions}
              </p>
          </div>
      </div>
  </div>`;
    });
}

var pastMeals = function (event) {
  meals.unshift({ event });
  localStorage.setItem("meals", JSON.stringify(meals));
};

function displayPastMeals() {
  localStorage.setItem("meals", JSON.stringify("arrabiata"));
  var recipeData = JSON.parse(localStorage.getItem("meals"));
  console.log(recipeData);
  if (recipeData) {
    meals = recipeData;
  }
  var lastIndex = meals.length - 1;
  /*populatePastMeals(meals[lastIndex]);*/
}
displayPastMeals();


/*-----All EventListeners--------*/
recipesBtn.addEventListener("click", populateData1);
recipecard1El.addEventListener("click", populateData1);
number1EL.addEventListener("click", populateData1);
recipecard2EL.addEventListener("click", populateData2);
number2EL.addEventListener("click", populateData2);
recipecard3EL.addEventListener("click", populateData3);
number3EL.addEventListener("click", populateData3);
