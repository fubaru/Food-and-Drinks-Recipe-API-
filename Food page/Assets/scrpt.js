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
var recipecard1El = document.querySelector("#recipeCard1");
var recipecard2EL = document.querySelector("#recipeCard2");
var recipecard3EL = document.querySelector("#recipeCard3");
var ingredients1EL = document.querySelector("#ingredients1");
var ingredients2EL = document.querySelector("#ingredients2");
var ingredients3EL = document.querySelector("#ingredients3");
var instructions1EL = document.querySelector("#instructions1");
var instructions2EL = document.querySelector("#instructions2");
var instructions3EL = document.querySelector("#instructions3");
var image1El = document.querySelector("#image1")
var recipesBtn = document.querySelector("#button-recipes");

function populateData(event) {
  var recipe1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
  fetch(recipe1)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipe1Data) {
      console.log(recipe1Data);
      var recipe2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
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
        });
    });

 
}

recipesBtn.addEventListener("click", populateData);


