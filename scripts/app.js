//Logic Variables 
let gameEnd = false;
let players = 0;
let rounds = 99;

let p1Choice = "rock";
let p2Choice = "rock";
let p1Points = 0;
let p2Points = 0;

//player html tags
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");

let p1Status = document.getElementById("p1Status");
let p2Status = document.getElementById("p2Status");
let result = document.getElementById("result");


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
let homeBtn = document.getElementById("homeBtn");
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

function resetGame() {
    players = 0;
    rounds = 0;
    p1Status.innerText = '';
    p2Status.innerText = '';
    result.innerText = ''; 
}


//Eventlisteners
//Home screen
OneVOneBtn.addEventListener("click", () => {
    players = 2;
    showRounds();
});
cpuBtn.addEventListener("click", () => {
    players = 1;
    showRounds();
});
//Rounds Screen
BoOne.addEventListener("click", () => {
    rounds = 1;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);
    showGameplay();
});
BoFive.addEventListener("click", () => {
    rounds = 3;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);
    showGameplay();
});
BoSeven.addEventListener("click", () => {
    rounds = 4;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);
    showGameplay();
});

//Game Screen
homeBtn.addEventListener("click", () => {
    resetGame();
    showHome();
});
goBtn.addEventListener("click", () => {
    checkWin();

});

//player1 btns
rockP1.addEventListener("click", () => {
    p1Choice = "rock";
    p1Status.innerText = "Choice has been picked!";
    p1Status.classList.add("glowPink");
    console.log(p1Choice)
});
paperP1.addEventListener("click", () => {
    p1Choice = "paper";
    p1Status.innerText = "Choice has been picked!";
    p1Status.classList.add("glowPink");
});
scissorsP1.addEventListener("click", () => {
    p1Choice = "scissors";
    p1Status.innerText = "Choice has been picked!";
    p1Status.classList.add("glowPink");
});
lizardP1.addEventListener("click", () => {
    p1Choice = "lizard";
    p1Status.innerText = "Choice has been picked!";
    p1Status.classList.add("glowPink");
});
spockP1.addEventListener("click", () => {
    p1Choice = "spock";
    p1Status.innerText = "Choice has been picked!";
    p1Status.classList.add("glowPink");
});

//player 2 btns
rockP2.addEventListener("click", () => {
    p2Choice = "rock";
    p2Status.innerText = "Choice has been picked!";
    p2Status.classList.add("glowPink");
    console.log(p2Choice)
});
paperP2.addEventListener("click", () => {
    p2Choice = "paper";
    p2Status.innerText = "Choice has been picked!";
    p2Status.classList.add("glowPink");
});
scissorsP2.addEventListener("click", () => {
    p2Choice = "scissors";
    p2Status.innerText = "Choice has been picked!";
    p2Status.classList.add("glowPink");
});
lizardP2.addEventListener("click", () => {
    p2Choice = "lizard";
    p2Status.innerText = "Choice has been picked!";
    p2Status.classList.add("glowPink");
});
spockP2.addEventListener("click", () => {
    p2Choice = "spock";
    p2Status.innerText = "Choice has been picked!";
    p2Status.classList.add("glowPink");
});


//Game Logic for 1v1
function p1Win(){
    p1Points++;
    player1.classList.add("glowGreen");
    p1Status.classList.add("glowGreen");

    player2.classList.add("glowRed");
    p2Status.classList.add("glowRed");
    p1Score.innerText = (`Score ${p1Points}/${rounds}`);
}
function p2Win(){
    p2Points++;
    player1.classList.add("glowRed");
    p1Status.classList.add("glowRed");

    player2.classList.add("glowGreen");
    p2Status.classList.add("glowGreen");
    p2Score.innerText = (`Score ${p2Points}/${rounds}`);
}

function checkWin() {
    console.log(p1Choice + "  " +p2Choice);
    //p1 picks rock
    if(p1Choice === "rock"){
    switch (p2Choice) {
        case ("rock"):
            result.innerText = "Its a Tie! Both chose Rock";

            break;
        case ("paper"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Paper beats Rock!";
            p2Win();
            break;
        case ("scissors"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Rock beats Scissors!";
            p1Win();
            break;
        case ("lizard"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Rock beats Lizard!";
            p1Win();
            break;
        case ("spock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Spock beats Rock!";
            p2Win();
            break;
        default:
            console.log("Rock was not picked by p1");
            break;
        }
}

    //p1 picks paper
    if(p1Choice === "paper"){
    switch (p2Choice) {
        case ("rock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Rock!";
            p1Win();
            break;
        case ("paper"):
            result.innerText = "Its a Tie! Both chose Paper";

            break;
        case ("scissors"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Scissors beats paper!";
            p2Win();
            break;
        case ("lizard"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Lizard beats paper!";
            p2Win();
            break;
        case ("spock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Spock!";
            p1Win();
            
            break;
        default:
            console.log("paper was not picked by p1");
            break;
    }
}

    //p1 picks scissors
    if(p1Choice === "scissors"){
    switch (p2Choice) {
        case ("rock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Rock beats Scissors!";
            p2Win();
            break;
        case ("paper"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Scissors beats paper!";
            p1Win();
            break;
        case ("scissors"):
            result.innerText = "Its a Tie! Both chose Scissors";

            break;
        case ("lizard"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Scissors beats Lizard!";
            p1Win();
            break;
        case ("spock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Spock beats scissors!";
            p2Win();
            break;
        default:
            console.log("Scissors was not picked by p1")
            break;
    }
    }
    // //p1 picks Lizard
    if(p1Choice === "lizard"){
    switch (p2Choice) {
        case ("rock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Rock beats Lizard!";
            p2Win();
            break;
        case ("paper"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Lizard!";
            p1Win();
            break;
        case ("scissors"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Scissors beats Lizard!";
            p2Win();
            break;
        case ("lizard"):
            result.innerText = "Its a Tie! Both chose Lizard";

            break;
        case ("spock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Lizard beats Spock!";
            p1Win();
            break;
        default:
            console.log("Lizard was not picked by p1")
    }
}

    // //p1 picks Spock
    if(p1Choice === "spock"){
    switch (p2Choice) {
        case ("rock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Spock beats Rock!";
            p1Win();
            break;
        case ("paper"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Paper beats Spock!";
            p2Win();
            break;
        case ("scissors"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Spock beats Scissors!";
            p1Win();
            break;
        case ("lizard"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Lizard beats Spock!";
            p2Win();
            break;
        case ("spock"):
            result.innerText = "Its a Tie! Both chose Spock";

            break;
        default:
            console.log("Spock was not picked by p1")
    }
}


}