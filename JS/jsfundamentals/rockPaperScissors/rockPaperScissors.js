const getUserChoice = (userInput) => {
  if (!userInput || typeof userInput !== "string") {
    console.log("Invalid choice");
    return null;
  }

  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice");
    return null;
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie game!";
  }

  if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer wins" : "User wins";
  }

  if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer wins" : "User wins";
  }

  if (userChoice === "scissors") {
    return computerChoice === "rock" ? "Computer wins" : "User wins";
  }
}

function playgame() {
  // Simuler une entrée utilisateur (remplacez par un prompt si nécessaire)
  const userInput = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).trim();

  let userChoice = getUserChoice(userInput);

  if (!userChoice) {
    console.log("Game aborted due to invalid input.");
    return;
  }

  let computerChoice = getComputerChoice();

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  let result = determineWinner(userChoice, computerChoice);

  console.log(result);
}

playgame();
