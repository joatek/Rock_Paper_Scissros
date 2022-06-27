let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    index = Math.floor(Math.random() * choices.length);
    pick = choices[index];
    return pick;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's Draw";
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "Computer Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "Computer Win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "Computer Win! Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt("Pick one:", "rock, paper, scissors").toLowerCase();
        console.log(player);
        const computer = computerPlay();
        console.log(computer);
        console.log((playRound(player, computer)));
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
    }

    if (playerScore > computerScore) {
        return "Game Over! You beat the computer!";
    } else if (playerScore < computerScore) {
        return "Game Over! Computer beat you!";
    } else if (playerScore === computerScore) {
        return "Game Over! It's a draw!"
    }
}

console.log(game());

