// define HTMl Static Selectors
var drinksEl = document.querySelector("#drinks");
var margsBtn = document.querySelector("#margs");
var blueMargsBtn = document.querySelector("#blueMargs");
var tommyMargsBtn = document.querySelector("#tommyMargs");
var whitecapMargsBtn = document.querySelector("#whitecapMargs");
var strawbMargsBtn = document.querySelector("#strawbMargs");
var selectEl = document.querySelector("#select")
// var drinksFormEl = document.querySelector("#drinksForm");
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
// function displyDrinks() {
//     // event.preventDefault();
//     // var drinksName = drinksEl.value

//     //call populate data function with api below
//     populateData(drinksName);
// };

function populateData(event) {
    // URl for cocktail api
    var urlMargs = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.textContent}`
    console.log(event.target.textContent)
    // var drink1Position = drinkCard1El.getBoundingClientRect().top
    fetch(urlMargs)
        .then(function(response){
            return response.json();
        }) 
        .then(function(currentData) {
            console.log(currentData);
            // var margsVal = event.target.textContent
            // var blueMargsVal = event.target.textContent
            // console.log(blueMargsVal)
            // var tommyMargsVal = currentData.drinks[2].idDrink
            // var whitecapMargsVal = currentData.drinks[3].idDrink
            // var strawbMargsVal = currentData.drinks[4].idDrink
            // for (i=0; i < currentData.drinks.length; i++) {
                selectEl.innerHTML =`<div class="group relative">
                <div
                    class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src="${currentData.drinks[0].strDrinkThumb}"
                        alt="Front of men&#039;s Basic Tee in black."
                        class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0" id="drinkCard1">${currentData.drinks[0].strDrink}</span>
                        </h3>
                        <p class="mt-1 text-sm font-medium text-gray-500" id="ingredients1">
                            <ol>
                                <li>${currentData.drinks[0].strIngredient1}</li>
                                <li>${currentData.drinks[0].strIngredient2}</li>
                                <li>${currentData.drinks[0].strIngredient3}</li>
                                <li>${currentData.drinks[0].strIngredient4}</li>
                            </ol>
                        </p>
                        <p class="mt-1 text-sm text-gray-500" id="instructions1">${currentData.drinks[0].strInstructions}
                        </p>
                    </div>
                </div>
            </div>`
            // var tommyMargsVal = currentData.drinks[2].idDrink
            // var whitecapMargsVal = currentData.drinks[3].idDrink
            // var strawbMargsVal = currentData.drinks[4].idDrink
            // if(margsVal) {
            //     drinkCard1El.textContent = currentData.drinks[0].strDrink;
            //     ingredients1El.textContent = "Ingredients: " + currentData.drinks[0].strIngredient1 + ", " + currentData.drinks[0].strIngredient2
            // } else if (blueMargsVal) {
            //     drinkCard1El.textContent = currentData.drinks[1].strDrink;
            //     ingredients1El.textContent = "Ingredients: " + currentData.drinks[1].strIngredient1 + ", " + currentData.drinks[1].strIngredient2
            // }

            // }
            



            // // drinkCArd1
            // drinkCard1El.textContent = currentData.drinks[0].strDrink;
            // ingredients1El.textContent = "Ingredients: " + currentData.drinks[0].strIngredient1 + ", " + currentData.drinks[0].strIngredient2

            // // drinkCard2
            // drinkCard2El.innerHTML = currentData.drinks[1].strDrink;
            // ingredients2El.textContent = "Ingredients: " + currentData.drinks[1].strIngredient1 + ", " + currentData.drinks[1].strIngredient2



            console.log(drinkCard1El);
            // drinkCard1El.scrollTo({top:0, left:0, behavior:"smooth"});
            // window.scrollTo({top:drink1Position, left:0, behavior:"smooth"})
        })

}








// add EventListerner
// drinksFormEl.addEventListener("click",populateData)
margsBtn.addEventListener("click",populateData);
blueMargsBtn.addEventListener("click",populateData);
tommyMargsBtn.addEventListener("click",populateData);
whitecapMargsBtn.addEventListener("click",populateData);
strawbMargsBtn.addEventListener("click",populateData);