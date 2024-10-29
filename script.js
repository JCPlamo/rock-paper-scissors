//Global variables
//score Variables
let humanScore = 0;
let computerScore = 0;
//rounds played
let roundNum = 1;
const maxRounds = 6;

// Function to create a new paragraph and append it to the display
function appendToDisplay(message) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    display.appendChild(newParagraph);
}

//Function to update scores in the results div
function updateScores() {
    results.textContent = "Your score: " + humanScore + " | CPU score: " + computerScore;
}

//function to get a random number from 0 to max
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice() 
{
    const num = getRandomInt(3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

// function getHumanChoice()
// {
//     let choice = prompt("Will you choose rock, paper, or scissors? ");
//     if (choice.toLowerCase() == "rock")  //choice.toLowerCase() ensures that all letters in choice will be lowercase no matter the input
//     {                                    //this ensures that the player can input any variation of the choices (i.e. rOcK or pAPER) and it will still be readable
//         return "rock";
//     }
//     else if (choice.toLowerCase() == "paper")
//     {
//         return "paper";
//     }
//     else if (choice.toLowerCase() == "scissors")
//     {
//         return "scissors";
//     }
// }

function playRound(humanChoice, computerChoice)
{
    let roundResult = "";
    if (humanChoice == computerChoice)
    {
        roundResult = "\nTIE. You both chose " + humanChoice + ".\n";
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") ||
             (humanChoice == "scissors" && computerChoice == "paper"))
    {
        //.charAt(0).toUpperCase() capitalizes first letter, .slice(1) adds the rest of the word
        roundResult = "Round won! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + "!\n";
        humanScore++;
    }
    else
    {
        roundResult = "Round lost! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + "!\n";
        computerScore++;
    }

    // Update the display with round details
    appendToDisplay("Round " + roundNum + ":")
    appendToDisplay("You chose: " + humanChoice);
    appendToDisplay("CPU chose: " + computerChoice);
    appendToDisplay(roundResult);
    updateScores(); // Update the scores

    roundNum++;
    if (roundNum === maxRounds)
    {
        displayFinalResults();
    }

}

function displayFinalResults()
{
    let finalMessage = "";
    if (humanScore == computerScore)
    {
        finalMessage = "You both tied!";
    }
    else if (humanScore > computerScore)
    {
        finalMessage = "You won the game!";
    }
    else
    {
        finalMessage = "You lost the game!";
    }
    appendToDisplay(finalMessage);
    results.textContent = "Final scores: Your score: " + humanScore + " | CPU score: " + computerScore;

    //Disables buttons after max amount of rounds is reached
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

// function playGame(rounds)
// {
//     //score Variables
//     let humanScore = 0;
//     let computerScore = 0;

//     //loop to keep the game going x amount of rounds
//     for (let i = 0; i < rounds; i++)
//     {
//         //choice Variables
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         let round = playRound(humanSelection, computerSelection)
//         if (round == 1) //1 = player wins
//         {
//             humanScore++;
//         }
//         if (round == 2) //2 = cpu wins
//         {
//             computerScore++;
//         }
//         console.log("Your score: " + humanScore + " | CPU score: " + computerScore);
//     }
    
//     //if statements to determine the winner
//     if (humanScore == computerScore)
//     {
//         console.log("You both tied!");
//     }
//     else if (humanScore > computerScore)
//     {
//         console.log("You won the game!");
//     }
//     else
//     {
//         console.log("You lost the game!");
//     }
// }

//calls the playGame() function with 5 being the number of rounds
//playGame(5)

const display = document.getElementById("display");
const results = document.getElementById("results");

//Button event listeners
const btnRock = display.querySelector("#btnRock");
btnRock.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

const btnPaper = display.querySelector("#btnPaper");
btnPaper.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

const btnScissors = display.querySelector("#btnScissors");
btnScissors.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});