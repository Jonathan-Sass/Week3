/*
Function called pizzaOven(crustType, sauceType, cheeses, toppings) that returns Javascript(Pizza) Object.
Pizza with: deep dish, traditional [mozzarella], and [pepperoni, sausage]
Pizza with: hand tossed, marinara, [mozzarella, feta] and [mushrooms, olives, onions]
2 more pizzas with any toppings we like!
Pizza 3: calzone, marinara, [mozzarella], [pineapple, jalapenos, sausage]
Pizza 4: hand tossed, pesto, [mozzarella, feta], [pepperoni, tomato, ]
Bonus: Create a function called randomPizza using Math.random() to create a random pizza.
*/

// pizzaOven function will build a pizza from 
// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }

// //Making pizzas
// console.log (pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]));
// console.log (pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));
// console.log (pizzaOven("calzone", "marinara", ["mozzarella"], ["pineapple", "jalapeno", "sausage"]));
// console.log (pizzaOven("hand tossed", "pesto", ["mozzarella", "feta"], ["pepperoni", "tomato"]));

// //Start of randomPizza
// //Randomly generate a topping or toppings for each 

// //Declaring options for each parameter
let crustOptions = ["deep dish", "hand tossed", "calzone", "thin crust"];
let sauceOptions = ["olive oil", "traditional", "marinara", "pesto"];
let cheeseOptions = ["mozzarella", "feta", "cheddar", "goat", "parmesan"];
let toppingOptions = ["onion", "mushroom", "olive", "peppers", "jalapenos", "arugula", "sausage", "pepperoni", "prosciutto", "pineapple", "artichoke hearts", "tomato", ]

function randomPizza() {
    
    //cheeseSelector first randomly selects the number of cheeses based on the number of options in the array
    function cheeseSelector() {
        let cheeseSelection = [];
        let numberOfCheeses = Math.floor(Math.random() * (cheeseOptions.length) + 1);
        //Adds the cheese options to the array
        for (let i = 1; i <= numberOfCheeses; i++) {
            cheeseSelection.push(cheeseOptions[Math.floor(Math.random() * (cheeseOptions.length - 1))]);
        }
        return cheeseSelection;
    }
        //I tried to get fancy by also randomly selecting the number of toppings and cheeses to go on the pizza.  

        //It would be nice to add another feature to parse through the selection and reselect redundant options... 
        //I think this could be done with another nested for and if... and probably some other simpler way as well.  
    function toppingSelector() {
        let toppingSelection = [];
        let numberOfToppings = Math.floor(Math.random() * (toppingOptions.length) + 1);
        //Adds the topping options to the array
        for (let i = 1; i <= numberOfToppings; i++) {
                toppingSelection.push(toppingOptions[Math.floor(Math.random() * (toppingOptions.length - 1))]);
        }
        return toppingSelection;
    }

    let pizza = {};
    pizza.crustType = crustOptions[Math.floor(Math.random() * (crustOptions.length - 1))];
    pizza.sauceType = sauceOptions[Math.floor(Math.random() * (sauceOptions.length - 1))];
    pizza.cheeses = cheeseSelector();
    pizza.toppings = toppingSelector();
    
    return pizza;
}

console.log(randomPizza());