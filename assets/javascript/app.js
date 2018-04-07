$(document).ready(function() {
//Global Variables
var index = 0
var correctAnswers = 0;
var incorrectAnswers = 0;
var totalScore = (correctAnswers * 100) - (incorrectAnswers * 100);//append to an element


//Question objects
var questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var q1 = {
  question: "",
  answerArray: [],
  answerValue: [true, true, true, false],
  answer: "",
}
var q2 = {}
var q3 = {}
var q4 = {}
var q5 = {}
var q6 = {}
var q7 = {}
var q8 = {}
var q9 = {}
var q10 = {}



//Functions
$("#startbtn").on("click", function(){
  var gameTimer = setInterval(timer, 1000);
  var timeLeft = 10;

  function timer() {
    if (timeLeft == 0){
      clearInterval(gameTimer);
      setTimeout(function() {
        alert("Out Of Time!");
      }, 100);
      timeLeft == 10;
      incorrectAnswers++;
      document.getElementById("incorrectAnswers").innerHTML = incorrectAnswers;
      gameTimer = setInterval(timer, 1000);
      timer();
    }else {
      $("#timer").html(timeLeft + " Seconds Remaining");
      $("#timer").attr("value", timeLeft);
        timeLeft--;
    }
  };//end of timer
timer();

  function loadQuestion() {
    $(".questions").append()

  };

  function setup() {

  };

  function grabAnswer() {

  };

  function showScore() {

  }
});








});
//Notes
//on play click, timer starts
//timer function
//array of questions
// questions as objects
//
