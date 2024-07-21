console.log('hi');
const getUserChoice=userInput=>{
   userInput.toLowerCase()
    if (userInput.toLowerCase()==='rock') {
        return userInput.toLowerCase();
    } else if(userInput.toLowerCase()==='paper'){
        return userInput.toLowerCase();      
    } else if(userInput.toLowerCase()==='scissors'){
        return userInput.toLowerCase();
    } else {
        return('Invalid choice');
    }
}
let randomNumber=Math.floor(Math.random()*3)
function getComputerChoice(randomNumber){
    
    if(randomNumber===0) {
      return 'rock';
    }else if(randomNumber===1){
      return 'paper';
    } else if (randomNumber===2){
      return 'scissors';
    } else{
      console.log('invalid choice')
    }
  }
  console.log(getComputerChoice())
  let userChoice=getUserChoice()
  let computerChoice=getComputerChoice()
  function determineWinner(userChoice, computerChoice){
    if (userChoice===computerChoice){
      return "It's a tie game!"
    }
    if (userChoice==='rock'){
      if (computerChoice==='paper'){
      return 'Computer wins'
    } else {
      return 'User wins'
    }
    }
    if (userChoice==='paper'){
      if (computerChoice==='scissors'){
      return 'Computer wins'
    } else {
      return 'User Wins'
    }
    }
    if (userChoice==='scissors'){
      if (computerChoice==='rock'){
      return 'Computer wins'
    } else {
      return 'User Wins'
    }
    }
    }
