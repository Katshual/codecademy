console.log("hi");
const getUserChoice = (userInput) => {
  if (!userInput || typeof userInput !== "string") {
    console.log("Invalid choice");
    return;
  }

  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice");
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  } else {
    console.log("invalid choice");
  }
}

/*let userChoice=getUserChoice()
  let computerChoice=getComputerChoice()*/
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie game!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins";
    }
    if (computerChoice === "rock") {
      return "User Wins";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins";
    }
    if (computerChoice === "paper") {
      return "User wins";
    }
  }
  if (userChoice === "bomb") {
    return "User wins!";
  }
}
function playgame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playgame();
