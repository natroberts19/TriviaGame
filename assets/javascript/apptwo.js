$(document).ready(function () {

    // Create global variables.
    
    // pos is position of where the user in the test or which question they're up to
    var pos = 0, test, test_status, question, choice, choices, choice1, choice2, choice3, choice4, correct = 0;
    var timer = 21;
    var intervalId;

    // Create Questions and Answers.
    var questions = [
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
    console.log(questions);
    console.log(questions[0][0]);
// this get function is short for the getElementById function  
function get(x){
    return document.getElementById(x);
  }
  
  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    choice1 = questions[pos][1];
    choice2 = questions[pos][2];
    choice3 = questions[pos][3];
    choice4 = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    // the += appends to the data we started on the line above
    test.innerHTML += "<button onclick= name='choices' value='1'> "+choice1+"<br>";
    test.innerHTML += "<input type='link' name='choices' value='2'> "+choice2+"<br>";
    test.innerHTML += "<input type='link' name='choices' value='3'> "+choice3+"<br>";
    test.innerHTML += "<input type='link' name='choices' value='4'> "+choice4+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos][5]){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
  window.addEventListener("load", renderQuestion, false);

    //     checkAnswer();
    // });

    // // Create a checkAnswer function to check and store what answer the user clicked.
    // function checkAnswer() {
    //     for (j = 0; 1 < questions.question1.length; j++) {
    //         // a. If CORRECT choice is made, stop the timer, display a correct message (Call the pageTimer function.)
    //         // b. Advance to the next question.
    //         // c. Restart the timer. (Call the gameTimer function.)
    //         if (questions.question1[5] === value && timer > 0) {
    //             // stop the gameTimer
    //             clearInterval(intervalId);
    //             // add a correct answer to the tally
    //             correctAnswers++;
    //             // display "Correct!" message in #message div
    //             $("#message").addClass("show");
    //             $("#message").html("<b> Correct! </b>");
    //             // run the pageTimer delay         
    //             pageTimer();
    //             // go to next question 
    //             nextQuestion();
    //             $("#message").addClass("hide");
    //             $("#fun-fact").addClass("hide");
    //             // start the game timer
    //             gameTimer();
    //         }

    //         // d. If INCORRECT choice is made, stop the timer, display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
    //         // e. Advance to the next question.
    //         // f. Restart the timer. (Call the gameTimer function.)
    //         else if (questions.question1[5] != value && timer > 0) {
    //             // Stop the gameTimer
    //             clearInterval(intervalId);
    //             // add an incorrect answer to the tally
    //             incorrectAnswers++;
    //             // display "Incorrect!" message in #message div
    //             $("#message").addClass("show");
    //             $("#message").html("<b> Incorrect! </b>");
    //             // ** Need to show correct answer.
    //             pageTimer();
    //             nextQuestion();
    //             $("#message").addClass("hide");
    //             gameTimer();
    //         }
    //         // g. If NO choice is made and timer = 0, then display a sorry message, correct answer, and fun fact for 5 seconds. (Call the pageTimer function.)
    //         // h. Advance to the next question.
    //         // i. Restart the timer. (Call the gameTimer function.)
    //         else(timer === 0); {
    //             // add an incorrect answer to the tally
    //             incorrectAnswers++;
    //             // display "Incorrect!" message in #message div
    //             $("#message").addClass("show");
    //             $("#message").html("<b> Incorrect! </b>");
    //             // ** Need to show correct answer.
    //             pageTimer();
    //             nextQuestion();
    //             $("#message").addClass("hide");
    //             gameTimer();

    //         }
    //     }
    // }

    // // Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. 
    // intervalId = setInterval(gameTimer, 1000);

    // function gameTimer() {
    //     timer--;
    //     if (timer === 0) {
    //         clearInterval(intervalId);
    //     }

    //     $("#game-timer").html("<h1> Countdown: " + timer + " seconds</h1>");
    // }

    // // Create a 5-second timeout loop function named pageTimer for delay on the answer and message displays. 
    // // (see: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
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
    //     })
    // ??????? //

});