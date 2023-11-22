"use strict"

let topActivity = "lego";
let activityGuess = prompt("What is my favorite activity?");
let normalizedActivityGuess = activityGuess.toLowerCase();
let rightAnswers = 0;
console.log(normalizedActivityGuess);

function lego() {
if (normalizedActivityGuess === "lego" ) {
    console.log("Exactly, plus you spelled it right!");
    
    

    alert("That's right ! " + normalizedActivityGuess + " Is my favorite activity.");
    rightAnswers++;
}

else {
    
    console.log("Incorrect");
    alert("That might be fun, but it is not my top activity.")
    rightAnswers--;
}
}

lego();

function beverageChoice(){
let coffeeGuess = prompt('Do I like coffee?');
    coffeeGuess = coffeeGuess.toLowerCase();

    if (coffeeGuess === "yes") {
        alert("Yup, can i have another cup!?"); 
        console.log(coffeeGuess); 
        rightAnswers++;
}   else if (coffeeGuess === "no"){
        alert("Wrong, I love coffee!")
} else  {
    alert("Please guess yes or no.");
}
}

beverageChoice();
  
function rock(){
let rockClimbing = "yes";
let rockGuess = prompt("Do I like rock climbing?")
    rockGuess= rockGuess.toLowerCase();

    switch (rockGuess) {
        case "yes":
        alert("Send it!");
        rightAnswers++;
        break;

        case "no":
            alert("Break out the beta spray!");
            break;
    }
}
rock();
   

function vehicle(){

    carType = prompt("Do I drive a Honda Civic?")
    carType = carType.toLowerCase();

    switch (carType){
        case "yes":
        case "y":
            alert("Who do you think I am??");
            break;
        
        case "no":
        case "n":
            alert("Correct I drive a black truck named Tchalla");
            rightAnswers++;
            break;
    }

}
vehicle();

let kid = ["Sage"];
let kidGuess = prompt("What is the name of my little human?");
let normalizedKidGuess = kidGuess.toLowerCase();
console.log(normalizedKidGuess);

function offspring() {
let rightResponse = false;

while( ! rightResponse ) {
  let guess = prompt("What is the name of my little human");
  if( kid.includes( guess ) ) {
    alert("That's Correct : )");
    rightAnswers++;
    rightResponse = true;
  }
}
}

offspring();


function instruments()
{
for( let i = 1; i < 9; i++ ) {

   let bassNumber = 9;
   let bassTrys = 6;
   let rightAnswer = false;
   let guess = prompt("How many basses do I have?");
   
   while (! rightAnswer && bassTrys >0){
     if (bassNumber === guess) {
        alert("That's right, and no it's not too many!");
        rightAnswer = true;
        rightAnswers++;
     } else {

   if (bassNumber > guess) {
    alert ("Not quite; try again");
    bassTrys--;
   } else {
   if (bassNumber < 9) {
    alert ("Nope! More please!");
    bassTrys--;
   } else {
    alert ("Thanks for playing but you are out of guesses");
   }
   }
}
}
}
}

instruments();

alert ('You scored $[rightAnswers} of 7!');