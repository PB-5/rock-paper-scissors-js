const choices = ["rock", "paper", "scissors"];
const score = [];

// Arrow function for computer choice randomly choosing from the choices array
let computerTurn = computerPlay => choices[Math.floor(Math.random() * choices.length)]; 

// Loop function to check if it's 5 rounds
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i); // i is passed as an argument into playRound 
    }
    document.querySelector("button").textContent = "Play Again?"; // Once first round finishes this will display as new text on button
    winCount(); // After 5 rounds are played display the console.logs function
} 

/*  function playRound(round) {  
    const playerSelection = playerChoice();  // These two Selections are assigned with functions for both computer and user inputs
    const computerSelection = computerTurn();
    const theWinner = win(playerSelection, computerSelection);
    score.push(theWinner);
    roundCount(playerSelection, computerSelection, theWinner, round);
} */

function playerChoice() {
    let input = prompt("Choose: 'Rock, Paper or Scissors!' "); 
    while (input == null) {
        input = prompt("Choose: 'Rock, Paper or Scissors!' "); // If not one of these 3 options prompt can't be exited
    }

    input = input.toLowerCase(); // If user types in caps it will still recognize the keyword
    let check = validation(input) // Check against the argument 'input' if the correct choice from the Array was selected
    
    while (check == false) {
        input = prompt("Invalid choice!"); // If not 'rock, sicssors, paper' invalid !!!
    
    while (input == null) {
        input = prompt("Choose: 'Rock, Paper or Scissors!' ");

    }
    input = input.toLowerCase();
    check = validation(input);
    }
    return input;
}

function validation(choice) {  
    return choices.includes(choice); // This function checks whether the user entered the correct choice from the Array
}

function winCount() {
    // Filters the key word in order to add the score to it
    let userWins =  score.filter((item) => item == "Human").length;
    let computerWins = score.filter((item) => item == "Computer").length;
    let ties = score.filter((item) => item == "Nobody").length;
    // After 5 rounds these logs appear at the bottom
    console.log("Results: ");
    console.log("Human wins: ", userWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
}

// The round parameter is passed as an argument in playRound 
function roundCount(userChoice, computerChoice, theWinner, round) {
    console.log("Round:" ,round)
    console.log("Human chose:" ,userChoice);
    console.log("Computer chose:" ,computerChoice);
    console.log(theWinner, "won this round!");
    console.log("--------------------------------------");
}

function win(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Nobody";
    }
    else if 
    ((userChoice === "paper" && computerChoice === "rock") || 
    (userChoice === "rock" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "paper"))
    { return "Human"; }  
    
    else {
       return "Computer";
    }
}