"use strict";
// Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function makeSandwitch(ingredients) {
    console.log("\nMaking your Sandwitch with:");
    ingredients.forEach(elements => { console.log("- " + elements); });
    console.log("\nEnjoy your Sandwitch !");
}
makeSandwitch(["Peanut butter", "Cheese", "vagies"]);
makeSandwitch(["Grill chiken", "BBQ sauce"]);
makeSandwitch(["eggs", "Beef petty"]);
