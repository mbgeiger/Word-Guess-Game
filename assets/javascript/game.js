/*all game variables
var $newGameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placeholders');
var $lettersGuessed = document.getElementById('letters-guessed');
var $wins = document.getElementById('wins');
var $remainingGuesses = document.getElementById('remaining-guesses');*/













//variables for the game
var drinks = [
    "xyience", "monster", "redbull", "bang", "redline", "nos", "full throttle", "rockstar", "amp", "five hour", "jolt"
];

var wins = 0;
var remainingGuesses = 0;
var correctGuess = [];
var lettersGuessed = [];
var pickedWord = '';
var gameRunning = false;
var pickedWordArr = [];

//start a new game
function newGame() {
    //reset existing game
    var gameRunning = true;
    var wins = 0;
    var correctGuess = [];
    var lettersGuessed = [];
    var pickedWordArr = [];




//random words for the computer to choose
pickedWord = drinks[Math.floor(Math.random() * drinks.length)];
//create place holders for word
for (var i = 0; 1 < pickedWord.length; i++) {
    if (pickedWord[i] === ' ') {
        pickedWordArr.push(' ');
    }
    else {
        pickedWordArr.push('_');
    
    }
     

    
    $remainingGuesses.textContent = remainingGuesses;
    $placeholders.textContent = pickedWordArr.join('');
    $lettersGuessed.textContent = lettersGuessed;
}
}
console.log(newGame)

//incorrect guess function
function lettersGuessed(letters){

    console.log(letters);

    if (gameRunning === true && correctGuess.indexOf(letters) === -1){
// run game logic
lettersGuessed.push(letters);

//check to see if guess is in picked word
for (var i = 0; i < pickedWord.length; i++){

    //convert values to lowercase for comparison
    if (pickedWord[i].toLowerCase() === letters.toLowerCase()){
        //if matches than swap character in place holder to letter
        pickedWordArr[i] === pickedWord[i];
    }
}

    }
    else {
        if (!gameRunning){
            alert('game not running and click new game to start');
        
        }
        else {
            alert ("you have already guessed the letter!  Pick a new letter")
        }
    }
}
console.log(lettersGuessed);


//add event listen for start game
newGameButton.addEventListener('click', newGame);
