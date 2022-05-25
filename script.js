// Simulates a rock paper scissors game, first to 3 wins

const choices = ["rock", "paper", "scissors"];
const playerArr = ["playerShoot", ""];
const cpuArr = ["cpuShoot", ""];
const animTimings = [10, 1300, 2500];
let playerWins = 0,
    cpuWins = 0,
    winner = '',
    loser = '',
    playerHand = 'left',
    playerColour = 'red',
    cpuColour = 'blue';

setButtons();
startSplash();


function startSplash() {
    toggleHide('splash', 'show');
    toggleHide('mainGame', 'hide');
}

function startGame() {
    toggleHide('splash', 'hide');
    toggleHide('mainGame', 'show');
    toggleHide('displayResult', 'hide');
    toggleHide('resultButtons', 'hide');
    resetResults();
    loadHands();
    setTimeout( () => {
        toggleHide('rpsSelection', 'show');
    }, 1000);
}

function newRound(event) {
    toggleHide('rpsSelection', 'hide');
    getResult(event);
    animateHands('playerHand', playerArr.slice());
    animateHands('cpuHand', cpuArr.slice());
    setTimeout(displayResult, 2500);
}

function getResult(event) {
    let playerSelection = event.target.id;
    let cpuSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection === cpuSelection) {
        winner = 'draw';
    }
    else if (playerSelection === "rock" && cpuSelection === "scissors" 
        || playerSelection === "paper" && cpuSelection === "rock" 
        || playerSelection === "scissors" && cpuSelection === "paper"){
        winner = 'player';
        loser = 'cpu';
        playerWins++;
    }
    else {
        winner = 'cpu';
        loser = 'player';
        cpuWins++;
    }
}

function animateHands(handID, array) {
    const currentHand = document.getElementById(handID);
    let i = 0;
    if (winner === 'draw') {
        array[1] = `${handID.replace("Hand", "")}Win`;
    } else if (winner === handID.replace("Hand", "")){
        array[1] = `${winner}Win`;
    } else {
        array[1] = `${loser}Lose`;
    }
    array.forEach(item => {
        setTimeout( () => {
            currentHand.classList.add(item);
        }, animTimings[i]);
        setTimeout( () => {
            currentHand.classList.remove(item);
        }, animTimings[2]);
        i++;
    });
}

function displayResult() {
    toggleHide('displayResult', 'show');
    const resultText = document.getElementById('result');
    
    if (playerWins === 3 || cpuWins === 3){
        resultText.textContent = `${winner} wins the game!`;
        toggleHide('resultButtons', 'show');
        updateHUD();
    } else {
        if (winner === 'draw'){
            resultText.textContent = 'draw!';
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

function setButtons() {
    const startButton = document.getElementById('startButton');
    const newGame = document.getElementById('newGame');
    const mainMenu = document.getElementById('mainMenu');
    const menuButtons = document.querySelectorAll('.menuButtons');
    const rpsSelectors = document.querySelectorAll('.rpsSelector');
    const leftHandSelect = document.getElementById('leftHandSelect');
    const rightHandSelect = document.getElementById('rightHandSelect');

    rpsSelectors.forEach(item => {
        item.addEventListener('click', newRound);
    });
    startButton.addEventListener('click', startGame);
    menuButtons.forEach(item => {
        item.addEventListener('click', toggleMenus);
    });
    newGame.addEventListener('click', startGame); 
    mainMenu.addEventListener('click', startSplash);
    leftHandSelect.addEventListener('click', switchHands);
    rightHandSelect.addEventListener('click', switchHands);
}

function loadHands() {
    const hands = document.querySelectorAll('.hands');
    hands.forEach(item => {
        item.classList.remove('hidden');
    });
    hands[0].textContent = `${playerHand} hand`;
    if (playerHand === 'left') hands[1].textContent = 'right hand';
    else hands[1].textContent = 'left hand';
}

function switchHands(event) {
    if (event.target.id === 'leftHandSelect') {
        toggleHide('leftHandCust', 'show');
        toggleHide('rightHandCust', 'hide');
        playerHand = 'left';
    } else {
        toggleHide('leftHandCust', 'hide');
        toggleHide('rightHandCust', 'show');
        playerHand = 'right';
    }
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

function toggleHide(item, hideStatus) {
    const element = document.getElementById(item);
    if (hideStatus === 'hide') element.classList.add('hidden');
    else if (hideStatus === 'show') element.classList.remove('hidden');
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