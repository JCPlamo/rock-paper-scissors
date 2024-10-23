function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(num) 
{
    let choice = num;
    if (choice == 0)
    {
        return "Rock";
    }
    else if (choice == 1)
    {
        return "Paper";
    }
    else if (choice == 2)
    {
        return "Scissors";
    }
}

function getHumanChoice()
{
    let choice = prompt("Will you choose rock, paper, or scissors? ");
    if (choice.toLowerCase() == "rock")
    {
        return "You chose rock";
    }
    else if (choice.toLowerCase() == "paper")
    {
        return "You chose paper";
    }
    else if (choice.toLowerCase() == "scissors")
    {
        return "You chose scissors";
    }
    else
    {
        return "Not a valid choice.";
    }
}

console.log(getComputerChoice(getRandomInt(3)))
console.log(getPlayerChoice())