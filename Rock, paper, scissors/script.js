/*
This is my first JS project — a simple "Rock, paper, scissors" game for DevTools console
Let's get you through it block by block, bloke

First, I wrote the function that will be responsible for the computer's choice in every round
Each time machine randomly chooses rock, paper or scissors in its' eternal struggle against humanity
*/

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/*
Next I've defined variables responsible for both choices in every round
There is also some error handling added for the player input
Both choices made case-insensitive and lead to uniformity by .toLowerCase() method
*/

function getPlayerChoice() {
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

let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice().toLowerCase();

/*
Now it is time to write a function that will cover the entire round of the game
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Computer chose ${playerSelection} too. It's a tie!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        return `Computer chose ${computerSelection} \nYou win! ${playerSelection} beats ${computerSelection}`;
    } else { 
        return `Computer chose ${computerSelection} \nYou lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
 
//Finally, we find the winner and print the result of completed round into DevTools console

const roundResult = playRound(playerSelection, computerSelection);
console.log(roundResult);