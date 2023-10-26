let topActivity = "Lego";

let activityGuess = "What is my favorite activity?"

let normalizedActivityGuess = activityGuess.toLowerCase();

console.log(activityGuess);


if (normalizedActivityGuess === "lego" ) {
    console.log("Exactly, plus you spelled it right!");

    alert("That's right!" + activityGuess + "Is my favorite activity.");

}

else {
    
    console.log("Incorrect");
    alert("That might be fun, but it is not my top activity. Try again please")
}

