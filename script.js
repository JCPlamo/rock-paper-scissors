//function to get a random number from 0 to max
//when max = 3, the range will be 0-2, giving 3 possible numbers
//used for the computers choice for rock (0), paper (1), or scissors (2)
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice() 
{
    num = getRandomInt(3);
    if (num == 0)
    {
        console.log("CPU chose rock");
        return "rock";
    }
    else if (num == 1)
    {
        console.log("CPU chose Paper");
        return "paper";
    }
    else if (num == 2)
    {
        console.log("CPU chose scissors");
        return "scissors";
    }
}

function getHumanChoice()
{
    let choice = prompt("Will you choose rock, paper, or scissors? ");
    if (choice.toLowerCase() == "rock")  //choice.toLowerCase() ensures that all letters in choice will be lowercase no matter the input
    {                                    //this ensures that the player can input any variation of the choices (i.e. rOcK or pAPER) and it will still be readable
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
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") ||
             (humanChoice == "scissors" && computerChoice == "paper"))
    {
        //.charAt(0).toUpperCase() capitalizes first letter, .slice(1) adds the rest of the word
        console.log("Round won!. " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + "!");
        return 1;
    }
    else
    {
        console.log("Round lost!. " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + "!");
        return 2;
    }
}

function playGame(rounds)
{
    //score Variables
    let humanScore = 0;
    let computerScore = 0;

    //loop to keep the game going x amount of rounds
    for (let i = 0; i < rounds; i++)
    {
        //choice Variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let round = playRound(humanSelection, computerSelection)
        if (round == 1) //1 = player wins
        {
            humanScore++;
        }
        if (round == 2) //2 = cpu wins
        {
            computerScore++;
        }
        console.log("Your score: " + humanScore + " | CPU score: " + computerScore);
    }
    
    //if statements to determine the winner
    if (humanScore == computerScore)
    {
        console.log("You both tied!");
    }
    else if (humanScore > computerScore)
    {
        console.log("You won the game!");
    }
    else
    {
        console.log("You lost the game!");
    }
}

//calls the playGame() function with 5 being the number of rounds
playGame(5)