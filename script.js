// Simulates a ROCK PAPER SCISSORS game, first to 3 wins

// TODO
// Colour selector stand in
// Center selection, absolute continue
// Gameplay screen with HUD
// Absolutely positioned rps selection screen


const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerWins = 0,
    cpuWins = 0,
    winner = '',
    currentSection = 'splash';

updateScore();
changeSection(currentSection);

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', handSelection);


function updateScore() {
    const playerScore = document.getElementById('playerScore');
    const cpuScore = document.getElementById('cpuScore');
    playerScore.textContent = `PLAYER ${playerWins}`;
    cpuScore.textContent = `${cpuWins} CPU`;
}

function changeSection(currentSection) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(item => {
        if (item.classList.contains(currentSection))
            item.classList.remove('hidden')
        else 
            item.classList.add('hidden');
    });
}

function handSelection() {
    changeSection('handSelection');
    const continueGame = document.getElementById('continueGame');
    // continueGame.addEventListener('click', rpsSelection);
}




