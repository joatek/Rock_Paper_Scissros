let playerMessage = document.getElementById('player-message');
playerMessage.textContent = '';

let gameMessage = document.getElementById('game-message');
gameMessage.textContent = 'Click "PLAY" to start.'

let computerMessage = document.getElementById('computer-message');
computer.textContent = '';

function play() {
    let btnRock = document.getElementById('rock-btn');
    btnRock.disabled = '';
    btnRock.style.cssText = 'cursor:pointer';
    let btnPaper = document.getElementById('paper-btn');
    btnPaper.disabled = '';
    btnPaper.style.cssText = 'cursor:pointer';
    let btnScissors = document.getElementById('scissors-btn');
    btnScissors.disabled = '';
    btnScissors.style.cssText = 'cursor:pointer';

    let btnFight = document.getElementById('fight');
    btnFight.disabled = '';
    btnFight.style.cssText = 'cursor:pointer';
    let btnNextRound = document.getElementById('nextRound');
    btnNextRound.disabled = '';
    btnNextRound.style.cssText = 'cursor:pointer';
    let btnReset = document.getElementById('reset');
    btnReset.disabled = '';
    btnReset.style.cssText = 'cursor:pointer';

    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = 'Pick your choice.'

    let gameMessage = document.getElementById('game-message');
    gameMessage.textContent = 'Welcome to the game.'

    let computerMessage = document.getElementById('computer-message');
    computerMessage.textContent = 'Computer is picking its choice.'

    let pickedIcon = document.querySelector('#computerPicked');
    pickedIcon.classList.add('fa-flip');

    let btnPlay = document.getElementById('play');
    btnPlay.disabled = 'disabled';
    btnPlay.style.cssText = 'cursor:not-allowed';
}

