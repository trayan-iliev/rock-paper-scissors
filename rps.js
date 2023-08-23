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
    let resultEle = document.getElementById('results-text');
    let imageEle = document.getElementById('results-image');
    let playagainEle = document.getElementById('results-playagain');
    
    // Permanently change the color of the selected option
    if (playerChoice == 'rock') {document.getElementById('rock-image').src = 'img/rock-color.png'}
    else if (playerChoice == 'paper') {document.getElementById('paper-image').src = 'img/paper-color.png'}
    else if (playerChoice == 'scissors') {document.getElementById('scissors-image').src = 'img/scissors-color.png'};

    // Disable hyperlinks after a choice is made
    document.getElementById('rock-link').removeAttribute("onclick");
    document.getElementById('rock-link').removeAttribute("href");
    document.getElementById('paper-link').removeAttribute("onclick");
    document.getElementById('paper-link').removeAttribute("href");
    document.getElementById('scissors-link').removeAttribute("onclick");
    document.getElementById('scissors-link').removeAttribute("href");
    document.getElementById('rock-image-hover').classList.remove('game-choice-color-image');
    document.getElementById('paper-image-hover').classList.remove('game-choice-color-image');
    document.getElementById('scissors-image-hover').classList.remove('game-choice-color-image');

    // Create content
    let resultImage = document.createElement('img');
    let resultResult = document.createTextNode(doYouWin);
    let resultPlayAgain = document.createTextNode (`Play again?`);
    if (computerChoice == 'rock') {resultImage.src = 'img/rock-color.png'}
    else if (computerChoice == 'paper') {resultImage.src = 'img/paper-color.png'}
    else if (computerChoice == 'scissors') {resultImage.src = 'img/scissors-color.png'}

    // Append content
    imageEle.appendChild(resultImage);
    resultEle.appendChild(resultResult);
    playagainEle.appendChild(resultPlayAgain);

    // Apply fade-in class
    imageEle.classList.add('fade-in');
    resultEle.classList.add('fade-in');
    playagainEle.classList.add('fade-in');
}

function playAgain() {
    // Select containers
    let resultEle = document.getElementById('results-text');
    let imageEle = document.getElementById('results-image');
    let playagainEle = document.getElementById('results-playagain');

    // Return selection image color back to grayscale
    document.getElementById('rock-image').src = 'img/rock-bw.png';
    document.getElementById('paper-image').src = 'img/paper-bw.png';
    document.getElementById('scissors-image').src = 'img/scissors-bw.png';

    // Clear containers from previous messages
    resultEle.classList.add('fade-out');
    imageEle.classList.add('fade-out');
    playagainEle.classList.add('fade-out');

    setTimeout(() => {
    while (resultEle.firstChild) {
        resultEle.removeChild(resultEle.firstChild);
        resultEle.classList.remove('fade-out');
    }
    while (imageEle.firstChild) {
        imageEle.removeChild(imageEle.firstChild);
        imageEle.classList.remove('fade-out');
    }
    while (playagainEle.firstChild) {
        playagainEle.removeChild(playagainEle.firstChild);
        playagainEle.classList.remove('fade-out');
    } }, 400);

    // Reactivate hyperlink & onClick function call
    document.getElementById('rock-link').setAttribute('href', '#');
    document.getElementById('rock-link').setAttribute('onclick', 'playRpsRound(0)');
    document.getElementById('paper-link').setAttribute('href', '#');
    document.getElementById('paper-link').setAttribute('onclick', 'playRpsRound(1)');
    document.getElementById('scissors-link').setAttribute('href', '#');
    document.getElementById('scissors-link').setAttribute('onclick', 'playRpsRound(2)');
    document.getElementById('rock-image-hover').classList.add('game-choice-color-image');
    document.getElementById('paper-image-hover').classList.add('game-choice-color-image');
    document.getElementById('scissors-image-hover').classList.add('game-choice-color-image');

}