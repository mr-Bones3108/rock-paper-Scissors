let playerScore = 0
let computerScore =0
const continerDiv = document.getElementsByClassName('container')
const container = document.getElementById('display')

var playerScoreElement = document.getElementById("playerScoreValue");
var computerScoreElement = document.getElementById("computerScoreValue");


const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    // Otherwise, the computer wins
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
};

let getComputerChoice = ()=>{
    const chooseOne = ["rock", "paper", "scissor"]
    const RandomIndex = Math.floor(Math.random() * chooseOne.length)
    return chooseOne[RandomIndex]
}


const playRockPaperScissor = (userInput)=>{
    
    let computerSelection = getComputerChoice()
    
    let playerSelection = userInput.toLocaleLowerCase()


    const previousCompSelected = container.querySelector('.comp-selected');
    const previousPlayerSelected = container.querySelector('.player-selected');
    const PreviousResult = container.querySelector('.result')
    
    if (previousCompSelected) {
        container.removeChild(previousCompSelected);
    }

    if (previousPlayerSelected) {
        container.removeChild(previousPlayerSelected);
    }
    if(PreviousResult){
        container.removeChild(PreviousResult);
    }


    const compSelected = document.createElement('p');
    compSelected.textContent = `Computer Selected: ${computerSelection}`;
    compSelected.classList.add('comp-selected');
    container.appendChild(compSelected);

    const playerSelected = document.createElement('p');
    playerSelected.textContent = `Player Selected: ${playerSelection}`;
    playerSelected.classList.add('player-selected');
    container.appendChild(playerSelected);


    const result = playRound(playerSelection, computerSelection);
    const resultDiv = document.createElement('p');
    resultDiv.textContent = result
    resultDiv.classList.add('result')
    container.appendChild(resultDiv)


    updatePlayerScore(playerScore);
    updateComputerScore(computerScore); 
    if (playerScore==5){
        // console.log("playerWins")
        const playerWins = document.createElement('p')
        playerWins.textContent=`Congrats you win ur score is ${playerScore} and comp score is ${computerScore} `
        container.appendChild(playerWins)
        
        playAgain()
    }
    else if(computerScore==5){
        // console.log("ComputerWins")
        const CompWins = document.createElement('p')
        CompWins.textContent=`Computer Wins player score is ${playerScore} and comp score is ${computerScore} `
        container.appendChild(CompWins)
        
        playAgain()
    }
}


function playAgain(){
    const buttonDiv = document.createElement('button')
    buttonDiv.textContent="play Again"
    container.appendChild(buttonDiv)
    buttonDiv.classList.add("replay")
    disableButtons(playButtons);
    
    buttonDiv.addEventListener('click',function(){
        location.reload();
    })
}

// Function to update player's score
function updatePlayerScore(score) {
    playerScoreElement.textContent = score;
}

// Function to update computer's score
function updateComputerScore(score) {
    computerScoreElement.textContent = score;
}

const playButtons = document.querySelectorAll('.play');

function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

playButtons.forEach(button => {
    button.addEventListener('click', function() {
        playRockPaperScissor(button.textContent);
    });
});



