// Text variables
const playerMessage = document.getElementById('player-message');
const gameMessage = document.getElementById('game-message');
const computerMessage = document.getElementById('computer-message');
const scorePlayer = document.getElementById('scorePlayer');
const scoreComputer = document.getElementById('scoreComputer');

// Button variables
const btnRock = document.getElementById('rock-btn');
const btnPaper = document.getElementById('paper-btn');
const btnScissors = document.getElementById('scissors-btn');
const btnNextRound = document.getElementById('nextRound');
const btnReset = document.getElementById('reset');
const btnPlay = document.getElementById('play');

// Icon variables
const pickedIconComputer = document.querySelector('#computerPicked');
const pickedIconPlayer = document.querySelector('#playerPicked');

// Score variables
let playerScore = 0;
let computerScore = 0;


playerMessage.textContent = '';
gameMessage.textContent = 'Click "PLAY" to start the game.'

function enableRockButton() {
    btnRock.disabled = '';
    btnRock.style.cssText = 'cursor:pointer';
}

function disableRockButton() {
    btnRock.disabled = 'disabled';
    btnRock.style.cssText = 'cursor:not-allowed';
}

function enablePaperButton() {
    btnPaper.disabled = '';
    btnPaper.style.cssText = 'cursor:pointer';
}

function disablePaperButton() {
    btnPaper.disabled = 'disabled';
    btnPaper.style.cssText = 'cursor:not-allowed';
}

function enableScrissorsButton() {
    btnScissors.disabled = '';
    btnScissors.style.cssText = 'cursor:pointer';
}

function disableScrissorsButton() {
    btnScissors.disabled = 'disabled';
    btnScissors.style.cssText = 'cursor:not-allowed';
}


function enableResetButton() {
    btnReset.disabled = '';
    btnReset.style.cssText = 'cursor:pointer';
}

function disableResetButton() {
    btnReset.disabled = 'disabled';
    btnReset.style.cssText = 'cursor:not-allowed';
}

function enablePlayButton() {
    btnPlay.disabled = '';
    btnPlay.style.cssText = 'cursor:pointer';
}

function disablePlayButton() {
    btnPlay.disabled = 'disabled';
    btnPlay.style.cssText = 'cursor:not-allowed';
}

function clickPlayButton() {
    enableRockButton();
    enablePaperButton();
    enableScrissorsButton();
    enableResetButton();
    playerMessage.textContent = 'Pick your choice.'
    gameMessage.textContent = 'Welcome to Rock, Paper, Scissors game.'
    computerMessage.textContent = 'Computer is picking its choice.'
    pickedIconComputer.classList.add('fa-flip');
    disablePlayButton();
}


function clickRockButton() {

    pickedIconPlayer.className = 'fa-regular fa-hand-back-fist';
    
    let messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    game('rock');
}

function clickPaperButton() {

    pickedIconPlayer.className = 'fa-regular fa-hand';
    
    let messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    game('paper');
}

function clickScissorsButton() {

    pickedIconPlayer.className = 'fa-regular fa-hand-scissors';
    
    const messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    const message = messages[index];
    const playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    game('scissors');
}

function computerPick() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    pick = choices[index];
    return pick;
}

function rockComputerIcon() {
    pickedIconComputer.className = 'fa-regular fa-hand-back-fist'; 
}

function paperComputerIcon() {
    pickedIconComputer.className = 'fa-regular fa-hand';
}

function scissorsComputerIcon() {
    pickedIconComputer.className = 'fa-regular fa-hand-scissors';
}

function game(playerPicked) {
    const computerPicked = computerPick();

    if (computerPicked === 'rock') {
        rockComputerIcon();
        computerMessage.textContent = 'Computer picks rock.'
    } else if (computerPicked === 'paper') {
        paperComputerIcon();
        computerMessage.textContent = 'Computer picks paper.'
    } else if (computerPicked === 'scissors') {
        scissorsComputerIcon();
        computerMessage.textContent = 'Computer picks scissors.';
    }
    pickedIconComputer.classList.remove('fa-flip');


    if (playerPicked === computerPicked) {
        gameMessage.textContent = 'Fantastic, this round is a draw!!!'
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'rock' && computerPicked === 'paper') {
        gameMessage.textContent = 'Computer Win! Paper beats Rock';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'paper' && computerPicked === 'rock') {
        gameMessage.textContent = 'Player Win! Paper beats Rock';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'paper' && computerPicked === 'scissors') {
        gameMessage.textContent = 'Computer Win! Scissors beats Paper';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'scissors' && computerPicked === 'paper') {
        gameMessage.textContent = 'Player Win! Scissors beats Paper';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'rock' && computerPicked === 'scissors') {
        gameMessage.textContent = 'Player Win! Rock beats Scissors';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (playerPicked === 'scissors' && computerPicked === 'rock') {
        gameMessage.textContent = 'Computer Win! Rock beats Scissors';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    }

    if (playerScore === 5) {
        gameMessage.textContent = 'Game over. You win!!!. Click "RESET/PLAY AGAIN".';
        disablePaperButton();
        disableRockButton();
        disableScrissorsButton();
    } else if (computerScore === 5) {
        gameMessage.textContent = 'Game over. Computer win!!!. Click "RESET/PLAY AGAIN".';
        disablePaperButton();
        disableRockButton();
        disableScrissorsButton();
    }
}

function clickResetButton() {
    playerScore = 0;
    computerScore = 0;

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;

    playerMessage.textContent = 'Pick your choice.'
    gameMessage.textContent = 'Welcome to Rock, Paper, Scissors game.'
    computerMessage.textContent = 'Computer is picking its choice.'

    pickedIconComputer.className = 'fa-regular fa-circle-question';
    pickedIconPlayer.className = 'fa-regular fa-circle-question';
    
    pickedIconComputer.classList.add('fa-flip');

    enablePaperButton();
    enableRockButton();
    enableScrissorsButton();
}

