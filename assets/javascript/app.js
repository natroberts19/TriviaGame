$(document).ready(function () {

    // Create global variables.
    var correctAnswers = 0;
    console.log(correctAnswers);
    var incorrectAnswers = 0;
    console.log(incorrectAnswers);
    var position = 0;
    console.log(position);
    var timer = 21;
    var intervalId;

    // Create Questions and Answers.
    var questions = {
        question1: ["The directorial debut for the Coen Brothers was:", "Raising Arizona", "Fargo", "Blood Simple", "Barton Fink", 3],
        question2: ["Which of the following Coen Brothers movies won the Oscar for Best Picture?", "Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit", 2],
        question3: ["Joel Coen is married to which of the following actresses?", "Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis", 2],
        question4: ["Which Coen Brothers movie is loosely based on Homer's Odyssey?", "Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona", 3],
        question5: ["Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?", "George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi", 4],
        question6: ["Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:", "Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men", 1],
        question7: ["Brad Pitt's only appearance in a Coen Brothers movie features his portrayal of a goofy fitness trainer in:", "Inside Llewyn Davis", "Burn After Reading", "Raising Arizona", "The Big Lebowski", 3],
        question8: ["Jeff Bridges was nominated for a Best Actor Oscar for his Rooster Cogburn character in True Grit; however, his best known and most popular Coen Bros character is The Dude from:", "No Country for Old Men", "O'Brother Where Art Thou", "Burn After Reading", "The Big Lebowski", 4],
        question9: ["This Coen Bros movie was nominated for ten Oscars and came away winning zero:", "No Country for Old Men", "Fargo", "True Grit", "Barton Fink", 3],
        question10: ["The music sountrack from this Coen Bros movie sold over 5 million copies and won 5 Grammy awards:", "O'Brother Where Art Thou", "Hail Caeser!", "True Grit", "The Big Lebowski", 1]
    };
    console.log(questions);

    // Start the game. 
    // 1. Target the game-panel div with a Start Game button.
    $("#button").html("<button> Start Game </button>");
    // 2. Create on-click startGame button and function to start the game.
    $("#button").on("click", function (startGame) {
        // Hide the button.
        $("#button").addClass("hide");
        // Show the question/answer panel.
        $("#question").addClass("show");
        $("#answer").addClass("show");
        // Play the game. 
        // Display a question and its associated choices from the questions object.
        // Display in the #question and #answer divs. 
        // Create on-click functions for the answer choices.
        $("#question").html("<b>" + questions.question1[0] + "</b> <p>");
        $("#answer1").html("<button onclick value=1>" + questions.question1[1] + "</button>")
        $("#answer2").html("<button onclick value=2>" + questions.question1[2] + "</button>");
        $("#answer3").html("<button onclick value=3>" + questions.question1[3] + "</button>");
        $("#answer4").html("<button onclick value=4>" + questions.question1[4] + "</button>");

        checkAnswer();
    });

    // Create a checkAnswer function to check and store what answer the user clicked.
    function checkAnswer() {
        for (j = 0; 1 < questions.question1.length; j++) {
            // a. If CORRECT choice is made, stop the timer, display a correct message (Call the pageTimer function.)
            // b. Advance to the next question.
            // c. Restart the timer. (Call the gameTimer function.)
            if (questions.question1[5] === value && timer > 0) {
                // stop the gameTimer
                clearInterval(intervalId);
                // add a correct answer to the tally
                correctAnswers++;
                // display "Correct!" message in #message div
                $("#message").addClass("show");
                $("#message").html("<b> Correct! </b>");
                // run the pageTimer delay         
                pageTimer();
                // go to next question 
                nextQuestion();
                $("#message").addClass("hide");
                $("#fun-fact").addClass("hide");
                // start the game timer
                gameTimer();
            }

            // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
            // e. Advance to the next question.
            // f. Restart the timer. (Call the gameTimer function.)
            else if (questions.question1[5] != value && timer > 0) {
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
                gameTimer();
            }
            // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
            // h. Advance to the next question.
            // i. Restart the timer. (Call the gameTimer function.)
            else(timer === 0); {
                // add an incorrect answer to the tally
                incorrectAnswers++;
                // display "Incorrect!" message in #message div
                $("#message").addClass("show");
                $("#message").html("<b> Incorrect! </b>");
                // ** Need to show correct answer.
                pageTimer();
                nextQuestion();
                $("#message").addClass("hide");
                gameTimer();

            }
        }
    }

    // Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. 
    intervalId = setInterval(gameTimer, 1000);

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

    function pageTimer() {
        setTimeout(function () {
            i++;
            if (i < 10) {
                pageTimer();
            }
        }, 5000)
    }

    // End the game.
    // A summary page appears after the last question.
    // If correctAnswers + incorrectAnswers = 10..
    //     $("#question").addClass("show");
    //     $("#answer").addClass("show");
    //     $("#new-button").addClass("show");

    // // This page displays the number of correct and incorrect answers. Also provides a button to start a new game.
    //     // 1. Display number of correct and incorrect answers.
    //     $("#question").html("<b>Your Game Totals: </b>");
    //     $("#answer").html("Correct Answers: " + correctAnswers + "<p>Incorrect Answers: " + incorrectAnswers)

    //     // 2. Target the game-panel div with a Start New Game button.
    //     $("#new-button").html("<button> Start New Game </button>"); 
    //     // 3. Create on-click startNewGame function to start a new game.
    //     $("#new-button").on("click", function (startNewGame) {
    //     //  ??????   //   
    //     // Hide the button.
    //     $("#new-button").addClass("hide");
    //     // Show the question/answer panel.
    //     // $("#question").addClass("show");
    //     // $("#answer").addClass("show");
    //     // $("#question").html("Just some text for now.");
    //     })
    // ??????? //

});