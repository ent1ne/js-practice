function main() {
  let playerSelection = getPlayerSelection()
  let computerSelection = getComputerSelection();
  const roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
}

function getPlayerSelection() {
  let playerChoice;
  while (true) {
    playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      return playerChoice;
    } else {
      alert("Wrong choice. Please enter 'rock', 'paper', or 'scissors'.");
    }
  }
}

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Computer chose ${playerSelection} too. It's a tie!`;
  } else if (
    playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"
  ) {
    return `Computer chose ${computerSelection} \nYou win, ${playerSelection} beats ${computerSelection}`;
  } else { 
    return `Computer chose ${computerSelection} \nYou lose, ${computerSelection} beats ${playerSelection}`;
  }
}

main()
