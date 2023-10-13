const buttons = document.querySelectorAll(".rps-btn");
const results = document.querySelector(".results");

let playerScore = 0;
let computerScore = 0;

for(const button of buttons) {
    button.addEventListener("click", playRound)
}

function playRound(e) {
    if(playerScore === 5 || computerScore === 5) {
        return 0;
    }
    const playerSelection = e.target.innerText;
    const computerSelection = getComputerChoice();
    let roundResult = 0; //0 is a tie, 1 is if player won, and -1 is if computer won

    if (playerSelection === computerSelection) {
        roundResult = 0;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundResult = -1;
        } else { //computerSelection ===  "scissors"
            roundResult = 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = 1;
        } else { //computerSelection ===  "scissors"
            roundResult = -1;
        }
    } else { //playerSelection === "scissors"
        if (computerSelection === "paper") {
            roundResult = 1;
        } else { //computerSelection ===  "rock"
            roundResult = -1;
        }
    }

    const p1 = document.createElement("p");
    p1.textContent = `Computer choice is: ${computerSelection}`;
    results.appendChild(p1);

    msg = getMsg(roundResult, playerSelection, computerSelection);
    const p2 = document.createElement("p");
    p2.textContent = msg;
    results.appendChild(p2);

    updateScore(roundResult);
    const resultMsg = `You: ${playerScore}, computer: ${computerScore}`;
    const p3 = document.createElement("p");
    p3.textContent = resultMsg;
    results.appendChild(p3);
    
    const br = document.createElement("br");
    results.appendChild(br);


    if (computerScore === 5){
        const finalScore = document.createElement("p");
        finalScore.textContent = `Game over, Computer won :(`
        results.appendChild(finalScore)
    } else if (playerScore === 5) {
        const finalScore = document.createElement("p");
        finalScore.textContent = `Game over, You won! :)`
        results.appendChild(finalScore)
    }


    return roundResult;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
    }

    return choice;
}

function getMsg(result, playerSelection, computerSelection) {
    let msg="";

    if(result === 0) {
        msg = `It's a tie, ${playerSelection} is same as ${computerSelection}.`
    } else if (result === 1) {
        msg = `You win, ${playerSelection} beats ${computerSelection}.`
    } else { // result === -1
        msg = `You lose, ${computerSelection} beats ${playerSelection}.`
    }

    return msg;
}

function updateScore(result) {
    if(result === 1) {
        playerScore++;
    } else if (result === -1) {
        computerScore++;
    }
}

