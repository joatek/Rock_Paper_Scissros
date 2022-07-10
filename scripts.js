// Text variables
let playerMessage = document.getElementById('player-message');
let gameMessage = document.getElementById('game-message');
let computerMessage = document.getElementById('computer-message');
let scorePlayer = document.getElementById('scorePlayer');
let scoreComputer = document.getElementById('scoreComputer');

// Button variables
let btnRock = document.getElementById('rock-btn');
let btnPaper = document.getElementById('paper-btn');
let btnScissors = document.getElementById('scissors-btn');
let btnNextRound = document.getElementById('nextRound');
let btnReset = document.getElementById('reset');
let btnPlay = document.getElementById('play');

// Icon variables
let pickedIconComputer = document.querySelector('#computerPicked');
let pickedIconPlayer = document.querySelector('#playerPicked');

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
    if (pickedIconPlayer.classList.contains('fa-circle-question')) {
        pickedIconPlayer.classList.replace('fa-circle-question', 'fa-hand-back-fist');
    } else if (pickedIconPlayer.classList.contains('fa-hand')) {
        pickedIconPlayer.classList.replace('fa-hand', 'fa-hand-back-fist');
    } else if (pickedIconPlayer.classList.contains('fa-hand-scissors')) {
        pickedIconPlayer.classList.replace('fa-hand-scissors', 'fa-hand-back-fist');
    }
    let messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    game('rock');
}

function clickPaperButton() {
    if (pickedIconPlayer.classList.contains('fa-circle-question')) {
        pickedIconPlayer.classList.replace('fa-circle-question', 'fa-hand');
    } else if (pickedIconPlayer.classList.contains('fa-hand-back-fist')) {
        pickedIconPlayer.classList.replace('fa-hand-back-fist', 'fa-hand');
    } else if (pickedIconPlayer.classList.contains('fa-hand-scissors')) {
        pickedIconPlayer.classList.replace('fa-hand-scissors', 'fa-hand');
    }
    let messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    game('paper');
}

function clickScissorsButton() {
    if (pickedIconPlayer.classList.contains('fa-circle-question')) {
        pickedIconPlayer.classList.replace('fa-circle-question', 'fa-hand-scissors');
    } else if (pickedIconPlayer.classList.contains('fa-hand-back-fist')) {
        pickedIconPlayer.classList.replace('fa-hand-back-fist', 'fa-hand-scissors');
    } else if (pickedIconPlayer.classList.contains('fa-hand')) {
        pickedIconPlayer.classList.replace('fa-hand', 'fa-hand-scissors');
    }
    let messages = ['Nice choice.', 'Great choice.', 'Awesome choice.'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
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
    if (pickedIconComputer.classList.contains('fa-circle-question')) {
        pickedIconComputer.classList.replace('fa-circle-question', 'fa-hand-back-fist');
    } else if (pickedIconComputer.classList.contains('fa-hand')) {
        pickedIconComputer.classList.replace('fa-hand', 'fa-hand-back-fist');
    } else if (pickedIconComputer.classList.contains('fa-hand-scissors')) {
        pickedIconComputer.classList.replace('fa-hand-scissors', 'fa-hand-back-fist');
    }
}

function paperComputerIcon() {
    if (pickedIconComputer.classList.contains('fa-circle-question')) {
        pickedIconComputer.classList.replace('fa-circle-question', 'fa-hand');
    } else if (pickedIconComputer.classList.contains('fa-hand-back-fist')) {
        pickedIconComputer.classList.replace('fa-hand-back-fist', 'fa-hand');
    } else if (pickedIconComputer.classList.contains('fa-hand-scissors')) {
        pickedIconComputer.classList.replace('fa-hand-scissors', 'fa-hand');
    }
}

function scissorsComputerIcon() {
    if (pickedIconComputer.classList.contains('fa-circle-question')) {
        pickedIconComputer.classList.replace('fa-circle-question', 'fa-hand-scissors');
    } else if (pickedIconComputer.classList.contains('fa-hand-back-fist')) {
        pickedIconComputer.classList.replace('fa-hand-back-fist', 'fa-hand-scissors');
    } else if (pickedIconComputer.classList.contains('fa-hand')) {
        pickedIconComputer.classList.replace('fa-hand', 'fa-hand-scissors');
    }
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

    if (pickedIconComputer.classList.contains('fa-hand-scissors')) {
        pickedIconComputer.classList.replace('fa-hand-scissors', 'fa-circle-question');
    } else if (pickedIconComputer.classList.contains('fa-hand-back-fist')) {
        pickedIconComputer.classList.replace('fa-hand-back-fist', 'fa-circle-question');
    } else if (pickedIconComputer.classList.contains('fa-hand')) {
        pickedIconComputer.classList.replace('fa-hand', 'fa-circle-question');
    }

    pickedIconComputer.classList.add('fa-flip');

    enablePaperButton();
    enableRockButton();
    enableScrissorsButton();
}