function rock() {
    let pickedIcon = document.querySelector('#playerPicked');
    if (pickedIcon.classList.contains('fa-circle-question')) {
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand-back-fist');
    } else if (pickedIcon.classList.contains('fa-hand')) {
        pickedIcon.classList.replace('fa-hand', 'fa-hand-back-fist');
    } else if (pickedIcon.classList.contains('fa-hand-scissors')) {
        pickedIcon.classList.replace('fa-hand-scissors', 'fa-hand-back-fist');
    }

    let messages = ['Nice choice, click "FIGHT"', 'Great choice, click "FIGHT"', 'Awesome choice, click "FIGHT"'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    let pickedPlayer = document.querySelector('.playerPicked')
    pickedPlayer.textContent = 'rock';
}

function paper() {
    let pickedIcon = document.querySelector('#playerPicked');
    if (pickedIcon.classList.contains('fa-circle-question')) {
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand');
    } else if (pickedIcon.classList.contains('fa-hand-back-fist')) {
        pickedIcon.classList.replace('fa-hand-back-fist', 'fa-hand');
    } else if (pickedIcon.classList.contains('fa-hand-scissors')) {
        pickedIcon.classList.replace('fa-hand-scissors', 'fa-hand');
    }

    let messages = ['Nice choice, click "FIGHT"', 'Great choice, click "FIGHT"', 'Awesome choice, click "FIGHT"'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    let pickedPlayer = document.querySelector('.playerPicked')
    pickedPlayer.textContent = 'paper';
}

function scissors() {
    let pickedIcon = document.querySelector('#playerPicked');
    if (pickedIcon.classList.contains('fa-circle-question')) {
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand-scissors');
    } else if (pickedIcon.classList.contains('fa-hand-back-fist')) {
        pickedIcon.classList.replace('fa-hand-back-fist', 'fa-hand-scissors');
    } else if (pickedIcon.classList.contains('fa-hand')) {
        pickedIcon.classList.replace('fa-hand', 'fa-hand-scissors');
    }

    let messages = ['Nice choice, click "FIGHT"', 'Great choice, click "FIGHT"', 'Awesome choice, click "FIGHT"'];
    let index = Math.floor(Math.random() * 3);
    let message = messages[index];
    let playerMessage = document.getElementById('player-message');
    playerMessage.textContent = message;

    let pickedPlayer = document.querySelector('.playerPicked')
    pickedPlayer.textContent = 'scissors';
   
}

// function computerPlay() {
//     choices = ['rock', 'paper', 'scissors'];
//     index = Math.floor(Math.random() * 3);
//     pick = choices[index];
//     return pick;
// }

function fight() {
    let pickedIcon = document.querySelector('#computerPicked');
    pickedIcon.classList.remove('fa-flip');

    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    let pickComputer = choices[index];
   

    if (pickComputer === 'rock') {
        let pickedIcon = document.querySelector('#computerPicked');
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand-back-fist');

        let computerMessage = document.getElementById('computer-message');
        computerMessage.textContent = 'Computer picks rock.'

        let pickedComputer = document.querySelector('.computerPicked')
        pickedComputer.textContent = 'rock';
    } else if (pickComputer === 'paper') {
        let pickedIcon = document.querySelector('#computerPicked');
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand');

        let computerMessage = document.getElementById('computer-message');
        computerMessage.textContent = 'Computer picks paper.'

        let pickedComputer = document.querySelector('.computerPicked')
        pickedComputer.textContent = 'paper';
    } else if (pickComputer === 'scissors') {
        let pickedIcon = document.querySelector('#computerPicked');
        pickedIcon.classList.replace('fa-circle-question', 'fa-hand-scissors');

        let computerMessage = document.getElementById('computer-message');
        computerMessage.textContent = 'Computer picks scissors.';

        let pickedComputer = document.querySelector('.computerPicked');
        pickedComputer.textContent = 'scissors';
    }

    let pickedComputer = document.querySelector('.computerPicked')
    let pickedPlayer = document.querySelector('.playerPicked');
    let gameMessage = document.getElementById('game-message');
    let scorePlayer = document.getElementById('scorePlayer');
    let scoreComputer = document.getElementById('scoreComputer');

    let playerScore = 0;
    let computerScore = 0;

    if (pickedPlayer.textContent === pickedComputer.textContent) {
        gameMessage.textContent = 'Fantastic, its a draw!!!'
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'rock' && pickedComputer.textContent === 'paper') {
        gameMessage.textContent = 'Computer Win! Paper beats Rock';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'paper' && pickedComputer.textContent === 'rock') {
        gameMessage.textContent = 'Player Win! Paper beats Rock';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'paper' && pickedComputer.textContent === 'scissors') {
        gameMessage.textContent = 'Computer Win! Scissors beats Paper';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'scissors' && pickedComputer.textContent === 'paper') {
        gameMessage.textContent = 'Player Win! Scissors beats Paper';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'rock' && pickedComputer.textContent === 'scissors') {
        gameMessage.textContent = 'Player Win! Rock beats Scissors';
        playerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    } else if (pickedPlayer.textContent === 'scissors' && pickedComputer.textContent === 'rock') {
        gameMessage.textContent = 'Computer Win! Rock beats Scissors';
        computerScore++;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
    }
    
}

function nextRound() {
    play();
}



// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return "It's Draw";
//     } else if (playerSelection === 'rock' && computerSelection == 'paper') {
//         computerScore++;
//         return "Computer Win! Paper beats Rock";
//     } else if (playerSelection === 'paper' && computerSelection == 'rock') {
//         playerScore++;
//         return "You Win! Paper beats Rock";
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         computerScore++;
//         return "Computer Win! Scissors beats Paper";
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         playerScore++;
//         return "You win! Scissors beats Paper";
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         computerScore++;
//         return "Computer Win! Rock beats Scissors";
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         playerScore++;
//         return "You Win! Rock beats Scissors";
//     }
// }

// function game() {

//     const rock = document.querySelector('#rock');
//     rock.addEventListener('click', playRound('rock', 'paper'));

//     const paper = document.querySelector('#paper');
//     paper.addEventListener('click', playRound('paper', computerPlay()));

//     const scissors = document.querySelector('#scissors');
//     scissors.addEventListener('click', playRound('scissors', computerPlay()));
   
//     console.log("Player Score = " + playerScore);
//     console.log("Computer Score = " + computerScore);
 
//     if (playerScore > computerScore) {
//         return "Game Over! You beat the computer!";
//     } else if (playerScore < computerScore) {
//         return "Game Over! Computer beat you!";
//     } else if (playerScore === computerScore) {
//         return "Game Over! It's a draw!"
//     }
// }

// console.log(game());

