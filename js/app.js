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
   