//Logic Variables 
let players = 0;
let rounds = 0;

let p1Choice = "rock";
let p2Choice = "rock";

//player html tags
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");


//display divs
let body = document.getElementById("body")

let homeDiv = document.getElementById("homeDiv");
let roundsDiv = document.getElementById("roundsDiv");
let gameplayDiv = document.getElementById("gameplayDiv");

//home buttons html
let OneVOneBtn = document.getElementById("OneVOneBtn");
let cpuBtn = document.getElementById("cpuBtn");
let rulesBtn = document.getElementById("rulesBtn");

//round buttons html
let BoOne = document.getElementById("BoOne");
let BoFive = document.getElementById("BoFive");
let BoSeven = document.getElementById("BoSeven");

//GamePlay buttons html
let rockP1 = document.getElementById("rockP1");
let paperP1 = document.getElementById("paperP1");
let scissorsP1 = document.getElementById("scissorsP1");
let lizardP1 = document.getElementById("lizardP1");
let spockP1 = document.getElementById("spockP1");

let goBtn = document.getElementById("goBtn");
let homeBtn= document.getElementById("homeBtn");
let gameplayRulesBtn = document.getElementById("gameplayRulesBtn");


let rockP2 = document.getElementById("rockP2");
let paperP2 = document.getElementById("paperP2");
let scissorsP2 = document.getElementById("scissorsP2");
let lizardP2 = document.getElementById("lizardP2");
let spockP2 = document.getElementById("spockP2");


//hide and show functions
function showHome() {
    homeDiv.classList.remove("off");
    roundsDiv.classList.add("off");
    gameplayDiv.classList.add("off");
    body.classList.remove("gameBG");
    body.classList.add("homeBG");
  }
function showRounds() {
    homeDiv.classList.add("off");
    roundsDiv.classList.remove("off");
    gameplayDiv.classList.add("off");
    body.classList.remove("gameBG");
    body.classList.add("homeBG");
  }
function showGameplay() {
    homeDiv.classList.add("off");
    roundsDiv.classList.add("off");
    gameplayDiv.classList.remove("off");
    body.classList.remove("homeBG");
    body.classList.add("gameBG");
}

function resetGame(){
    players = 0;
    rounds = 0;
}


//Eventlisteners
//Home screen
OneVOneBtn.addEventListener("click", () =>{
    players = 2;
    showRounds();
});
cpuBtn.addEventListener("click", () =>{
    players = 1;
    showRounds();
});
//Rounds Screen
BoOne.addEventListener("click", () =>{
    rounds = 1;
    showGameplay();
});
BoFive.addEventListener("click", () =>{
    rounds = 5;
    showGameplay();
});
BoSeven.addEventListener("click", () =>{
    rounds = 7;
    showGameplay();
});

//Game Screen
homeBtn.addEventListener("click", () =>{
    resetGame();
    showHome();
});
goBtn.addEventListener("click", () =>{
    player1.classList.remove("glow");
    player2.classList.remove("glow");

});

//player1 btns
rockP1.addEventListener("click", () =>{
    p1Choice = "rock";
    player1.classList.add("glow")
});
paperP1.addEventListener("click", () =>{
    p1Choice = "paper";
    player1.classList.add("glow")
});
scissorsP1.addEventListener("click", () =>{
    p1Choice = "scissors";
    player1.classList.add("glow")
});
lizardP1.addEventListener("click", () =>{
    p1Choice = "lizard";
    player1.classList.add("glow")
});
spockP1.addEventListener("click", () =>{
    p1Choice = "spock";
    player1.classList.add("glow")
});

//player 2 btns
rockP2.addEventListener("click", () =>{
    p2Choice = "rock";
    player2.classList.add("glow")
});
paperP2.addEventListener("click", () =>{
    p2Choice = "paper";
    player2.classList.add("glow")
});
scissorsP2.addEventListener("click", () =>{
    p2Choice = "scissors";
    player2.classList.add("glow")
});
lizardP2.addEventListener("click", () =>{
    p2Choice = "lizard";
    player2.classList.add("glow")
});
spockP2.addEventListener("click", () =>{
    p2Choice = "spock";
    player2.classList.add("glow")
});
