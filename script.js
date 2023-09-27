// let playerScore = 0
// let computerScore =0
const conatinerDiv = document.querySelector('div')

const playRockPaperScissor = (userInput)=>{
    let getComputerChoice = ()=>{
        const chooseOne = ["rock", "paper", "scissor"]
        const RandomIndex = Math.floor(Math.random() * chooseOne.length)
        return chooseOne[RandomIndex]
    }
    
    let computerSelection = getComputerChoice()
    
    let playerSelection = userInput.toLocaleLowerCase()
    const playerDiv = document.createElement('p')
    playerDiv.textContent=`player Selected ${playerSelection}`
    conatinerDiv.appendChild(playerDiv)

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
    console.log(result);
    // console.log(`playerScore is ${playerScore}`)
    // console.log(`computerScore is ${computerScore}`)
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



