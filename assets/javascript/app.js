

//Global Variables
var index = 0
var correctAnswers = 0;
var incorrectAnswers = 0;
var totalScore = (correctAnswers * 100) - (incorrectAnswers * 100);//append to an element
var time = 10;
var answerTime = 3;
var seconds;
var gameLength;

//Questions array and question objects
var questionsArray = [
{
  question: "What does Todd Packers License plate say?",
  answerArray: ["PRVRT", "LOL69", "WLHUNG", "BOOB69"],
  answerTrue: [false, false, true, false],
  answer: 2,
},
{
  question: "Where does Ryan work after he gets fired from his corportate job?",
  answerArray: ["A Mall Kiosk", "A Bowling Alley", "A Fast Food Restaurant", "A Strip Club"],
  answerTrue: [false, true, false, false],
  answer: 1,
},
{
  question: "What item of clothing does Michael insist on having dry cleaned?",
  answerArray: ["Socks", "Ties", "Jeans", "Suit Jacket"],
  answerTrue: [false, false, true, false],
  answer: 2,
},
{
  question: "Who said,'I really should have a tweeter account?'",
  answerArray: ["Kevin", "Michael", "Creed", "Dwight"],
  answerTrue: [false, false, false, true],
  answer: 3,
},
{
    question: "What color shirts do the Scranton Branch employees wear in the episode 'Company Picnic'?",
    answerArray: ["Red", "Green", "Pink", "Orange"],
    answerTrue: [false, false, true, false],
    answer: 2,
},
{
  question: "What does Michael put in Toby's desk to frame him for drug posessoin?",
  answerArray: ["Ceaser Salad", "Frisee Salad", "Caprese Salad", "Spinach"],
  answerTrue: [false, false, true, false],
  answer: 2,
},
{
  question: "What does Andy say when he sees the topless picture of Jan taken in Jamaica?",
  answerArray: ["Boring. Call me if she rolls over.", "How do I get you out of that picture?", "Wait, is that Jan?", "Yea, Michael! You the man!"],
  answerTrue: [true, false, false, false],
  answer: 0,
},
{
  question: "What does Devon dress up as in Season 2 Halloween episode?",
  answerArray: ["A vampire", "A mummy", "A clown", "None of the Above"],
  answerTrue: [false, false, false, true],
  answer: 3,
},
{
  question: "What character does not appear in the pilot episode?",
  answerArray: ["Creed", "Kevin", "Kelly", "Ryan"],
  answerTrue: [false, false, true, false],
  answer: 2,
},
{
  question: "Who wins the bronze medal in the episode'Office Olympics?'",
  answerArray: ["Oscar", "Dwight", "Phyllis", "Jim"],
  answerTrue: [false, false, false, true],
  answer: 3,
},
];

//functions
//timer
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
    time = 10;
  };
};

function stopTimer() {
  clearInterval(seconds);
};//end of timer//

//startgame
function startGame() {
  $("#correctAnswers").text(correctAnswers);
  $("#incorrectAnswers").text(incorrectAnswers);
  $("#timer").text(time + " Seconds Remaining");
  $("#question").html("<img id='dwightStart' src='assets/images/dwightQuote.webp'/>");
  $("#result").hide();
  $("#answerChoices").hide();
  //$(".answer").empty();
  correctAnswers = 0;
  incorrectAnswers = 0;
  $("#answerChoices .answer").off().on("click", guessMade);
  $("#startbtn").off().on("click", function(){
  loadQuestion();
  $("#startbtn").off();
  });

};

//loading questions and answers
function loadQuestion() {
  if(correctAnswers + incorrectAnswers == questionsArray.length) {
    showScore();
  } else {
    //pick question from array and display
  var questionIndex = Math.floor(Math.random() * questionsArray.length);
  currentQuestion = questionsArray[questionIndex];
  questionsArray.splice(questionIndex, 1);
  $("#result").empty().hide();
  $("#question").html(currentQuestion.question);
  $("#answerChoices").show().find(".answer").each(function(i){
    $(this).html(currentQuestion.answerArray[i]);
  });
  runTimer();
}

};

//player makes a guess
function guessMade() {
  if ($(this).data("answerChoice") == curentQuestion.answer) {
    correctAnswers++;
  }
};

//end of each guess screen
function result() {
  $("#result").text();
  setTimeout(loadQuestion, answerTime * 1000);
};

//show score at end of all questions
function showScore() {
  $("#question").text("Your Score for this round is: " + totalScore + " Refresh to play again!");
};


$(document).ready(function() {
//GamePlay
startGame();

});







//Notes
