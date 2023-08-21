function playRpsRound (playerSelection) {
    let playerChoice = '';
    let computerChoice = '';
    let computerSelection = Math.floor(Math.random() * 3);

    // Transform player selection to string
    if (playerSelection == 0) { playerChoice = 'rock'}
    else if (playerSelection == 1) { playerChoice = 'paper'}
    else if (playerSelection == 2) { playerChoice = 'scissors'};
    
    // Transform computer selection to string
    if (computerSelection == 0) { computerChoice = 'rock'}
    else if (computerSelection == 1) { computerChoice = 'paper'}
    else if (computerSelection == 2) { computerChoice = 'scissors'};

    //Check if it's a win

    let doYouWin = '';

    if (computerChoice == playerChoice) {doYouWin = "It's a draw"} else {
        if (playerChoice == 'rock' & computerChoice == 'paper') { doYouWin = "You lose"}
        else if (playerChoice == 'rock' & computerChoice == 'scissors') { doYouWin = "You win"}
        else if (playerChoice == 'paper' & computerChoice == 'rock') { doYouWin = "You win"}
        else if (playerChoice == 'paper' & computerChoice == 'scissors') { doYouWin = "You lose"}
        else if (playerChoice == 'scissors' & computerChoice == 'rock') { doYouWin = "You lose"}
        else if (playerChoice == 'scissors' & computerChoice == 'paper') { doYouWin = "You win"}
    }


    
    alert (`You selected ${playerChoice}, RPS Bot selected ${computerChoice}. \n${doYouWin}!`);
}