//Logic Variables 

let players = 0;
let rounds = 99;

let p1Choice = "";
let p2Choice = "";
let p1Points = 0;
let p2Points = 0;

//player html tags
let player1NameInput = document.getElementById("player1NameInput");
let player2NameInput = document.getElementById("player2NameInput");

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");

let p1Status = document.getElementById("p1Status");
let p2Status = document.getElementById("p2Status");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");


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

let p2Column = document.getElementById("p2Column");
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
    p1Choice = "";
    p2Choice = "";
    p1Status.innerText = '';
    p2Status.innerText = '';
    result.textContent = "  ";
    goBtn.classList.remove("off");
    p1Points = 0;
    p2Points = 0;


    player1.classList = "";
    p1Status.classList = "";

    player2.classList = "";
    p2Status.classList = "";

    player2.textContent = "Player 2"
    p2Column.classList.remove("off");
    player2NameInput.classList.remove("off");
}
function resetReplay() {
    p1Choice = "";
    p2Choice = "";
    p1Status.innerText = '';
    p2Status.innerText = '';
    result.textContent = "  ";
    goBtn.classList.remove("off");
    p1Points = 0;
    p2Points = 0;


    player1.classList = "";
    p1Status.classList = "";

    player2.classList = "";
    p2Status.classList = "";
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);

    player2.textContent = "Player 2"
    if (players === 1) {
        p2Column.classList.add("off");
        startCPU();
    }


}


//Eventlisteners
//Home screen
OneVOneBtn.addEventListener("click", () => {
    players = 2;
    showRounds();
    console.log(player1NameInput.value + player2NameInput.value);
});
cpuBtn.addEventListener("click", () => {
    players = 1;
    startCPU();
    showRounds();
});
//Rounds Screen
BoOne.addEventListener("click", () => {
    rounds = 1;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);

    replay();
    player1.textContent = player1NameInput.value;
    if(players == 2){
     player2.textContent = player2NameInput.value;   
    }
    
    showGameplay();
});
BoFive.addEventListener("click", () => {
    rounds = 3;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);

    replay();
    player1.textContent = player1NameInput.value;
    if(players == 2){
        player2.textContent = player2NameInput.value;   
       }
    showGameplay();
});
BoSeven.addEventListener("click", () => {
    rounds = 4;
    p1Score.innerText = (`Score 0/${rounds}`);
    p2Score.innerText = (`Score 0/${rounds}`);

    replay();
    player1.textContent = player1NameInput.value;
    if(players == 2){
        player2.textContent = player2NameInput.value;   
       }
    showGameplay();
});

//Game Screen
homeBtn.addEventListener("click", () => {
    resetGame();
    showHome();
});
goBtn.addEventListener("click", () => {
    if (p1Choice === "" && p2Choice === "") {
        result.innerText = "Both Players have not made a choice";
        p1Status.innerText = ''
        p2Status.innerText = '';
        player1.classList = "";
        player2.classList = "";

    }
    else if (p1Choice === "") {
        result.innerText = "Player 1 has not made a choice";
        p1Status.innerText = '';
        player1.classList = "";
        player2.classList = "";
        p2Status.innerText = "Choice has been picked!";
        glowAdderP2()
    }
    else if (p2Choice === "") {
        result.innerText = "Player 2 has not made a choice";
        p2Status.innerText = '';
        player1.classList = "";
        player2.classList = "";
    }
    else {
        checkWin();
        p1Choice = "";
        p2Choice = "";
        if (players === 1) {
            startCPU();
        }
    }

    checkEnd();
});
result2.addEventListener("click", () => {
    replay();
});

//Functions
//Starts player VS CPU (game automatically starts in 1v1)
const randomRPSLS = async () => {
    const promise = await fetch(`https://rpslsapi.azurewebsites.net/RPSLS`);
    const data = await promise.text();
    p2Choice = data.toLowerCase();
    console.log(p2Choice);
}
function startCPU() {
    player2.textContent = "CPU"
    p2Column.classList.add("off");
    randomRPSLS();
    player2NameInput.classList.add("off");
}


