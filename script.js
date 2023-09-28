// let playerScore = 0
// let computerScore =0
const continerDiv = document.getElementsByClassName('container')
const container = document.getElementById('display')
// container.style.background = "green"
// container.textContent = "updated"

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
            // playerScore++
            return `You Win! ${playerSelection} beats ${computerSelection}`;
          }
    
          // Otherwise, the computer wins
        //   computerScore++
          return `You Lose! ${computerSelection} beats ${playerSelection}`;

          
    };
    
    const result = playRound(playerSelection, computerSelection);
    disableButtonAll();
    const resultDiv = document.createElement('p')
    resultDiv.textContent = result
    container.appendChild(resultDiv)
    // console.log(`playerScore is ${playerScore}`)
    // console.log(`computerScore is ${computerScore}`)
    const buttonDiv = document.createElement('button')
    buttonDiv.textContent="play Again"
    container.appendChild(buttonDiv)
    buttonDiv.classList.add("replay")
    
    buttonDiv.addEventListener('click',function(){
        location.reload();
    })
}







// const game = ()=>{
//     for(let i=0; i<3;i++){
//         playRockPaperScissor()
//     }

//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//       } else if (computerScore > playerScore) {
//         console.log("Computer wins the game!");
//       } else {
//         console.log("It's a tie!");
//     }
//     playerScore=0
//     computerScore=0
    
// }

// document.getElementById("playButton").addEventListener("click", () => {
//     playRockPaperScissor()
// });

// playRockPaperScissor()




const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

function disableButtonAll(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

rockBtn.addEventListener('click', function () {
    const buttonText = rockBtn.textContent;
    playRockPaperScissor(buttonText)
    
});


paperBtn.addEventListener('click',function(){
    const buttonText = paperBtn.textContent;
    playRockPaperScissor(buttonText)
});

scissorBtn.addEventListener('click',function(){
    const buttonText = scissorBtn.textContent;
    playRockPaperScissor(buttonText)
})



