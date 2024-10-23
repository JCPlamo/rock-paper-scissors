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
        return "Scissor";
    }
}


console.log(getComputerChoice(getRandomInt(3)))