$(document).ready(function () {

// Create global variables.
    var correctAnswers = 0;
    console.log("correct answers: " +correctAnswers);
    var incorrectAnswers = 0;
    console.log("incorrect answers: " +incorrectAnswers);
    var userChoice = "";

// Create Questions and Answers.
    var quizQuestions = [
        ["The directorial debut for the Coen Brothers was:", "Raising Arizona", "Fargo", "Blood Simple", "Barton Fink", "C"],
        ["Which of the following Coen Brothers movies won the Oscar for Best Picture?", "Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit", "B"],
        ["Joel Coen is married to which of the following actresses?", "Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis", "B"],
        ["Which Coen Brothers movie is loosely based on Homer's Odyssey?", "Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona", "C"],
        ["Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?", "George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi", "D"],
        ["Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:", "Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men", "A"]
    ];
    console.log("1st Quiz Question: " +quizQuestions[0][0]);

// Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. (** Remember, Go back into stopwatchSolution (week 5 Activity 10, line 38) to figure out how to stop/start, etc..**)
        
    var timer = 21;
    var intervalId;
    intervalId = setInterval(gameTimer, 1000);

            function gameTimer() {
                timer--;
                if (timer === 0) {
                    clearInterval(intervalId);
                }
                $("#game-timer").html("<h1> Countdown: " + timer + " seconds</h1>");
            }

// Start the game. 
    // 1. Target the game-panel div with a Start Game button.
        $("#game-timer").addClass("hide");
        $("#question").addClass("hide");
        $("#answer").addClass("hide");
        $("#button").html("So, is this the best trivia game ever? <p><p> <b>Oh, you betcha!</b> <p><p><button> Start Game </button>");
        
    // 2. Create on-click startGame button and function to start the game.
        $("#button").on("click", function (startGame) {
            // Hide the Start button.
            $("#button").addClass("hide");
            // Show the question/answer game-panel.
            $("#question").addClass("show");
            $("#answer").addClass("show");
            $("#game-timer").addClass("show");
        });
        
// Play the game. 
    // 1. Create a playGame function to display questions and its associated choices from the quizQuestions multi-dimensional array.
    // 2. Push into the #question and #answer divs. 
        // ** I believe I  will need the Position variable to track advancement to the next question. Marks the position of the outer array. 
        // ** Using real positions now until I get one question to work correctly!!
    // 3. Create on-click functions that target the answer divs.
    // 4. Allow for the click to capture the values for the buttons and compare it to the answerValue in quizQuestions.  
       
        var position = 0;
        console.log("user position in quiz: " +position);
        var button1 = "A";
        var button2 = "B";
        var button3 = "C";
        var button4 = "D";
        var answerValue = quizQuestions[0][5];
        console.log("Answer Value: " +answerValue);

        $("#game-panel").each(function playGame(){

    // ** Need to loop through quizQuestions and push one question and set of answers at a time. Check this one: https://stackoverflow.com/questions/3943494/how-to-loop-through-array-in-jquery
        // for(i = 0; i < quizQuestions.length; i++) {                 
            //         console.log("quizQuestions Loop: " +quizQuestions[i]);
            //         $("#question").html("<b>" + quizQuestions[i] + "</b><p>");
            // }
            
            $("#question").html("<b>" + quizQuestions[0][0] + "</b><p>");
            $("#answer1").html("<i>" + quizQuestions[0][1] + "</i>");
            $("#answer2").html("<i>" + quizQuestions[0][2] + "</i>");
            $("#answer3").html("<i>" + quizQuestions[0][3] + "</i>");
            $("#answer4").html("<i>" + quizQuestions[0][4] + "</i>");
          
        $("#answer1").on("click", function () {
            userChoice = "A";
            console.log("User Choice: " + userChoice);
            console.log("Button Value: " + button1); 
            checkAnswer();
        })    
            
        $("#answer2").on("click", function () {
            userChoice = "B";
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button2);  
            checkAnswer();  
        }) 
       
        $("#answer3").on("click", function () {
            userChoice = "C";
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button3);  
            checkAnswer();   
        })
        
        $("#answer4").on("click", function () {
            userChoice = "D";
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button4);      
            checkAnswer();
        })
        });            
    // Create a checkAnswer function to check and store what answer the user clicked.       
        // a. If CORRECT choice is made, stop the timer, display a correct message (Call the pageTimer function.)
        // b. Advance to the next question.
        // c. Restart the timer. (Call the gameTimer function.) 
        function checkAnswer() {

            if (userChoice === answerValue) {
                correctAnswers++;
                $("#message").html("<b> Good Job! The Dude would be so proud!</b>");
                // playGame();
                // gameTimer();
            }
        // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer. (Call the pageTimer function.)
        // e. Advance to the next question.
        // f. Restart the timer. (Call the gameTimer function.)

            if (userChoice !== answerValue) {
                incorrectAnswers++;
                $("#message").html("<b> Too bad, so sad! </b> <p> The correct answer is " +quizQuestions[0][3]);
                // playGame();
                // gameTimer();     
            }
        // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, for 5 seconds. (Call the pageTimer function.)
        // h. Advance to the next question.
        // i. Restart the timer. (Call the gameTimer function.)
            else (answerValue !== userChoice) && (timer === 0) 
                incorrectAnswers++;
                $("#message").html("<b><h4>Too bad, so sad! </b> <p> The correct answer is " +quizQuestions[0][3] + ".</h4>");
                // playGame();
                // gameTimer();        
            }

    // Create a 5-second timeout loop function named pageTimer for delay on the answer and message displays. 
    // ** (see: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
        var i = 1;

        function pageTimer() {
            setTimeout(function () {
                i++;
                if (i < 10) {
                    pageTimer();
                }
            }, 5000)
        }

// End the game. **This section does display (but not functional) if uncommented. **
    // A summary page appears after the last question.
    // ** So...If correctAnswers + incorrectAnswers = 10..show the Summary page.
            // $("#question").addClass("show");
            // $("#answer").addClass("show");
            // $("#new-button").addClass("show");

    // // Summary page displays the number of correct and incorrect answers. Also provides a button to start a new game.
    //        1. Display number of correct and incorrect answers.
            // $("#question").html("<b>Your Game Totals: </b>");
            // $("#answer").html("Correct Answers: " + correctAnswers + "<p>Incorrect Answers: " + incorrectAnswers)

    //     // 2. Target the game-panel div with a Start New Game button.
            //  $("#new-button").html("<button> Start New Game </button>"); 
    //     // 3. Create on-click startNewGame function to start a new game.
    //          $("#new-button").on("click", function (startNewGame) { 
    //     // Hide the button.
            //  $("#new-button").addClass("hide");
    //     // Show the question/answer panel.
            //  $("#question").addClass("show");
            //  $("#answer").addClass("show");
            //  $("#question").html("Just some text for now.");
});