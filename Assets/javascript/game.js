//set variables
var wins = 0
var losses = 0
var guesses = 10
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
/// define functions



function computerChoice() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

var computerChoiceResult = computerChoice();

console.log(computerChoiceResult)

 function updateWins() {
   document.querySelector("#wins").innerHTML="Wins: " + wins;
 }
 function updateLosses() {
   document.querySelector("#losses").innerHTML="Losses: " + losses;
 }
 function updateGuesses() {
   document.querySelector("#guesses").innerHTML="Guesses: " + guesses;
 }
 function guessedLetters() {
   document.querySelector("#guessedLetters").innerHTML="Letters guessed already: " + guessedLetters;
 }
function reset() {
  guesses= 10;
  computerChoice();
  computerChoiceResult = computerChoice();
  console.log(computerChoiceResult);
}

// main process
updateWins();
updateLosses();
updateGuesses();
//starts the game
document.onkeyup = function(event) {
  var userInput = event.key
guessedLetters.push(userInput);
document.querySelector("#guessedLetters").innerHTML="Letters guessed already: " + guessedLetters;

// if the letters match
if (userInput === computerChoiceResult) {
  alert("Correct! Your powers are growing!")
  wins ++;
  updateWins();
  updateGuesses();
  reset();
}
// if the letters don't match
else {
  guesses --;
  updateGuesses();
  //if guesses go to zero
    if(guesses <= 0){
      alert("I guess you're just a muggle after all");
      losses++ ;
      updateLosses();
      guesses= 10;
      updateGuesses();
      reset();
      }
    }
  };
