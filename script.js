// Starts game
console.log("ROCK PAPER SCISSORS\nFirst to 3 wins!\n\n")
console.log(`${playGame()} wins the game!`);


function playGame(){

    // Declare playerWins and cpuWins variables
    let playerWins = 0,
        cpuWins = 0,
        round = 1,
        result;

    // Start first to 3 game
    while (!(playerWins > 2 || cpuWins > 2)){

        // Round formatting in event of draw
        if (result == 0)
            console.log(`REPLAY ROUND ${round}`)
        else
            console.log(`ROUND ${round}`)

        // Gets result of new round
        result = playRound();

        // Increments round and win totals
        if (result == 1){
            playerWins++;
            round++;
        }
        else if (result == 2){
            cpuWins++;
            round++;
        }
        // Display score at end of round
        console.log(`PLAYER ${playerWins} - ${cpuWins} CPU\n\n`)
    }
    // Return winner
    if (playerWins > cpuWins)
        return "PLAYER";
    else
        return "CPU";
}

function playRound(){

    const playerSelection = rpsSelection("player");
    const cpuSelection = rpsSelection("cpu");
    
    // Display player and CPU choices
    console.log(`PLAYER chooses ${playerSelection}`);
    console.log(`CPU chooses ${cpuSelection}`);

    // Draw
    if (playerSelection == cpuSelection){
        console.log("It's a draw!")
        return 0;
    }
    // Win
    else if (playerSelection === "Rock" && cpuSelection === "Scissors" 
            || playerSelection === "Paper" && cpuSelection === "Rock" 
            || playerSelection === "Scissors" && cpuSelection === "Paper"){
                console.log("PLAYER wins the round!")
                return 1;
            }
    // Loss
    else {
        console.log("CPU wins the round!")
        return 2;
    }    
}

function rpsSelection(selector){

    const rpsArr = ["Rock", "Paper", "Scissors"];

    // Generates random CPU choice
    if (selector === "cpu")
        return rpsArr[Math.floor(Math.random() * 3)];
    else {
        while (true) {
            // Prompt for correct player input
            playerSelection = prompt("Enter selection");

            // Converts to lowercase and capitalises first letter
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

            // Accepts if a match for correct input
            if (rpsArr.includes(playerSelection))
                return playerSelection;
        }
    }
}