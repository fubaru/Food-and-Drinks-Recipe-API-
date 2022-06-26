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
var recipecardEl = document.querySelector("#recipeCard");
// var recipecard1El = document.querySelector("#recipeCard1");
// var recipecard2EL = document.querySelector("#recipeCard2");
// var recipecard3EL = document.querySelector("#recipeCard3");
// var ingredients1EL = document.querySelector("#ingredients1");
// var ingredients2EL = document.querySelector("#ingredients2");
// var ingredients3EL = document.querySelector("#ingredients3");
// var instructions1EL = document.querySelector("#instructions1");
// var instructions2EL = document.querySelector("#instructions2");
// var instructions3EL = document.querySelector("#instructions3");
var number1EL = document.querySelector("#number1");
var number2EL = document.querySelector("#number2");
var number3EL = document.querySelector("#number3");
var image1El = document.querySelector("#image1");
var recipesBtn = document.querySelector("#button-recipes");
/*------------End of Global Variables-------------*/
function populateMeal(meal) {
    recipecardEl.innerHTML = `<div class="group relative">
    <div
        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src="${meal.strMealThumb}"
            alt="Front of men&#039;s Basic Tee in black."
            class="w-full h-full object-center object-cover lg:w-full lg:h-full">
    </div>
    <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${meal.strMeal}</span>
            </h3>
            <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
            <h3>Ingredients</h3>
            <ol>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
            <li>${meal.strIngredient7}</li>
            <li>${meal.strIngredient8}<l/i>
            </ol>
            </p>
            <p class="mt-1 text-sm text-gray-500" id="instructions1">${meal.strInstructions}
            </p>
        </div>
    </div>
</div>`;
}
function populateData1() {
  var recipe = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
  var recipeposition = recipecardEl.getBoundingClientRect().top;
  fetch(recipe)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipeData) {
      
      console.log(recipeData);
      var meal = recipeData.meals[0]
      populateMeal(meal);
      storeMeal(meal);
      
      window.scrollTo({ top: recipeposition, left: 0, behavior: "smooth" });
    });
}
function populateMeal(meal) {
  recipecardEl.innerHTML = `<div class="group relative">
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="${meal.strMealThumb}"
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
          <div>
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${meal.strMeal}</span>
              </h3>
              <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
              <h3>Ingredients</h3>
              <ol>
              <li>${meal.strIngredient1}</li>
              <li>${meal.strIngredient2}</li>
              <li>${meal.trIngredient3}</li>
              <li>${meal.strIngredient4}</li>
              <li>${meal.strIngredient5}</li>
              <li>${meal.strIngredient6}</li>
              <li>${meal.strIngredient7}</li>
              <li>${meal.strIngredient8}</li>
              <li>${meal.strIngredient9}</li>
              </ol>
              </p>
              <p class="mt-1 text-sm text-gray-500" id="instructions1">${meal.strInstructions}
              </p>
          </div>
      </div>
  </div>`;
}
function populateData2(){  
  var recipe = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
  var recipeposition = recipecardEl.getBoundingClientRect().bottom;
  fetch(recipe)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipeData) {
      console.log(recipeData);
      
      var meal = recipeData.meals[0]
      populateMeal(meal);
      storeMeal(meal);
      
      window.scrollTo({ top: recipeposition, left: 0, behavior: "smooth" });
    });
}
function populateMeal(meal) {
  recipecardEl.innerHTML = `<div class="group relative">
  <div
      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <img src="${meal.strMealThumb}"
          alt="Front of men&#039;s Basic Tee in black."
          class="w-full h-full object-center object-cover lg:w-full lg:h-full">
  </div>
  <div class="mt-4 flex justify-between">
      <div>
          <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0" id="recipeCard1">${meal.strMeal}</span>
          </h3>
          <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
          <h3>Ingredients</h3>
          <ol>
          <li>${meal.strIngredient1}</li>
          <li>${meal.strIngredient2}</li>
          <li>${meal.trIngredient3}</li>
          <li>${meal.strIngredient4}</li>
          <li>${meal.strIngredient5}</li>
          <li>${meal.strIngredient6}</li>
          <li>${meal.strIngredient7}</li>
          <li>${meal.strIngredient8}</li>
          <li>${meal.strIngredient9}</li>
          </ol>
          </p>
          <p class="mt-1 text-sm text-gray-500" id="instructions1">${meal.strInstructions}
          </p>
      </div>
  </div>
</div>`;
}
function populateData3() {
  var recipe = `https://www.themealdb.com/api/json/v1/1/random.php`;
  var recipeposition = recipecardEl.getBoundingClientRect().top;
  fetch(recipe)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipeData) {
      console.log(recipeData);
      
      var meal = recipeData.meals[0]
      populateMeal(meal);
      storeMeal(meal);
      
      window.scrollTo({ top: recipeposition, left: 0, behavior: "smooth" });
    });
}

var storeMeal= function (meal) {
  meals.unshift(meal);
  localStorage.setItem("meals", JSON.stringify(meals));
};
function getPastMeals() {
var recipe = JSON.parse(localStorage.getItem("meals"))
if (recipe != null) {
  meals = recipe;
}
}
function displayPastMeals() {
  getPastMeals();
  if (meals.length < 1) 
    return ;
   var recentMeal = meals[0];
  
  // localStorage.setItem("meals", JSON.stringify(""));
  // var recipeData = JSON.parse(localStorage.getItem("meals"));
  // console.log(recipeData);
  // if (recipeData) {
  //   meals = recipeData;
  // }
  // var lastIndex = meals.length - 1;
  /*populatePastMeals(meals[lastIndex]);*/
}
displayPastMeals();


/*-----All EventListeners--------*/
recipesBtn.addEventListener("click", populateData1);
recipesBtn.addEventListener("click", populateData2);
recipesBtn.addEventListener("click", populateData3);
recipecardEl.addEventListener("click", populateData1);
recipecardEl.addEventListener("click", populateData2);
recipecardEl.addEventListener("click", populateData3);
number1EL.addEventListener("click", populateData1);

number2EL.addEventListener("click", populateData2);

number3EL.addEventListener("click", populateData3);