//Adds glow to player status
function glowAdderP1() {
    p1Status.classList = "";
    p1Status.classList.add("glowPink");
}
function glowAdderP2() {
    p2Status.classList = "";
    p2Status.classList.add("glowPink");
}
//player1 btns
rockP1.addEventListener("click", () => {
    p1Choice = "rock";
    p1Status.innerText = "Choice has been picked!";
    glowAdderP1();
});
paperP1.addEventListener("click", () => {
    p1Choice = "paper";
    p1Status.innerText = "Choice has been picked!";
    glowAdderP1();
});
scissorsP1.addEventListener("click", () => {
    p1Choice = "scissors";
    p1Status.innerText = "Choice has been picked!";
    glowAdderP1();
});
lizardP1.addEventListener("click", () => {
    p1Choice = "lizard";
    p1Status.innerText = "Choice has been picked!";
    glowAdderP1();
});
spockP1.addEventListener("click", () => {
    p1Choice = "spock";
    p1Status.innerText = "Choice has been picked!";
    glowAdderP1();
});

//player 2 btns
rockP2.addEventListener("click", () => {
    p2Choice = "rock";
    p2Status.innerText = "Choice has been picked!";
    glowAdderP2();
});
paperP2.addEventListener("click", () => {
    p2Choice = "paper";
    p2Status.innerText = "Choice has been picked!";
    glowAdderP2()
});
scissorsP2.addEventListener("click", () => {
    p2Choice = "scissors";
    p2Status.innerText = "Choice has been picked!";
    glowAdderP2()
});
lizardP2.addEventListener("click", () => {
    p2Choice = "lizard";
    p2Status.innerText = "Choice has been picked!";
    glowAdderP2()
});
spockP2.addEventListener("click", () => {
    p2Choice = "spock";
    p2Status.innerText = "Choice has been picked!";
    glowAdderP2()
});


//Game Logic for 1v1
function roundReset() {
    p1Choice = "";
    p2Choice = "";
    p1Status.innerText = '';
    p2Status.innerText = '';
    player1.classList = "";
    player2.classList = "";
}




function p1Win() {
    p1Points++;
    player1.classList.add("glowGreen");
    p1Status.classList.add("glowGreen");

    player2.classList.add("glowRed");
    p2Status.classList.add("glowRed");
    p1Score.innerText = (`Score ${p1Points}/${rounds}`);
}
function p2Win() {
    p2Points++;
    player1.classList.add("glowRed");
    p1Status.classList.add("glowRed");

    player2.classList.add("glowGreen");
    p2Status.classList.add("glowGreen");
    p2Score.innerText = (`Score ${p2Points}/${rounds}`);
}

function checkWin() {

    //p1 picks rock
    if (p1Choice === "rock") {
        switch (p2Choice) {
            case ("rock"):
                result.innerText = "Its a Tie! Both chose Rock";
                roundReset()
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
    if (p1Choice === "paper") {
        switch (p2Choice) {
            case ("rock"):
                p1Status.innerText = "You won a point!";
                p2Status.innerText = "You lost a point!";
                result.innerText = "Paper beats Rock!";
                p1Win();
                break;
            case ("paper"):
                result.innerText = "Its a Tie! Both chose Paper";
                roundReset()

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
    if (p1Choice === "scissors") {
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
                roundReset()

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
    if (p1Choice === "lizard") {
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
                roundReset()

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
    if (p1Choice === "spock") {
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
                roundReset()

                break;
            default:
                console.log("Spock was not picked by p1")
        }
    }


}

function checkEnd() {
    if (p1Points === rounds) {
        p1Status.innerText = player1.textContent + " Wins!";
        p2Status.innerText = player2.textContent + " Loses!";
        goBtn.classList.add("off");
        result2.classList.remove("off");
    }
    else if (p2Points === rounds) {
        p1Status.innerText = player1.textContent + " Loses!";
        p2Status.innerText = player2.textContent + " Wins!";
        goBtn.classList.add("off");
        result2.classList.remove("off");
    }
}

function replay() {
    result2.classList.add("off");
    resetReplay();

}


