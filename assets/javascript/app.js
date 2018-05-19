//List of correct answers to the questions
var Answers = ["Giselle", "Houston", "Star Search", "Lemonade", "false", "Crazy In Love", "Twice", "She was pregnant"]

//Create an array of user guesses 

var userGuesses = []

var correctAnswers = 0
var incorrectAnswers = 0

$(document).ready(function () {
  $("#start-button").click(function () {
   


  })
  
  
  $(".ANS").click(function () {
    var userChoice = $(this).text().trim()
    userGuesses.push(userChoice)

    console.log(userGuesses);

  })


  // Hide the questions until the user click on the start button - jQuery hide method
  $(".wrapper").click(function() {
    

  })

  //If the user answers each question within the time frame they are able to submit their choices 
  $("#submit-button").click(function () {
    

    for (var i = 0; i < correctAnswer.length; i++) {
      if (userChoice[i] === correctAnswer[i]) {
        correctAnswers++
      }
     else(userChoice[i] !== correctAnswer[i]) 
        incorrectAnswers++

    }

    function resetGame(){
      
    }

  });

});

//Create the time interval for the quiz
