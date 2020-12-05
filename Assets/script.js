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

// Create the function needed to go through the object array for the quiz questions and answers

// Create the start quiz function that removes the start button

// Create the timer

// Create a function to show the number of correct answers after the last question

// Create the submit button

// Create a local storage with JSON to save the high score submissions
 
// Create a display for the high scores to be stored in to show at the end of the quiz

// Create a function to clear the high score list, and then create a new high score list from the local storage

// Create a function to show the high score list without the other pages showing

// Create a function to clear the high score storage 

// Create a function to restart the quiz & timer

// Create a function to check the user response to each question