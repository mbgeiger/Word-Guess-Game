var $newGameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placeholders');
var $lettersGuessed = document.getElementById('letters-guessed');
var $wins = document.getElementById('wins');
var $remainingGuesses = document.getElementById('remaining-guesses');












//list of words for the computer to choose from
var drinks = [
    "xyience", "monster", "redbull", "bang", "redline", "nos", "full throttle", "rockstar", "amp", "five hour", "jolt"
]


//random words for the computer to choose
var chooseDrink = function(drinks) {
    return drinks[Math.floor(Math.random() * drinks.length)];
}
console.log()


//array of letters that the users has chosen

var userAnswers = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]


var answerArray = [];
for (var i = 0; i < chooseDrink.length i++) {
    answerArray[i] = "_";
}

var lettersRemain = chooseDrink.length;

//loop for the game
while (lettersRemain > 0) {
    alert(userAnswers.join(" "));


//collect user input for guess
var userGuess = prompt("Guess a letter, or click Cancel to stop playing.");
 if (userGuess === null) {
 // Exit the game loop
 break;
 } else if (userGuess.length !== 1) {
 alert("Please enter a single letter.");
 } else {
 // Update the game state with the guess
 for (var j = 0; j < chooseDrink.length; j++) {
 if (chooseDrink [j] === userGuess) {
 answerArray[j] = userGuess;
 lettersRemain--;
 }
 }
 }
}
