// GLOBAL VARIABLES (variables we want to be avails to whole game)
//=======================================================================

var scoreBox = 0;
//crystals gen random numbers
var crystalBlue = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalPink = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalPurple = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalRed = Math.floor(Math.random() * (12 - 1)) + 1;

//Random number that player needs to match
var randomNum = 0;
function randoGen() {
  randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
}

//FUNCTIONS
//=======================================================================
//at game start/reset - generate a random number (that user will try to match)
//and display it on the screen
function gameStart() {
  randoGen();
  $("#random-num-text").html(randomNum);

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
  scoreBox = 0;
  $("#score-box").html(scoreBox);
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
  scoreUpdate();
});
$("#pink").on("click", function() {
  scoreBox = scoreBox + crystalPink;
  //show in counter area
  $("#score-box").html(scoreBox);
  scoreUpdate();
});
$("#purple").on("click", function() {
  scoreBox = scoreBox + crystalPurple;
  //show in counter area
  $("#score-box").html(scoreBox);
  scoreUpdate();
});
$("#red").on("click", function() {
  scoreBox = scoreBox + crystalRed;
  //show in counter area
  $("#score-box").html(scoreBox);
  scoreUpdate();
});

var wins = 0;
var losses = 0;
//if user's score equals the random number, user wins, yay

function scoreUpdate() {
  if (randomNum === scoreBox) {
    wins++;
    $("#wins-p").html("Wins:" + wins);
    gameStart();
    console.log("wins incrementer working");

    //if user's score goes above the random number, user loses
  } else if (scoreBox > randomNum) {
    losses++;
    $("#losses-p").html("Losses:" + losses);
    gameStart();
    console.log("losses inc working");
  }
}
