// Simulates a rock paper scissors game, first to 3 wins

const choices = ["rock", "paper", "scissors"];
let playerWins = 0,
    cpuWins = 0,
    winner = '',
    playerHand = 'left',
    cpuHand = 'right',
    playerColour = 'red',
    cpuColour = 'blue';

setButtons();
startSplash();



function loadHands() {

}

function gameplay() {

}



function setButtons() {
    const startButton = document.getElementById('startButton');
    const newGame = document.getElementById('newGame');
    const mainMenu = document.getElementById('mainMenu');
    const menuButtons = document.querySelectorAll('.menuButtons');
    const rpsSelectors = document.querySelectorAll('.rpsSelector');

    rpsSelectors.forEach(item => item.addEventListener('click', newRound));
    startButton.addEventListener('click', startGame);
    menuButtons.forEach(item => {
        item.addEventListener('click', toggleMenus);
    });
    newGame.addEventListener('click', startGame); 
    mainMenu.addEventListener('click', startSplash); 
}

function toggleMenus() {
    const menuType = this.classList[0];
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        if (menu.classList.contains(menuType)){
            menu.classList.toggle('hidden');
        }
    });
}

function startSplash() {
    toggleHide('splash', 'show');
    toggleHide('mainGame', 'hide');
}

function toggleHide(item, hideStatus) {
    const element = document.getElementById(item);
    if (hideStatus === 'hide') element.classList.add('hidden');
    else if (hideStatus === 'show') element.classList.remove('hidden');
}

function startGame() {
    toggleHide('splash', 'hide');
    toggleHide('mainGame', 'show');
    toggleHide('displayResult', 'hide');
    toggleHide('resultButtons', 'hide');
    resetResults();
    // loadHands();
    setTimeout( () => {
        toggleHide('rpsSelection', 'show');
    }, 1000);
}

function resetResults() {
    playerWins = 0,
    cpuWins = 0;
    winner = '';
    updateHUD();
}

function updateHUD() {
    const playerScore = document.getElementById('playerScore');
    const cpuScore = document.getElementById('cpuScore');
    playerScore.textContent = `PLAYER ${playerWins}`;
    cpuScore.textContent = `${cpuWins} CPU`;
}

function newRound(event) {
    getResult(event);
    gameplay();
    setTimeout(displayResult(), 2000);
}

function getResult(event) {
    let playerSelection = event.target.id;
    let cpuSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection === cpuSelection) {
        winner = 'Draw';
    }
    else if (playerSelection === "rock" && cpuSelection === "scissors" 
        || playerSelection === "paper" && cpuSelection === "rock" 
        || playerSelection === "scissors" && cpuSelection === "paper"){
        winner = 'PLAYER';
        playerWins++;
    }
    else {
        winner = 'CPU';
        cpuWins++;
    }
}

function displayResult() {
    toggleHide('displayResult', 'show');
    const resultText = document.getElementById('result');
    
    if (playerWins === 3 || cpuWins === 3){
        resultText.textContent = `${winner} wins the game!`;
        toggleHide('resultButtons', 'show');
        updateHUD();
    } else {
        if (winner === 'Draw'){
            resultText.textContent = 'Draw!';
        } else {
            resultText.textContent = `${winner} wins the round!`;
        }
        updateHUD();
        setTimeout( () => {
            toggleHide('displayResult', 'hide');
            toggleHide('rpsSelection', 'show');
        }, 1250);
    }
}