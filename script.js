//Global variables
//score Variables
let humanScore = 0;
let computerScore = 0;
//rounds played
let roundNum = 1;
const maxRounds = 6;

//Function to create a new paragraph and append it to the display
function appendToDisplay(message) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    display.appendChild(newParagraph);
}

//Function to create a new header and append it to the display
function roundHeader(message) {
    const newHeader = document.createElement("h2");
    newHeader.textContent = message;
    display.appendChild(newHeader);
}

//Function to update scores in the results div
function updateScores() {
    results.textContent = "Your score: " + humanScore + " | CPU score: " + computerScore;
}

//Function to get a random number from 0 to max
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice() 
{
    const num = getRandomInt(3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

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

    //Update the display with round details
    roundHeader("Round " + roundNum + ":")
    appendToDisplay("You chose: " + humanChoice);
    appendToDisplay("CPU chose: " + computerChoice);
    appendToDisplay(roundResult);
    updateScores();

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

///Reference to the display area where game messages will be shown
const display = document.getElementById("display");

//Reference to the results area where scores will be displayed
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