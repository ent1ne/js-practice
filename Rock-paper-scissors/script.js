const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerSelection = event.target.textContent.toLowerCase();
    const computerSelection = getComputerSelection();
    const roundResult = playRound(playerSelection, computerSelection);
    messageDiv.innerHTML = roundResult;
    outputDiv.appendChild(messageDiv);
    updateRoundCounter();
  })
}); 

const messageDiv = document.createElement('div');
const outputDiv = document.getElementById("output");

let roundCounter = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `<br>Computer chose ${playerSelection} too</br> <br>It's a tie!</br>`;
  } else if (
    playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"
  ) {
    playerWins++
    return `<br>Computer chose ${computerSelection}</br> <br>You win, ${playerSelection} beats ${computerSelection}</br>`;
  } else {
    computerWins++ 
    return `<br>Computer chose ${computerSelection}</br> <br>You lose, ${computerSelection} beats ${playerSelection}</br>`;
  }
}

function updateRoundCounter() {
  roundCounter++;
  if (roundCounter === 5) {
    determineWinner();
  }
}

function determineWinner() {
  let winner;
  if (playerWins > computerWins) {
    winner = "Player";
  } else if (computerWins > playerWins) {
    winner = "Computer";
  } else {
    winner = "AI alignment";
  }

  const winnerMessage = `<br>Game over! ${winner} wins after 5 rounds</br> 
  <br>Player: ${playerWins} <div>Computer: ${computerWins}</div></br>
  Choose rock, paper or scissors once again to start new game`;
  messageDiv.innerHTML = winnerMessage;
  outputDiv.appendChild(messageDiv);

  roundCounter = 0;
  playerWins = 0;
  computerWins = 0;
}
