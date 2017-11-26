$(document).ready(function () {

    // Create global variables.
    var correctAnswers = 0;
    console.log("correct answers: " +correctAnswers);
    var incorrectAnswers = 0;
    console.log("incorrect answers: " +incorrectAnswers);
    var position = 0;
    console.log("user position in quiz: " +position);
    var answerValue;
    var userChoice;
    var button1, button2, button3, button4;
    
    var timer = 21;
    var intervalId;

    // Create Questions and Answers.
    var quizQuestions = [
        ["The directorial debut for the Coen Brothers was:", "Raising Arizona", "Fargo", "Blood Simple", "Barton Fink", 3],
        ["Which of the following Coen Brothers movies won the Oscar for Best Picture?", "Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit", 2],
        ["Joel Coen is married to which of the following actresses?", "Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis", 2],
        ["Which Coen Brothers movie is loosely based on Homer's Odyssey?", "Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona", 3],
        ["Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?", "George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi", 4],
        ["Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:", "Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men", 1],
        ["Brad Pitt's only appearance in a Coen Brothers movie features his portrayal of a goofy fitness trainer in:", "Inside Llewyn Davis", "Burn After Reading", "Raising Arizona", "The Big Lebowski", 3],
        ["Jeff Bridges was nominated for a Best Actor Oscar for his Rooster Cogburn character in True Grit; however, his best known and most popular Coen Bros character is The Dude from:", "No Country for Old Men", "O'Brother Where Art Thou", "Burn After Reading", "The Big Lebowski", 4],
        ["This Coen Bros movie was nominated for ten Oscars and came away winning zero:", "No Country for Old Men", "Fargo", "True Grit", "Barton Fink", 3],
        ["The music sountrack from this Coen Bros movie sold over 5 million copies and won 5 Grammy awards:", "O'Brother Where Art Thou", "Hail Caeser!", "True Grit", "The Big Lebowski", 1]
    ];
    console.log("1st Quiz Question: " +quizQuestions[0][0]);
    
    // Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. 
    // **Go back into stopwatchSolution (week 5 Activity 10, line 38) to figure out how to stop/start.**
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
        $("#question").addClass("hide");
        $("#answer").addClass("hide");
        $("#button").html("So, is this the best trivia game ever? <p><p> Oh, you betcha! <p><p><button> Start Game </button>");
        
        // 2. Create on-click startGame button and function to start the game.
        $("#button").on("click", function (startGame) {
            // Hide the button.
            $("#button").addClass("hide");
            // Show the question/answer panel.
            $("#question").addClass("show");
            $("#answer").addClass("show");
        });
        
    // Play the game. 
        // Display questions and its associated choices from the quizQuestions array.
        // Display in the #question and #answer divs. 
        // ** Position variable will be used to advance to the next question. Marks the position of the outer array. 
        // ** Using real positions now until I get one question to work correctly.
        // Create on-click functions that target the answer divs.
        // Allow for the click to capture the values for the buttons and compare it to the answerValue from quizQuestions.  
       
        position = 0;
        button1 = 1;
        button2 = 2;
        button3 = 3;
        button4 = 4;
        answerValue = quizQuestions[0][5];
        console.log("Answer Value: " +answerValue);


        // Check this one: jQuery.each(substr, function(index, item) {
        // do something with `item` (or `this` is also `item` if you like)
        // https://stackoverflow.com/questions/3943494/how-to-loop-through-array-in-jquery

        $("#game-panel").each(function playGame(){
            
            $("#question").html("<b>" + quizQuestions[0][0] + "</b><p>");
            $("#answer1").html("<i>" + quizQuestions[0][1] + "</i>");
            $("#answer2").html("<i>" + quizQuestions[0][2] + "</i>");
            $("#answer3").html("<i>" + quizQuestions[0][3] + "</i>");
            $("#answer4").html("<i>" + quizQuestions[0][4] + "</i>");
          
        $("#answer1").on("click", function () {
            userChoice = 1;
            console.log("User Choice: " + userChoice);
            console.log("Button Value: " + button1); 
            checkAnswer();
        })    
            
        $("#answer2").on("click", function () {
            userChoice = 2;
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button2);  
            checkAnswer();  
        }) 
       
        $("#answer3").on("click", function () {
            userChoice = 3;
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button3);  
            checkAnswer();   
        })
        
        $("#answer4").on("click", function () {
            userChoice = 4;
            console.log("User Choice: " + userChoice)
            console.log("Button Value: " + button4);      
            checkAnswer();
        })
        });        
       

    // // Create a checkAnswer function to check and store what answer the user clicked.       
            // a. If CORRECT choice is made, stop the timer, display a correct message (Call the pageTimer function.)
            // b. Advance to the next question.
            // c. Restart the timer. (Call the gameTimer function.) 
        function checkAnswer() {

            if (answerValue === userChoice) {
                correctAnswers++;
                $("#message").html("<b> Good Job! </b>");
                // playGame();
              }
            // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer. (Call the pageTimer function.)
            // e. Advance to the next question.
            // f. Restart the timer. (Call the gameTimer function.)

            else (answerValue !== userChoice) 
                incorrectAnswers++;
                $("#message").html("<b> Too bad, so sad! </b>");
                // playGame();
              
        }
            // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
            // h. Advance to the next question.
            // i. Restart the timer. (Call the gameTimer function.)
    
            // }

    // Create a 5-second timeout loop function named pageTimer for delay on the answer and message displays. 
    // (see: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
        // var i = 1;

        // function pageTimer() {
        //     setTimeout(function () {
        //         i++;
        //         if (i < 10) {
        //             pageTimer();
        //         }
        //     }, 5000)
        // }

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
});