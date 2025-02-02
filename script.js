// create computer's pick.
   
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to get user's pick.

function getHumanChoice() {
    const choice = prompt("Please enter Rock, Paper, or Scissors:");
    
    // Handle null case (if user clicks Cancel)
    if (choice === null) {
        return "Sorry, Please enter an appropriate choice.";
    }
    
    // Convert input to lowercase for easier comparison
    const formattedChoice = choice.toLowerCase().trim();
    
    // Check if the input matches any valid choice
    if (formattedChoice === "rock" || 
        formattedChoice === "paper" || 
        formattedChoice === "scissors") {
        return formattedChoice;
    } else {
        return "Sorry, Please enter an appropriate choice.";
    }
}

// Initialize scores

let humanScore = 0;
let computerScore = 0;

// Function to play a round of the game.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}


console.log(playRound(getHumanChoice(), getComputerChoice()));