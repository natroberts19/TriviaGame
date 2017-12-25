$(document).ready(function () {

// Create global variables.
    var panel = $("#game-panel");
    var countStartNumber = 20;

// Create Questions and Answers.
    var quizQuestions = [{
        question: "The directorial debut for the Coen Brothers was:", 
        answers: ["Raising Arizona", "Fargo", "Blood Simple", "Barton Fink"], correctAnswer: "Blood Simple"
    }, {
        question: "Which of the following Coen Brothers movies won the Oscar for Best Picture?",
        answers: ["Fargo", "No Country for Old Men", "O' Brother Where Art Thou", "True Grit"],
        correctAnswer: "No Country for Old Men"
    }, {
        question: "Joel Coen is married to which of the following actresses?",
        answers: ["Holly Hunter", "Frances McDormand", "Jennifer Jason Leigh", "Jamie Lee Curtis"],
        correctAnswer: "Frances McDormand"
    }, {
        question: "Which Coen Brothers movie is loosely based on Homer's Odyssey?",
        answers: ["Fargo", "Burn After Reading", "O'Brother Where Art Thou", "Raising Arizona"],
        correctAnswer: "O'Brother Where Art Thou"
    }, {
        question: "Which of the following pair of actors/actresses appeared in the most Coen Brothers movies?",
        answers: ["George Clooney and Brad Pitt", "Nicholas Cage and JK Simmons", "Frances McDormand and John Turturro", "John Goodman and Steve Buscemi"],
        correctAnswer: "John Goodman and Steve Buscemi"
    }, {
        question: "Frances McDormand won the Best Actress Oscar for her portrayal of a pregnant sheriff in:",
        answers: ["Fargo", "Blood Simple", "Raising Arizona", "No Country for Old Men"],
        correctAnswer: "Fargo"
    }];
    console.log("Quiz Questions: ", quizQuestions);

// Create an interval timer function named gameTimer for the timer to decrement for 20 seconds on each question. (** Remember, Go back into stopwatchSolution (week 5 Activity 10, line 38) to figure out how to stop/start, etc..**)
        
    var timer;
    var game = {
        quizQuestions: quizQuestions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,
        countdown: function() {
            game.counter--;
            $("#counter-number").text(game.counter);
            if (game.counter === 0) {
                console.log("times up");
                game.timeUp();
            }
        },

        loadQuestion: function() {
            timer = setInterval(game.countdown, 1000);
            panel.html("<h2>" + quizQuestions[this.currentQuestion].question + "</h2>");

            for (var i = 0; i < quizQuestions[this.currentQuestion].answers.length; i++) {
                panel.append("<button class='answer-button' id='button' data-name='" + quizQuestions[this.currentQuestion].answers[i] + "'>" + quizQuestions[this.currentQuestion].answers[i] + "</button><br>");
            }
        },

        nextQuestion: function() {
            game.counter = countStartNumber;
            $("#counter-number").text(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },

        timeUp: function() {
            clearInterval(timer);
            $("#counter-number.html").html(game.counter);
            panel.html("<h2>Out of Time!</h2>");
            panel.append("<h3> The correct answer is: " + quizQuestions[this.currentQuestion].correctAnswer + "</h3>");

            if (game.currentQuestion === quizQuestions.length - 1) {
                setTimeout(game.results, 2 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 2 * 1000);
            }
        },

        results: function() {
            clearInterval(timer);
            panel.html("<h2>Game over! Here's your score: </h2>")
            $("#counter-number").text(game.counter);

            panel.append("<h3> Correct Answers: " + game.correct + "</h3>");
            panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
            panel.append("<h3> Unanswered: " + (quizQuestions.length - (game.incorrect + game.correct)) + "</h3>");
            panel.append("<br><button id='start-over'>Start a New Game?</button>");
        },

        clicked: function(e) {
            clearInterval(timer);
        if ($(e.target).attr("data-name") === quizQuestions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }   
        else {
            this.answeredIncorrectly();
        }     
        },

        answeredIncorrectly: function() {
            game.incorrect++;
            clearInterval(timer);

            panel.html("<h3>Sorry!!</h3>");
            panel.append("<h3>The correct answer is: " + quizQuestions[game.currentQuestion].correctAnswer + "</h3>");

            if (game.currentQuestion === quizQuestions.length - 1) {
                setTimeout(game.results, 2 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 2 * 1000);
            }
        },

        answeredCorrectly: function() {
            clearInterval(timer);
            game.correct++;
            
            panel.html("<h3>Correct!</h3>");

            if (game.currentQuestion === quizQuestions.length - 1) {
                setTimeout(game.results, 2 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 2 * 1000);
            }
        },

        reset: function() {
            this.currentQuestion = 0;
            this.counter = countStartNumber;
            this.correct = 0;
            this.incorrect = 0;
            this.loadQuestion();
        }
    };
    
    $(document).on("click", "#start-over", function() {
        game.reset();
      });
      
      $(document).on("click", ".answer-button", function(e) {
        game.clicked(e);
      });
      
      $(document).on("click", "#start", function() {
        $("#clock-panel").prepend("<h2>Time Remaining: <span id='counter-number'>20</span> Seconds</h2>");
        game.loadQuestion();
      });

});