const getComputerChoice = function() {
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

console.log(getComputerChoice());
console.log(getHumanChoice());