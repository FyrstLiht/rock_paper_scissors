console.log(playGame());

function playGame(){

    // Declare round, playerWins and cpuWins variables
    playerWins = 0,
    cpuWins = 0;

    // Start 5 round game
    for (let round = 1; round < 6; round++){
        playRound()
    }

    console.log(playerWins)
    console.log(cpuWins)

    // True = player win
    if (playerWins > cpuWins)
        return "You win the game";
    else
        return "CPU wins the game";
}

function playRound(){
    // Prompt for player input
    let playerSelection = prompt("Enter selection");

    // Call cpuPlay
    let cpuSelection = cpuPlay();

    console.log(playerSelection)
    console.log(cpuSelection)

    // Draw
    if (playerSelection == cpuSelection){
        console.log("Draw");
        playRound();

    // Win
    } else if (playerSelection === "rock" && cpuSelection === "scissors"){
            console.log("You win");
            playerWins++;
    } else if (playerSelection === "paper" && cpuSelection === "rock"){
            console.log("You win");
            playerWins++;
    } else if (playerSelection === "scissors" && cpuSelection === "paper"){
            console.log("You win");
            playerWins++;
    }
    // Loss
    else {
        console.log("You lose");
        cpuWins++;
    }
}

function cpuPlay(){

    const rpsArr = ["rock", "paper", "scissors"];
    // Return randomly selected RPS
    return rpsArr[Math.floor(Math.random() * 3)];
}