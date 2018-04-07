$(document).ready(function() {

//Global Variables
var index = 0
var correctAnswers = 0;
var incorrectAnswers = 0;
var totalScore = (correctAnswers * 100) - (incorrectAnswers * 100);//append to an element
var time = 11;
var seconds;

//Question objects
var questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var q1 = {
  question: "",
  answerArray: [],
  answerValue: [true, true, true, false],
  answer: "",
};
var q2 = {}
var q3 = {}
var q4 = {}
var q5 = {}
var q6 = {}
var q7 = {}
var q8 = {}
var q9 = {}
var q10 = {}

//functions
function runTimer() {
  clearInterval(seconds);
  setInterval(timeLeft, 1000);
};

function timeLeft() {
  time--;
  $("#timer").html(time + " Seconds Remaining");
  $("#timer").attr("value", time);
  if (time === 0){
    stopTimer();
    setTimeout(function() {
      alert("Out Of Time!");
    }, 500);
    incorrectAnswers++;
    document.getElementById("incorrectAnswers").innerHTML = incorrectAnswers;
    time = 11;
  };
};

function stopTimer() {
  clearInterval(seconds);
};//end of timer//

function loadQuestion() {
  $(".questions").append()

};

function setup() {

};

function grabAnswer() {

};

function showScore() {

};

//GamePlay
$("#startbtn").on("click", function(){

runTimer();


});

});







//Notes
//on play click, timer starts
//timer function
//array of questions
// questions as objects
//
