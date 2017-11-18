$(document).ready(function () {

// Create global variables.

// Create Question/Answers as objects??
var questionOne = {
    Question: "The directorial debut for the Coen Brothers was:",
    A: "Raising Arizona",
    B: "Fargo",
    C: "Blood Simple",
    D: "Barton Fink",
    Answer: "C: Blood Simple (1984)",
    FunFact: "The Coens, and many of the cast and crew, had never been on a film set before Blood Simple."
}
console.log(questionOne);
var questionTwo = {
    Question: "Which of the following Coen Brothers movies won the Oscar for Best Picture?",
    A: "Fargo",
    B: "No Country for Old Men",
    C: "O' Brother Where Art Thou",
    D: "True Grit",
    Answer: "B: No Country for Old Men (2007)",
    FunFact: 'The title of the movie comes from the first line of the William Butler Yeats poem, "Sailing to Byzantium".'
}

// Create a timeout function named gameTimer for the timer to decrement for 20 seconds on each question.

// Create a 5-second timeout (or interval?) function named pageTimer for the answer and message displays.

// Create on-click functions for the answer-choice divs.
    // 1. Store a value of true (correct) or false (incorrect) for each answer choice. 
        // a. If CORRECT choice is made, stop the timer and display a congrats message for 5 seconds. (Call the pageTimer function.)
        // b. Advance to the next question.
        // c. Restart the timer. (Call the gameTimer function.)

        // d. If INCORRECT choice is made, stop the timer and display a sorry message and the correct answer for 5 seconds. (Call the pageTimer function.)
        // e. Advance to the next question.
        // f. Restart the timer. (Call the gameTimer function.)

        // g. If NO choice is made and timer = 0, then display a sorry message and the correct answer for 5 seconds. (Call the pageTimer function.)
        // h. Advance to the next question.
        // i. Restart the timer. (Call the gameTimer function.)

// Create an on-click function to start the game.
    // 1. Target the start-panel div.
    // 2. Show the first question and answer choices in the game-panel div.
    // 3. Call the gameTimer function to start the timer in the clock-panel div.






});