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

function getPlayerChoice() {
    let playerSelection = prompt("Enter: Rock, Paper or Scissors").toLowerCase();
    while(1) {
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            break;
        } else {
            playerSelection = prompt("Wrong choice. Please enter: Rock, Paper or Scissors").toLowerCase();
        }
    }

    return playerSelection;

}

function playRound(playerSelection, computerSelection) {

    result = 0; //0 is a tie, 1 is if player won, and -1 is if computer won

    if (playerSelection === computerSelection) {
        result = 0;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = -1;
        } else { //computerSelection ===  "scissors"
            result = 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = 1;
        } else { //computerSelection ===  "scissors"
            result = -1;
        }
    } else { //playerSelection === "scissors"
        if (computerSelection === "paper") {
            result = 1;
        } else { //computerSelection ===  "rock"
            result = -1;
        }
    }

    printMsg(result, playerSelection, computerSelection);

    return result;
}

function printMsg(result, playerSelection, computerSelection) {
    let msg="";

    if(result === 0) {
        msg = `It's a tie, ${playerSelection} is same as ${computerSelection}.`
    } else if (result === 1) {
        msg = `You win, ${playerSelection} beats ${computerSelection}.`
    } else { // result === -1
        msg = `You lose, ${computerSelection} beats ${playerSelection}.`
    }

    console.log(msg)
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("You play 5 rounds");

    for(let i = 0; i < 5; i++) {
        let roundScore = 0;
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        console.log(`Your choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`)

        roundScore = playRound(playerSelection, computerSelection)
        if (roundScore === 1) {
            playerScore++;
        } else if (roundScore === -1) {
            computerScore++;
        }
    }

    console.log("Final score:");
    console.log(`You: ${playerScore}`);
    console.log(`Comnputer: ${computerScore}`);
}

game();

