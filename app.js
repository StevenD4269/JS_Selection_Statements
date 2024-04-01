console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// exercise 1
let favNum = 42;
//  let favNum = Math.floor(Math.random() *100); for a random number
inputNum = window.prompt("Input a number");
let userNumber = parseInt(inputNum);
if (userNumber < favNum) {
  console.log("Too low");
} else if (userNumber > favNum) {
  console.log("Too high");
} else console.log("Congratulations");

// Exercise 2
// Prompt the user to input their birth month
// 1. Make a variable ask a question
// 2. make it lowercase
// 3. declare a variable for all of them that is the season
// 4. Switch case allows you to compare a variable or expression against multiple possible values
// 5. A switch case is just switch (variable) {state each case} break;
let birthMonth = window.prompt("What is your birth month?");
birthMonth = birthMonth.toLowerCase();
let season;
switch (birthMonth) {
  case "january":
  case "february":
  case "december":
    season = "winter";
    break;
  // break is used to terminate the execution of the switch statement
  case "march":
  case "april":
  case "may":
    season = "spring";
    break;
  case "june":
  case "july":
  case "august":
    season = "summer";
    break;
  case "september":
  case "october":
  case "november":
    season = "autumn";
    break;
  // the final else statement is basically "default"
  default:
    console.log("Please enter a valid month name.");
    break;
}
// If they answer a correct case it will show this
if (season) {
  console.log("You were born in the " + season + " season.");
}

// exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";
type = type.toLowerCase();
color = color.toLowerCase();
size = size.toLowerCase();

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
