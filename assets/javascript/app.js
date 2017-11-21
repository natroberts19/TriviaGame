$(document).ready(function () {

// Create global variables.
var correctAnswers = 0;
console.log(correctAnswers);
var incorrectAnswers = 0;
console.log(incorrectAnswers);
var timer = 21;
var intervalId;

// Create Questions and Answers as an object.
var questions = [
    {
    Question: "The directorial debut for the Coen Brothers was:",
    Choices: ["Raising Arizona", "Fargo", "Blood Simple", "Barton Fink"],
    Answer: 3,
    FunFact: "The Coens, and many of the cast and crew, had never been on a film set before making Blood Simple."
},
    {
    Question: "Which of the following Coen Brothers movies won the Oscar for Best Picture?",
    Choices: ["Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit"],
    Answer: 2,
    FunFact: 'The title of the movie comes from the first line of the William Butler Yeats poem, "Sailing to Byzantium".'
},
    {
    Question: "Joel Coen is married to which of the following actresses?",
    Choices: ["Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis"],
    Answer: 2,
    FunFact: "Frances McDormand and Joel Coen, now married, met on the set of Blood Simple in 1984."   
},
    {
    Question: "Which Coen Brothers movie is loosely based on Homer's Odyssey?",
    Choices: ["Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona"],
    Answer: 3,
    FunFact: "Some scenes were filmed at the Mississippi home of former WorldCom CEO Bernie Ebbers who is now in prison for fraud."   
},
    {
    Question: "Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?",
    Choices: ["George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi"],
    Answer: 4,
    FunFact: "."   
},
    {
    Question: "Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:",
    Choices: ["Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men"],
    Answer: 1,
    FunFact: "."   
},
    {
    Question: "Brad Pitt's only appearance in a Coen Brothers movie features his portrayal of a goofy fitness trainer in:",
    Choices: ["Inside Llewyn Davis", "Burn After Reading", "Raising Arizona", "The Big Lebowski"],
    Answer: 2,
    FunFact: "."   
},
    {
    Question: "Jeff Bridges was nominated for a Best Actor Oscar for his Rooster Cogburn character in True Grit; however, his best known and most popular Coen Bros character is The Dude from:",
    Choices: ["No Country for Old Men", "O'Brother Where Art Thou", "Burn After Reading", "The Big Lebowski"],
    Answer: 4,
    FunFact: "Jeff Bridges appeared in every single scene of The Big Lebowski."
},
    {
    Question: "This Coen Bros movie was nominated for ten Oscars and came away winning zero:",
    Choices: ["No Country for Old Men", "Fargo", "True Grit", "Barton Fink"],
    Answer: 3,
    FunFact: "."
},
    {
    Question: "The music sountrack from this Coen Bros movie sold over 5 million copies and won 5 Grammy awards:",
    Choices: ["O'Brother Where Art Thou", "Hail Caeser!", "True Grit", "The Big Lebowski"],
    Answer: 1,
    FunFact: "."
},
]
console.log(questions);

// Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. 
intervalId=setInterval(gameTimer, 1000);
function gameTimer() {
timer--;
if (timer === 0) {
    clearInterval(intervalId);
}

$("#game-timer").html("<h1> Countdown: " + timer + " seconds</h1>");  
}

// Create a 5-second timeout loop function named pageTimer for delay on the answer and message displays. 
// (see: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
var i = 1;                   

function pageTimer () {           
   setTimeout(function () {    
      i++;                    
      if (i < 10) {           
         pageTimer();            
      }
   }, 5000)
}

// Start the game. 
    // 1. Target the game-panel div with a Start Game button.
    $("#button").html("<button> Start Game </button>"); 
    // 2. Create on-click startGame function to start the game.
    $("#button").on("click", function (startGame) {
        // Hide the button.
        $("#button").addClass("hide");
        // Show the question/answer panel.
        $("#question").addClass("show");
        $("#answer").addClass("show");
        $("#question").html("Just some text for now.");
    });

// Play the game. 
    // Create a function to display a question and its associated choices from the questions object.
    // Display in the #question and #answer divs. 
    // Create on-click functions for the answer-choice ids. (#answer1, #answer2, #answer3, #answer4)
    $("#answer1").on("click", function () {
        $("#answer1").html("<b>" + questions.Answer + "</b>");
        checkAnswer();
      });

      $("#answer2").on("click", function () {
        $("#answer2").html("<b>" + questions.Answer + "</b>");
        checkAnswer();
      });
      
      $("#answer3").on("click", function () {
        $("#answer3").html("<b>" + questions.Answer + "</b>");
        checkAnswer();
      });

      $("#answer4").on("click", function () {
        $("#answer4").html("<b>" + questions.Answer + "</b>");
        checkAnswer();
      });

    // Create a checkAnswer function to check and store what answer the user clicked.
        // a. If CORRECT choice is made, stop the timer, display a correct message, and fun fact for 5 seconds. (Call the pageTimer function.)
        // b. Advance to the next question.
        // c. Restart the timer. (Call the gameTimer function.)
        
        // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
        // e. Advance to the next question.
        // f. Restart the timer. (Call the gameTimer function.)

        // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
        // h. Advance to the next question.
        // i. Restart the timer. (Call the gameTimer function.)

    function checkAnswer() {
     for (j = 0; 1 < questions.length; j++) {
        if (questions.Answer === 1 && timer > 0) {
        // Stop the gameTimer
        clearInterval(intervalId);
        // add a correct answer to the tally
        correctAnswers++; 
        // display "Correct!" message in #message div
        $("#message").addClass("show");
        $("#message").html("<b> Correct! </b>");
        // display Fun Fact in the #fun-fact span div.
        $("#fun-fact").addClass("show");
        // run the pageTimer delay         
         pageTimer();
        // go to next question 
         nextQuestion();
         $("#message").addClass("hide");
         $("#fun-fact").addClass("hide");
        // start the game timer
         gameTimer();
       }

       else if (questions.Answer > 1 && timer > 0) {
         // Stop the gameTimer
        clearInterval(intervalId);
        // add an incorrect answer to the tally
         incorrectAnswers++;
         // display "Incorrect!" message in #message div
        $("#message").addClass("show");
        $("#message").html("<b> Incorrect! </b>");
        // ** Need to show correct answer.
        pageTimer();
        nextQuestion();
        $("#message").addClass("hide"); 
        $("#fun-fact").addClass("hide");
        gameTimer();
       }

        else (timer === 0); {
         // add an incorrect answer to the tally
         incorrectAnswers++;
         // display "Incorrect!" message in #message div
        $("#message").addClass("show");
        $("#message").html("<b> Incorrect! </b>");
        // ** Need to show correct answer.
        pageTimer();
        nextQuestion();
        $("#message").addClass("hide"); 
        $("#fun-fact").addClass("hide");
        gameTimer();
        
       }
     }  
    }   

// End the game.
    // A summary page appears after the last question.
    // If correctAnswers + incorrectAnswers = 10..
        $("#question").addClass("show");
        $("#answer").addClass("show");
        $("#new-button").addClass("show");

    // This page displays the number of correct and incorrect answers. Also provides a button to start a new game.
        // 1. Display number of correct and incorrect answers.
        $("#question").html("<b>Your Game Totals: </b>");
        $("#answer").html("Correct Answers: " + correctAnswers + "<p>Incorrect Answers: " + incorrectAnswers)

        // 2. Target the game-panel div with a Start New Game button.
        $("#new-button").html("<button> Start New Game </button>"); 
        // 3. Create on-click startNewGame function to start a new game.
        $("#new-button").on("click", function (startNewGame) {
        //  ??????   //   
        // Hide the button.
        $("#new-button").addClass("hide");
        // Show the question/answer panel.
        // $("#question").addClass("show");
        // $("#answer").addClass("show");
        // $("#question").html("Just some text for now.");
        })
         // ??????? //

});