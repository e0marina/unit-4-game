// GLOBAL VARIABLES (variables we want to be avails to whole game)
//=======================================================================
var wins = 0;
var losses = 0;
//FUNCTIONS
//=======================================================================
//at game start/reset - generate a random number (that user will try to match)
//and display it on the screen
function randomNum(min, max) {
  return Math.floor(Math.random() * (120 - 19)) + 19;
}
$("#random-num-text").html(randomNum);

//at game start/reset - diff random numbers assigned to crystals
//at game start/reset - total score set to 0
//if player matches random number they win else they go above and lose and the counters update

//MAIN PROCESS
//=======================================================================
