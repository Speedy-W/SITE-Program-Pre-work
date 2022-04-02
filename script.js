// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 1, 4, 3, 2, 5, 6, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
var Totalpoint = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max  + 1);
}
function randpat(){
  for (var i = 0; i < 9; i ++) {
  pattern.push(getRandomInt(6));
  }
}

function startGame(){
    //initialize game variables
    pattern = []; //resets array
    randpat(); 
    progress = 0;
    mistakes = 0;
    gamePlaying = true;
    clueHoldTime = 1000;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}


function stopGame(){
    gamePlaying = false;
  // swap the Stop and Start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  Totalpoint = 0;
  points();
}

function lightButton(button){
  document.getElementById("button"+button).classList.add("lit")
}
function clearButton(button){
  document.getElementById("button"+button).classList.remove("lit")
}

function playSingleClue(button){
  if(gamePlaying){
    lightButton(button);
    playTone(button,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,button);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -=  50;
  console.log(clueHoldTime);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Congratulations. You won!");
}
function guess(button){
  console.log("user guessed: " + button);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == button){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        Totalpoint+=10;
        points();
        progress++;
        playClueSequence();
      }
    }
    else
      guessCounter++;
  }
  else if(mistakes<2){ 
    mistakes++;
    Totalpoint-=10;
    points();
    alert("Strike " + mistakes);
  }
  else
    loseGame();
  
}    
function points() {
    document.getElementById("points").innerHTML = "Points: " + Totalpoint;
}

// Sound Synthesis Functions
const freqMap = {
  1: 201.6,
  2: 269.6,
  3: 322,
  4: 386.2,
  5: 447.3,
  6: 508.4
}
function playTone(button,len){ 
  o.frequency.value = freqMap[button]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(button){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[button]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
  