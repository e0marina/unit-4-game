// GLOBAL VARIABLES (variables we want to be avails to whole game)
//=======================================================================
var wins = 0;
var losses = 0;
//FUNCTIONS
//=======================================================================
//at game start/reset - generate a random number (that user will try to match)
//and display it on the screen
function gameStart() {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (120 - 19)) + 19;
  }
  $("#random-num-text").html(randomNum);
  //define function to generate random nums to crystals, do 4x
  var printCrystalNum;
  function crystalNum(min, max) {
    return Math.floor(Math.random() * (12 - 1)) + 1;
  }

  //at game start/reset - diff random numbers assigned to crystals
  $("#blue").html(crystalNum);
  console.log("bluenum");

  $("#pink").html(crystalNum);
  console.log("pinknum");

  $("#purple").html(crystalNum);
  console.log("purplenum");

  $("#red").html(crystalNum);
  console.log("rednum");
  //at game start/reset - total score set to 0
  $("#score-box").html("0");
  console.log("score box working");
}
gameStart();

//if player matches random number they win else they go above and lose and the counters update
if (condition) {
} else {
}

//MAIN PROCESS
//=======================================================================
//when each crystal is clicked, add its value to the total score
