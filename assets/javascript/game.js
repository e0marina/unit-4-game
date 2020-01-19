// GLOBAL VARIABLES (variables we want to be avails to whole game)
//=======================================================================
var wins = 0;
var losses = 0;
var scoreBox = 0;
//The below seems redundant...no?
var crystalBlue = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalPink = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalPurple = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalRed = Math.floor(Math.random() * (12 - 1)) + 1;
//randomNum
function randomNum(min, max) {
  return Math.floor(Math.random() * (120 - 19)) + 19;
}
//FUNCTIONS
//=======================================================================
//at game start/reset - generate a random number (that user will try to match)
//and display it on the screen
function gameStart() {
  $("#random-num-text").html(randomNum);
  //define function to generate random nums to crystals

  //at game start/reset - diff random numbers assigned to crystals

  $("#blue").html(crystalBlue);
  console.log("bluenum");

  $("#pink").html(crystalPink);
  console.log("pinknum");

  $("#purple").html(crystalPurple);
  console.log("purplenum");

  $("#red").html(crystalRed);
  console.log("rednum");

  //at game start/reset - total score set to 0

  $("#score-box").html("0");
  console.log("score box working");
}
gameStart();

//MAIN PROCESS
//=======================================================================
// //when each crystal is clicked, add its value to the total score
$("#blue").on("click", function() {
  scoreBox = scoreBox + crystalBlue;
  //show in counter area
  $("#score-box").html(scoreBox);
});
$("#pink").on("click", function() {
  scoreBox = scoreBox + crystalPink;
  //show in counter area
  $("#score-box").html(scoreBox);
});
$("#purple").on("click", function() {
  scoreBox = scoreBox + crystalPurple;
  //show in counter area
  $("#score-box").html(scoreBox);
});
$("#red").on("click", function() {
  scoreBox = scoreBox + crystalRed;
  //show in counter area
  $("#score-box").html(scoreBox);
});
//if user's score equals the random number, user wins, yay
if (randomNum === scoreBox) {
  wins++;
  $("#wins-p").html(wins);
} else if (randomNum < scoreBox) {
  losses++;
  $("losses-p").html(losses);
} else {
}
//if user's score goes above the random number, user loses
