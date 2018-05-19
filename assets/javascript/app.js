$(document).ready(function() {


//An array of the correct answers from each question
var Answers = ["Giselle", "Houston", "Star Search", "Lemonade", "false", "Crazy In Love", "Twice", "She was pregnant"]

var userGuesses = []

var correctAnswers = 0
var incorrectAnswers = 0
var unAnswered = 0
var timeRemaining = 65;
var intervalId; 
var userGuesses = []

})

//When user clicks the start button, this function will happen
//The start button and jumbotron will hide
//The timer of 65 seconds will begin to deplete

$("#start-button").click(function() {
  $("#start-button").hide();
  $(".jumbotron").hide();
 


  //The questions and answer choices within the wrapper will be hidden until user clicks on the start button



 //Create a for loop that goes through each answer choice the user picks 

 //Every incorrect answer with push to the userGuesses Array



//If the user answer each question within the alloted time they can press the submit button


//If time remaining equals 0 and user hasn't pressed submit alert Times Up!

//Show a screen that shows the game is over and how many questions the user got correct, incorrect, or left unanswered



})