// define HTMl Static Selectors
var drinksEl = document.querySelector("#drinks");
var drinksFormEl = document.querySelector("#drinksForm");
// Current Searched drink cards selectors
var drinkCard1El = document.querySelector("#drinkCard1");
var drinkCard2El = document.querySelector("#drinkCard2");
var drinkCard3El = document.querySelector("#drinkCard3");
var drinkCard4El = document.querySelector("#drinkCard4");
var drinkCard5El = document.querySelector("#drinkCard5");
// ingredients selectors
var ingredients1El = document.querySelector("#ingredients1");
var ingredients2El = document.querySelector("#ingredients2");
var ingredients3El = document.querySelector("#ingredients3");
var ingredients4El = document.querySelector("#ingredients4");
var ingredients5El = document.querySelector("#ingredients5");
// instructions selectors
var instructions1El = document.querySelector("#instructions1");
var instructions1El = document.querySelector("#instructions2");
var instructions1El = document.querySelector("#instructions3");
var instructions1El = document.querySelector("#instructions4");
var instructions1El = document.querySelector("#instructions5");

// fuunction to display drinks
function displyDrinks(event) {
    event.preventDefault();
    var drinksName = drinksEl.value

    //call populate data function with api below
    populateData(drinksName);
};

function populateData(drinksName) {
    var urlMargs = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    fetch(urlMargs)
        .then(function(response){
            return response.json();
        }) 
        .then(function(currentData) {
            console.log(currentData)
            drinkCard1El.innerHTML = currentData.drinks[0].strDrink


        })

}








// add EventListerner
drinksFormEl.addEventListener("submit",displyDrinks)