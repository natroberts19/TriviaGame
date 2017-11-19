$(document).ready(function () {

// Create global variables.
var correctAnswers = 0;
console.log(correctAnswers);
var incorrectAnswers = 0;
console.log(incorrectAnswers);
var timer = 21;
var intervalId;

// Create Questions and Answers as an array of objects.
var questions = [
    {
    Question: "The directorial debut for the Coen Brothers was:",
    Choices: ["Raising Arizona", "Fargo", "Blood Simple", "Barton Fink"],
    Answer: 2,
    FunFact: "The Coens, and many of the cast and crew, had never been on a film set before Blood Simple."
},
    {
    Question: "Which of the following Coen Brothers movies won the Oscar for Best Picture?",
    Choices: ["Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit"],
    Answer: 1,
    FunFact: 'The title of the movie comes from the first line of the William Butler Yeats poem, "Sailing to Byzantium".'
},
    {
    Question: "Joel Coen is married to which of the following actresses?",
    Choices: ["Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis"],
    Answer: 1,
    FunFact: "Frances McDormand and Joel Coen met on the set of Blood Simple in 1984."   
},
    {
    Question: "Which Coen Brothers movie is loosely based on Homer's Odyssey?",
    Choices: ["Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona"],
    Answer: 2,
    FunFact: "Some scenes were filmed at the Mississippi home of former WorldCom CEO Bernie Ebbers, now in prison for fraud."   
},
    {
    Question: "Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?",
    Choices: ["George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi"],
    Answer: 3,
    FunFact: "."   
},
    {
    Question: "Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:",
    Choices: ["Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men"],
    Answer: 0,
    FunFact: "."   
},
    {
    Question: "Brad Pitt's only appearance in a Coen Brothers movie features his portrayal of a goofy fitness trainer in:",
    Choices: ["Inside Llewyn Davis", "Burn After Reading", "Raising Arizona", "The Big Lebowski"],
    Answer: 1,
    FunFact: "."   
},
    {
    Question: "Jeff Bridges was nominated for a Best Actor Oscar for his Rooster Cogburn character in True Grit; however, his best known and most popular Coen Bros character is The Dude from:",
    Choices: ["No Country for Old Men", "O'Brother Where Art Thou", "Burn After Reading", "The Big Lebowski"],
    Answer: 3,
    FunFact: "Jeff Bridges appeared in every single scene of The Big Lebowski."
},
    {
    Question: "This Coen Bros movie was nominated for ten Oscars and came away winning zero:",
    Choices: ["No Country for Old Men", "Fargo", "True Grit", "Barton Fink"],
    Answer: 2,
    FunFact: "."
},
    {
    Question: "The music sountrack from this Coen Bros movie sold over 5 million copies and won 5 Grammy awards:",
    Choices: ["O'Brother Where Art Thou", "Hail Caeser!", "True Grit", "The Big Lebowski"],
    Answer: 0,
    FunFact: "."
},
]
console.log(questions);

// Create a 5-second timeout (or interval?) function named pageTimer for the answer and message displays.


// Create a start page. 
    // 1. Target the game-panel div with a Start Game button.
    $("#button").html("<button> Start Game </button>"); 
    // 2. Create on-click startGame function to start the game.
    $("#button").on("click", function (startGame) {
        // Hide the button.
        $("#button").addClass("hide");
        // Show the question/answer panel.
        $("#question").addClass("show");
        $("#answer").addClass("show");
    // 3. After user clicks Start Game, show the first question and answer choices in the game-panel div.
    $("#question").html("Just some text for now.");
   
    });

    // Create and start interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. 
    intervalId=setInterval(gameTimer, 1000);
    function gameTimer() {
    timer--;
    if (timer === 0) {
        clearInterval(intervalId);
    }
    
    $("#game-timer").html("<h1> Countdown: " + timer + " seconds</h1>");  
    }
    
    // 4. Call the gameTimer function to start the timer in the clock-panel div.

// Display a new question and new answer choices in the #question and #answer divs.
// Create on-click functions for the answer-choice ids. (#answer1, #answer2, #answer3, #answer4)
// Create a checkAnswer function to check what answer was chosen.
    // 1. Store a value of true (correct) or false (incorrect) for each answer choice. 
        // a. If CORRECT choice is made, stop the timer, display a congrats message, and fun fact for 5 seconds. (Call the pageTimer function.)
        // b. Advance to the next question.
        // c. Restart the timer. (Call the gameTimer function.)

        // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
        // e. Advance to the next question.
        // f. Restart the timer. (Call the gameTimer function.)

        // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
        // h. Advance to the next question.
        // i. Restart the timer. (Call the gameTimer function.)

// Create a summary page that appears automatically after the last question.
// This page displays the number of correct and incorrect answers. Also provides a button to start a new game.
    // 1. Target the game-panel div with a Start New Game button.
    $("#new-button").html("<button> Start New Game </button>"); 
    // 2. Create on-click startNewGame function to start a new game.
    $("#new-button").on("click", function (startGame) {
        $("#question").html("Just some new text for now.");
        $("#answer2").html("<b>Correct Answers: </b>" + correctAnswers);
        $("#answer3").html("<b>Incorrect Answers: </b>" + incorrectAnswers);
    
    intervalId=setInterval(gameTimer, 1000);
    function gameTimer() {
    timer--;
    if (timer === 0) {
        clearInterval(intervalId);
    }
    
    $("#game-timer").html("<h1> Time Remaining: " + timer + " seconds</h1>");  
    }
    })
    

});