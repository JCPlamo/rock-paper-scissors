//Global Variables
let humanScore = 0;
let computerScore = 0;

//function to get a random number from 0 to max
//when max = 3, the range will be 0-2, giving 3 possible numbers
//used for the computers choice for rock (0), paper (1), or scissors (2)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() 
{
    num = getRandomInt(3);
    if (num == 0)
    {
        console.log("CPU: Rock");
        return "rock";
    }
    else if (num == 1)
    {
        console.log("CPU: Paper");
        return "paper";
    }
    else if (num == 2)
    {
        console.log("CPU: Scissors");
        return "scissors";
    }
}

function getHumanChoice()
{
    let choice = prompt("Will you choose rock, paper, or scissors? ");
    if (choice.toLowerCase() == "rock")
    {
        console.log("You chose rock");
        return "rock";
    }
    else if (choice.toLowerCase() == "paper")
    {
        console.log("You chose paper");
        return "paper";
    }
    else if (choice.toLowerCase() == "scissors")
    {
        console.log("You chose scissors");
        return "scissors";
    }
    else
    {
        console.log("Not a valid choice.");
        return;
    }
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == computerChoice)
    {
        console.log("TIE. You both chose " + humanChoice + ".")
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") ||(humanChoice == "scissors" && computerChoice == "paper"))
    {
        console.log("You win!. " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }
    else
    {
        console.log("You lose!. " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
    console.log("Your score: " + humanScore + " | CPU score: " + computerScore);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)