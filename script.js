// Starts game
console.log(`${playGame()} wins the game!`);

function playGame(){

    // Declare playerWins and cpuWins variables
    let playerWins = 0,
        cpuWins = 0;

    // Start 5 round game
    for (let round = 1; round < 6; round++){
        console.log(`ROUND ${round}`)

        if (playRound())
            playerWins++;
        else
            cpuWins++;

        // Display score of each round
        console.log(`PLAYER ${playerWins} - ${cpuWins} CPU\n\n`)
    }

    // Return winner
    if (playerWins > cpuWins)
        return "PLAYER";
    else
        return "CPU";
}

function playRound(){

    let playerSelection;
    const rpsArr = ["Rock", "Paper", "Scissors"];

    // Prompt for correct player input
    while (true){
        playerSelection = prompt("Enter selection");

        // Converts to lowercase and capitalises first letter
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

        // Accepts if a match for correct input
        if (rpsArr.includes(playerSelection))
            break;
    }

    // Generates random CPU choice
    const cpuSelection = rpsArr[Math.floor(Math.random() * 3)];

    // Display player and CPU choices
    console.log(`PLAYER chooses ${playerSelection}`);
    console.log(`CPU chooses ${playerSelection}`);

    // Draw, replays round
    if (playerSelection == cpuSelection){
        console.log("It's a tie!");
        playRound();
    }
    // Win
    else if (playerSelection === "Rock" && cpuSelection === "Scissors" 
            || playerSelection === "Paper" && cpuSelection === "Rock" 
            || playerSelection === "Scissors" && cpuSelection === "Paper"){
                console.log("PLAYER wins the round!")
                return true;
            }
    // Loss
    else {
        console.log("CPU wins the round!");
        return false;
    }    
}