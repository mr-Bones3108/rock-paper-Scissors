let playerScore = 0
let computerScore =0
const continerDiv = document.getElementsByClassName('container')
const container = document.getElementById('display')

const playRound = (playerSelection,computerSelection)=>{
    playerSelection = playerSelection.toLocaleLowerCase()
    computerSelection = computerSelection.toLocaleLowerCase()

    if(playerSelection === computerSelection){
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`;
      }

      // Otherwise, the computer wins
      computerScore++
      return `You Lose! ${computerSelection} beats ${playerSelection}`;

};


const playRockPaperScissor = (userInput)=>{
    let getComputerChoice = ()=>{
        const chooseOne = ["rock", "paper", "scissor"]
        const RandomIndex = Math.floor(Math.random() * chooseOne.length)
        return chooseOne[RandomIndex]
    }
    
    let computerSelection = getComputerChoice()
    const compSelected = document.createElement('p')
    compSelected.textContent = `Computer Selected:  ${computerSelection}`
    container.appendChild(compSelected)
    
    let playerSelection = userInput.toLocaleLowerCase()
    const playerDiv = document.createElement('p')
    playerDiv.textContent=`player Selected:  ${playerSelection}`
    container.appendChild(playerDiv)

    console.log("player :",playerSelection)
    console.log("computer :",computerSelection)
    
    
    const result = playRound(playerSelection, computerSelection);
    const resultDiv = document.createElement('p')
    resultDiv.textContent = result
    container.appendChild(resultDiv)


    const playerScoreDiv = document.createElement('p')
    playerScoreDiv.textContent = `playerScore is ${playerScore}`
    container.appendChild(playerScoreDiv)


    const compScoreDiv = document.createElement('p')
    compScoreDiv.textContent = `computerScore is ${computerScore}`
    container.appendChild(compScoreDiv)


    const buttonDiv = document.createElement('button')
    buttonDiv.textContent="play Again"
    container.appendChild(buttonDiv)
    buttonDiv.classList.add("replay")
    
    
    buttonDiv.addEventListener('click',function(){
        location.reload();
    })
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
        disableButtons(playButtons);
    });
});



