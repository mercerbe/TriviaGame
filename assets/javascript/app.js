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
  question: "What does Todd Packers License plate say?",
  answerArray: ["PRVRT", "LOL69", "WLHUNG", "BOOB69"],
  answerTrue: [false, false, true, false],
  answer: "WLHUNG",
};
var q2 = {
  question: "Where does Ryan work after he gets fired from his corportate job?",
  answerArray: ["A Mall Kiosk", "A Bowling Alley", "A Fast Food Restaurant", "A Strip Club"],
  answerTrue: [false, true, false, false],
  answer: "A Bowling Alley",
};
var q3 = {
  question: "What item of clothing does Michael insist on having dry cleaned?",
  answerArray: ["Socks", "Ties", "Jeans", "Suit Jacket"],
  answerTrue: [false, false, true, false],
  answer: "Jeans",
};
var q4 = {
  question: "Who said,'I really should have a tweeter account?'",
  answerArray: ["Kevin", "Michael", "Creed", "Dwight"],
  answerTrue: [false, false, false, true],
  answer: "Dwight",
};
var q5 = {
    question: "What color shirts do the Scranton Branch employees wear in the episode 'Company Picnic'?",
    answerArray: ["Red", "Green", "Pink", "Orange"],
    answerTrue: [false, false, true, false],
    answer: "Pink",
};
var q6 = {
  question: "What does Michael put in Toby's desk to frame him for drug posessoin?",
  answerArray: ["Ceaser Salad", "Frisee Salad", "Caprese Salad", "Spinach"],
  answerTrue: [false, false, true, false],
  answer: "Caprese Salad",
};
var q7 = {
  question: "What does Andy say when he sees the topless picture of Jan taken in Jamaica?",
  answerArray: ["Boring. Call me if she rolls over.", "How do I get you out of that picture?", "Wait, is that Jan?", "Yea, Michael! You the man!"],
  answerTrue: [true, false, false, false],
  answer: "Boring. Call me if she rolls over.",
};
var q8 = {
  question: "What does Devon dress up as in Season 2 Halloween episode?",
  answerArray: ["A vampire", "A mummy", "A clown", "None of the Above"],
  answerTrue: [false, false, false, true],
  answer: "None of the Above",
};
var q9 = {
  question: "What character does not appear in the pilot episode?",
  answerArray: ["Creed", "Kevin", "Kelly", "Ryan"],
  answerTrue: [false, false, true, false],
  answer: "Kelly",
};
var q10 = {
  question: "Who wins the bronze medal in the episode'Office Olympics?'",
  answerArray: ["Oscar", "Dwight", "Phyllis", "Jim"],
  answerTrue: [false, false, false, true],
  answer: "Jim",
};

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
