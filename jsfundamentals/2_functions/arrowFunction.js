/*Change plantNeedsWater() to use arrow function syntax. 

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
*/
const plantNeedsWater=(day)=> {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  /* 1.

Let’s refactor plantNeedsWater() to be a concise body. 
Notice that we’ve already converted the if/else statement to a 
ternary operator to make the code fit on one line.

const plantNeedsWater2 = (day) => {
  return day === 'Wednesday' ? true : false;
 */
  const plantNeedsWater2 = day =>day==='Wednesday' ? true : false;
  
  const getUserChoice=userInput=>{
    userInput.toLowerCase
    if (userInput==='rock') {
        return userInput;
    } else if(userInput==='paper'){
        return userInput;      
    } else if(userInput==='scissors'){
        return userInput;
    }else{
        console.log('Invalid choice');
    }
}
console.log(getUserChoice('ret'))
console.log(Math.floor(Math.random()*3))
    
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*3)
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
