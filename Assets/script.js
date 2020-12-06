// Make a list of all the variables needed to respond to the user

//Creat start of quiz variables
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");

//Create middle of quiz vars (question vars)
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Create end of quiz vars
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var quizTimer = document.getElementById("timer");
var submitScoreBtn = document.getElementById("submitScore");

//Create high score of quiz vars
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var highscoreDisplayScore = document.getElementById("highscore-score");


//Create questions and options for user to select from
var quizQuestions = [{
    question: "What element in HTML contains the visible page content?",
    A: "<title>",
    B: "<head>",
    C: "<body>",
    D: "<footer>",
    correctAnswer: "c"},
  {
    question: "What does CSS stand for?",
    A: "Cascading Style Sheets",
    B: "Coding Style Sheets",
    C: "Computer Style Sheets",
    D: "Cookie Style Sheets",
    correctAnswer: "a"},
  {
    question: "What HTML element do we put JavaScript in?",
    A: "<js>",
    B: "<print>",
    C: "<script>",
    D: "<javascript>",
    correctAnswer: "c"},
    {
    question: "An array’s length can be evaluated with the what property?",
    A: ".log",
    B: ".length",
    C: ".width",
    D: ".loop",
    correctAnswer: "b"},
    ];

// Create needed variables for the timer, score, & questions correct
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// Create the function needed to go through the object array for the quiz questions and answers
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.A;
    buttonB.innerHTML = currentQuestion.B;
    buttonC.innerHTML = currentQuestion.C;
    buttonD.innerHTML = currentQuestion.D;
};

// Create the start quiz function that removes the start button
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

// Create the timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}

// Create a function to show the number of correct answers after the last question
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}
// Create the submit button
submitScoreBtn.addEventListener("click", function highscore(){
    if(highscoreInputName.value === "") {
        alert("Must type initials");
        return false;

// Create a local storage with JSON to save the high score submissions
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
// Create a display for the high scores to be stored in to show at the end of the quiz
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

// Create a function to clear the high score list, and then create a new high score list from the local storage
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
        }
    }

// Create a function to show the high score list without the other pages showing
function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";
    generateHighscores();
    }

// Create a function to clear the high score storage 
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
    }

// Create a function to restart the quiz & timer
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
    }

// Create a function to check the user response to each question
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
// Create if and else if statements for correct and incorrect answers
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        currentQuestionIndex++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        currentQuestionIndex++;
        generateQuizQuestion();
    }else{
        showScore();
        }
    }

// Create an event listener to start the quiz
startQuizButton.addEventListener("click",startQuiz);