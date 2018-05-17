var correctAnswer = ["Giselle", "Houston", "Star", "Lemonade", "false", "Crazy In Love", "Twice", "She was pregnant"]

//Create an array of user guesses 

var userGuesses = []

var wins = 0
var losses = 0

$(document).ready(function () {
  $("#start-button").click(function () {

  })
  $(".ANS").click(function () {
    var userChoice = $(this).text().trim()
    userGuesses.push(userChoice)

    console.log(userGuesses);

  })

  $("#submit-button").click(function () {
    

    for (var i = 0; i < correctAnswer.length; i++) {
      if (userChoice[i] === correctAnswer[i]) {
        wins++
      }
     else(userChoice[i] !== correctAnswer[i]) 
        losses++

    }

  });

});

//Create the time interval for the quiz
