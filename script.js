// Simulates a Rock Paper Scissors game, first to 3 wins

console.log("ROCK PAPER SCISSORS\nFirst to 3 wins!\n\n")
console.log(`${playGame()} wins the game!`);


function playGame(){

    let playerWins = 0,
        cpuWins = 0,
        round = 1,
        roundWinner;

    while (!(playerWins > 2 || cpuWins > 2)){

        // Round formatting in event of draw
        if (roundWinner == 0)
            console.log(`REPLAY ROUND ${round}`)
        else
            console.log(`ROUND ${round}`)

        roundWinner = playRound();

        if (roundWinner == 1){
            playerWins++;
            round++;
        }
        else if (roundWinner == 2){
            cpuWins++;
            round++;
        }
        console.log(`PLAYER ${playerWins} - ${cpuWins} CPU\n\n`)
    }
    if (playerWins > cpuWins)
        return "PLAYER";
    else
        return "CPU";
}

function playRound(){

    const playerSelection = choiceSelection("player");
    const cpuSelection = choiceSelection("cpu");
    
    console.log(`PLAYER chooses ${playerSelection}`);
    console.log(`CPU chooses ${cpuSelection}`);

    if (playerSelection == cpuSelection){
        console.log("It's a draw!")
        return 0;
    }
    else if (playerSelection === "Rock" && cpuSelection === "Scissors" 
            || playerSelection === "Paper" && cpuSelection === "Rock" 
            || playerSelection === "Scissors" && cpuSelection === "Paper"){
                console.log("PLAYER wins the round!")
                return 1;
            }
    else {
        console.log("CPU wins the round!")
        return 2;
    }    
}

function choiceSelection(selector){

    const choices = ["Rock", "Paper", "Scissors"];

    if (selector === "cpu")
        // Generates random number that corresponds with choices array
        return choices[Math.floor(Math.random() * 3)];
    else {
        while (true) {
            playerSelection = prompt("Enter selection");
            // Formats input into readable format for later use
            playerSelection = playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1).toLowerCase();

            if (choices.includes(playerSelection))
                return playerSelection;
        }
    }
}