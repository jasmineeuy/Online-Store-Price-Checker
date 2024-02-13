//alert("checking");

// info gathered from user question
let itemName = prompt("Enter the name of the item:");
//console.log(itemName);
let basePrice = Number(prompt(`What is the base price of ${itemName}?`));
//console.log(basePrice);
let today = prompt('Is today "Black Friday"? Answer yes or no.');
//console.log(today);
let searchEngine = prompt(
  `Did you find the ${itemName} through a search engine ? Answer yes or no.`
);
//console.log(searchEngine);
console.log(typeof basePrice);
let comparisonShopping = prompt(
  "Did you visit a comparison-shopping price?Answer yes or no."
);
//console.log(comparisonShopping);

// variable
let finalPrice = Number(basePrice);
let message = "";

if (today.toLowerCase().trim() === "yes") {
  message += "Since it's black friday, we will reduce the price by 25%.";
  finalPrice -= finalPrice * 0.25;
  //console.log(finalPrice);
} else {
  message += "It's not Black Friday, so the price did not change for that.";
}
if (searchEngine.toLowerCase().trim() === "yes") {
  message += "We will increase the price by 1% to pay the search engine.";
  //console.log((finalPrice += finalPrice * 0.01));
} else {
  message +=
    "The customer did not use a search engine, so the price did not change for that.";
}

if (comparisonShopping.toLowerCase().trim() === "yes") {
  message +=
    "Since the customer visited a comparison-shopping site we will reduce the price by 10%.";
  //console.log((finalPrice -= finalPrice * 0.1));
} else {
  message +=
    "The customer did not visit a comparison-shopping site , so the price didn't change for that. ";
}
console.log((message += `The final price is ${finalPrice.toFixed(2)}.`));
//console.log(finalPrice.toFixed(2));

//check if item for price is number
//check if answer is yes or no if not try again
// if conditionals to check question
//tired to add num check
// if (basePrice === 0) {
//   finalPrice = Number(
//     prompt(
//       `You did not enter a number. Please enter a number.What is the base price of ${itemName}?`
//     )
//   );
//   console.log("number" + basePrice);
// }
