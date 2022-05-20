// Simulates a ROCK PAPER SCISSORS game, first to 3 wins

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerWins = 0,
    cpuWins = 0,
    winner = '',
    playerHand = 'left',
    cpuHand = 'right',
    playerColour = 'red',
    cpuColour = 'blue',
    currentSection = 'splash';

// updateScore();
// changeSection(currentSection);

const startButton = document.getElementById('startButton');
const menuButtons = document.querySelectorAll('.menuButtons');
// const backToSplash = document.getElementById('backToSplash');

startButton.addEventListener('click', playGame);
// backToSplash.addEventListener('click', changeSection);
menuButtons.forEach(item => {
    item.addEventListener('click', toggleMenus);
});


// function updateScore() {
//     const playerScore = document.getElementById('playerScore');
//     const cpuScore = document.getElementById('cpuScore');
//     playerScore.textContent = `PLAYER ${playerWins}`;
//     cpuScore.textContent = `${cpuWins} CPU`;
// }

function changeSection() {
    const sections = document.querySelectorAll('.container');
    sections.forEach(item => {
        if (item.classList.contains('hidden'))
            item.classList.remove('hidden')
        else 
            item.classList.add('hidden');
    });
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

function playGame() {
    changeSection();
}




// function rpsSelection() {
//     changeSection('rpsSelection');
//     const rpsSelectors = document.querySelectorAll('.rpsSelector');
//     rpsSelectors.forEach(item => item.addEventListener('click', playRound));
//     rpsSelectors.forEach(item => item.addEventListener('mouseenter', hoverChoice));
//     rpsSelectors.forEach(item => item.addEventListener('mouseleave', hoverChoice));
// }

// function hoverChoice(event) {
//     this.classList.toggle('hoverChoice');
// }

// function playRound(event) {
    
//     let playerSelection = event.target.id;
//     let cpuSelection = choices[Math.floor(Math.random() * 3)];

//     const battleSelections = document.querySelector('.battleSelections');
//     battleSelections.textContent = `${playerSelection} VS ${cpuSelection}`;
//     battleSelections.textContent.toUpperCase();

//     if (playerSelection === cpuSelection) {
//         winner = 'Draw';
//     }
//     else if (playerSelection === "ROCK" && cpuSelection === "SCISSORS" 
//         || playerSelection === "PAPER" && cpuSelection === "ROCK" 
//         || playerSelection === "SCISSORS" && cpuSelection === "PAPER"){
//         winner = 'PLAYER';
//         playerWins++;
//     }
//     else {
//         winner = 'CPU';
//         cpuWins++;
//     }
//     updateScore();
//     displayResult()
//     doBattle();
// }

// function displayResult() {
//     const resultText = document.querySelector('.resultText');
//     if (playerWins === 3 || cpuWins === 3)
//         resultText.textContent = `${winner} wins the game!`;
//     else {
//         if (winner === 'Draw')
//             resultText.textContent = 'Draw!';
//         else
//             resultText.textContent = `${winner} wins the round!`;
//     }
// }

// function doBattle() {
//     changeSection('battle');
//     setTimeout(battleResult, 2000);
// }

// function battleResult() {
//     changeSection('battleResult');
//     const newRound = document.getElementById('newRound');
//     if (playerWins === 3 || cpuWins === 3){
//         newRound.textContent = 'NEW GAME';
//         newRound.addEventListener('click', startNewGame);
//     }
//     else {
//         newRound.textContent = 'NEW ROUND'
//         newRound.addEventListener('click', rpsSelection);
//     }
// }

// function startNewGame() {
//     playerWins = 0,
//     cpuWins = 0;
//     const newRound = document.getElementById('newRound');
//     newRound.textContent = 'NEW ROUND'
//     newRound.addEventListener('click', rpsSelection);
//     newRound.removeEventListener('click', startNewGame);
//     updateScore();
//     rpsSelection();
// }