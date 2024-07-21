//I create a constant with the kelvin temperature
const kelvin=297;
//I create a constant with celsius temperature wich equals kelvin-273
const celsius=kelvin-273;
//I create a constant with fahrenheit temperature which equals celsius*(9/5)+32
let farhenheit=celsius*(9/5)+32
//I update the variable to get an integer result
farhenheit=Math.floor(farhenheit);
console.log(`The temperature is ${ kelvin} degrees Kelvin, ${ celsius} degrees Celsius and ${ farhenheit} degrees Fahrenheit.`);
let newton=celsius*(33/100);
newton=Math.floor(newton);
console.log(`The temperature is ${ newton} degrees Newton.`);

