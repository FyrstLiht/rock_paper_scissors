// Simulates a rock paper scissors game, first to 3 wins

const choices = ["rock", "paper", "scissors"];
let playerWins = 0,
    cpuWins = 0,
    winner = '',
    playerHand = 'left',
    cpuHand = 'right',
    playerColour = 'red',
    cpuColour = 'blue',
    currentSection = 'splash';

setButtons();




function setButtons() {
    const startButton = document.getElementById('startButton');
    const menuButtons = document.querySelectorAll('.menuButtons');
    const rpsSelectors = document.querySelectorAll('.rpsSelector');
    const leftButton = document.getElementById('leftButton');

    rpsSelectors.forEach(item => item.addEventListener('click', playRound));
    startButton.addEventListener('click', startGame);
    menuButtons.forEach(item => {
        item.addEventListener('click', toggleMenus);
    });
    leftButton.addEventListener('click', newRound);
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

function startGame() {
    changeSection();
    updateHUD();
    // loadHands();
    toggleHide('rpsSelection');
}

function changeSection() {
    const sections = document.querySelectorAll('.container');
    sections.forEach(item => {
        if (item.classList.contains('hidden'))
            item.classList.remove('hidden')
        else 
            item.classList.add('hidden');
    });
}

function updateHUD() {
    const playerScore = document.getElementById('playerScore');
    const cpuScore = document.getElementById('cpuScore');
    playerScore.textContent = `PLAYER ${playerWins}`;
    cpuScore.textContent = `${cpuWins} CPU`;
}

function loadHands() {

}

function toggleHide(toHide) {
    const hideThis = document.getElementById(toHide);
    hideThis.classList.toggle('hidden');
}

function playRound(event) {
    toggleHide('rpsSelection');
    getResult(event);
    gameplay();
    displayResult();
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

function gameplay() {

}

function displayResult() {
    toggleHide('displayResult');
    const resultText = document.getElementById('result');
    
    if (playerWins === 3 || cpuWins === 3){
        resultText.textContent = `${winner} wins the game!`;
        const leftButton = getElementById('leftButton');
        leftButton.textContent = 'MAIN MENU';
        leftButton.addEventListener('click', changeSection); 
    } else {
        if (winner === 'Draw')
            resultText.textContent = 'Draw!';
        else
            resultText.textContent = `${winner} wins the round!`;
    }
    updateHUD();
}

function newRound() {
    toggleHide('displayResult');
    toggleHide('rpsSelection');
}






// function startNewGame() {
//     playerWins = 0,
//     cpuWins = 0;
//     const newRound = document.getElementById('newRound');
//     newRound.textContent = 'NEW ROUND'
//     newRound.addEventListener('click', rpsSelection);
//     newRound.removeEventListener('click', startNewGame);
//     updateHUD();
//     rpsSelection();
// }

//     setTimeout(battleResult, 2000);