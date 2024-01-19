//Logic Variables 
let gameEnd = false;
let players = 0;
let rounds = 0;

let p1Choice = "rock";
let p2Choice = "rock";
let p1Points = 0;
let p2Points = 0;

//player html tags
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

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
    showGameplay();
});
BoFive.addEventListener("click", () => {
    rounds = 5;
    showGameplay();
});
BoSeven.addEventListener("click", () => {
    rounds = 7;
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
    p1Status.innerText = "Choice has been picked! rock";
    p1Status.classList.add("glow");
});
paperP1.addEventListener("click", () => {
    p1Choice = "paper";
    p1Status.innerText = "Choice has been picked! paper";
    p1Status.classList.add("glow");
});
scissorsP1.addEventListener("click", () => {
    p1Choice = "scissors";
    p1Status.innerText = "Choice has been picked! sciu";
    p1Status.classList.add("glow");
});
lizardP1.addEventListener("click", () => {
    p1Choice = "lizard";
    p1Status.innerText = "Choice has been picked! liz";
    p1Status.classList.add("glow");
});
spockP1.addEventListener("click", () => {
    p1Choice = "spock";
    p1Status.innerText = "Choice has been picked! spock";
    p1Status.classList.add("glow");
});

//player 2 btns
rockP2.addEventListener("click", () => {
    p2Choice = "rock";
    p2Status.innerText = "Choice has been picked! Rock";
    p2Status.classList.add("glow");
});
paperP2.addEventListener("click", () => {
    p2Choice = "paper";
    p2Status.innerText = "Choice has been picked! Paper";
    p2Status.classList.add("glow");
});
scissorsP2.addEventListener("click", () => {
    p2Choice = "scissors";
    p2Status.innerText = "Choice has been picked! sci";
    p2Status.classList.add("glow");
});
lizardP2.addEventListener("click", () => {
    p2Choice = "lizard";
    p2Status.innerText = "Choice has been picked! liz";
    p2Status.classList.add("glow");
});
spockP2.addEventListener("click", () => {
    p2Choice = "spock";
    p2Status.innerText = "Choice has been picked! spock";
    p2Status.classList.add("glow");
});


//Game Logic for 1v1
function checkWin() {
    //p1 picks rock
    switch (p1Choice == "rock") {
        case (p2Choice == "rock"):
            result.innerText = "Its a Tie!";

            break;
        case (p2Choice == "paper"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Paper beats Rock!";
            break;
        case (p2Choice == "scissors"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Rock beats Scissors!";
            break;
        case (p2Choice == "lizard"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Rock beats Lizard!";
            break;
        case (p2Choice == "spock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Spock beats Rock!";
            break;
        default:
            console.log("Rock was not picked by p1")
    }

    //p1 picks paper
    switch (p1Choice == "paper") {
        case (p2Choice == "rock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Rock!";

            break;
        case (p2Choice == "paper"):
            result.innerText = "Its a Tie!";

            break;
        case (p2Choice == "scissors"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Scissors beats paper!";
            break;
        case (p2Choice == "lizard"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Lizard beats paper!";
            break;
        case (p2Choice == "spock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Spock!";
            break;
        default:
            console.log("paper was not picked by p1")
    }

    //p1 picks scissors
    switch (p1Choice == "scissors") {
        case (p2Choice == "rock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Rock beats Scissors!";
            break;
        case (p2Choice == "paper"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Scissors beats paper!";
            break;
        case (p2Choice == "scissors"):
            result.innerText = "Its a Tie!";

            break;
        case (p2Choice == "lizard"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Scissors beats Lizard!";
            break;
        case (p2Choice == "spock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Spock beats scissors!";
            break;
        default:
            console.log("Scissors was not picked by p1")
    }

    //p1 picks Lizard
    switch (p1Choice == "lizard") {
        case (p2Choice == "rock"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Rock beats Lizard!";
            break;
        case (p2Choice == "paper"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Paper beats Lizard!";
            break;
        case (p2Choice == "scissors"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Scissors beats Lizard!";
            break;
        case (p2Choice == "lizard"):
            result.innerText = "Its a Tie!";

            break;
        case (p2Choice == "spock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Lizard beats Spock!";
            break;
        default:
            console.log("Lizard was not picked by p1")
    }

    //p1 picks Spock
    switch (p1Choice == "spock") {
        case (p2Choice == "rock"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Spock beats Rock!";
            break;
        case (p2Choice == "paper"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Paper beats Spock!";
            break;
        case (p2Choice == "scissors"):
            p1Status.innerText = "You won a point!";
            p2Status.innerText = "You lost a point!";
            result.innerText = "Spock beats Scissors!";
            break;
        case (p2Choice == "lizard"):
            p1Status.innerText = "You lost a point!";
            p2Status.innerText = "You won a point!";
            result.innerText = "Lizard beats Spock!";
            break;
        case (p2Choice == "spock"):
            result.innerText = "Its a Tie!";

            break;
        default:
            console.log("Rock was not picked by p1")
    }
}