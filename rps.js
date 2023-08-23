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

    if (computerChoice == playerChoice) {doYouWin = "It's a draw!"} else {
        if (playerChoice == 'rock' & computerChoice == 'paper') { doYouWin = "You lose!"}
        else if (playerChoice == 'rock' & computerChoice == 'scissors') { doYouWin = "You win!"}
        else if (playerChoice == 'paper' & computerChoice == 'rock') { doYouWin = "You win!"}
        else if (playerChoice == 'paper' & computerChoice == 'scissors') { doYouWin = "You lose!"}
        else if (playerChoice == 'scissors' & computerChoice == 'rock') { doYouWin = "You lose!"}
        else if (playerChoice == 'scissors' & computerChoice == 'paper') { doYouWin = "You win!"}
    }
   
    revealResult (playerChoice, computerChoice, doYouWin)
    // alert (`You selected ${playerChoice}, RPS Bot selected ${computerChoice}. \n${doYouWin}!`);
}

function revealResult (playerChoice, computerChoice, doYouWin) {
    
    // Select containers
    let textEle = document.getElementById('results-text');
    let imageEle = document.getElementById('results-image');
    let resultEle = document.getElementById('results-result');
    
    // Clear containers from previous messages
    while (textEle.firstChild) {
        textEle.classList.remove('fade-in');
        textEle.classList.add('fade-out');
        textEle.removeChild(textEle.firstChild);
    }
    while (imageEle.firstChild) {
        imageEle.classList.remove('fade-in');
        imageEle.removeChild(imageEle.firstChild);
    }
    while (resultEle.firstChild) {
        resultEle.classList.remove('fade-in');
        resultEle.removeChild(resultEle.firstChild);
    }
    
    
    // Create content
    let resultText = document.createTextNode (`Opponent:`);
    let resultImage = document.createElement('img');
    let resultResult = document.createTextNode(doYouWin);
    if (computerChoice == 'rock') {resultImage.src = 'img/rock-color.png'}
    else if (computerChoice == 'paper') {resultImage.src = 'img/paper-color.png'}
    else if (computerChoice == 'scissors') {resultImage.src = 'img/scissors-color.png'}

    // Append content
    textEle.appendChild(resultText);
    imageEle.appendChild(resultImage);
    resultEle.appendChild(resultResult);

    // Apply fade-in class
    textEle.classList.add('fade-in');
    imageEle.classList.add('fade-in');
    resultEle.classList.add('fade-in');

}