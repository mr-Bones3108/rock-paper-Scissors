// let playerScore = 0
// let computerScore =0

const playRockPaperScissor = ()=>{
    let getComputerChoice = ()=>{
        const chooseOne = ["rock", "paper", "scissor"]
        const RandomIndex = Math.floor(Math.random() * chooseOne.length)
        return chooseOne[RandomIndex]
    }
    
    let computerSelection = getComputerChoice()
    
    const userInput = prompt('Please type between:- rock, paper, scissor');
    let playerSelection = userInput.toLocaleLowerCase()
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

document.getElementById("playButton").addEventListener("click", () => {
    playRockPaperScissor()
});








