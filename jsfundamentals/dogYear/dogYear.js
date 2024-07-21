
//this variable keeps my human age.
let myAge=48;
//this variable contains the 2 first years
let earlyYears=2;
earlyYears*=10.5;
console.log(earlyYears)
//this variable gives my age less 2 first years
let laterYears= myAge-2;
console.log(myAge);
console.log(laterYears);
//this variable calculate the dog age after 2 years
laterYears*=4
console.log(laterYears)
//this variables calculates my dog years
let myAgeInDogYears=earlyYears+laterYears;
console.log(myAgeInDogYears)
//this variable contains my name in lowercase letters
let myName='PATRICK'.toLowerCase();
 console.log(`My name is ${myName}. I am ${ myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);

export function sum(a,b) {
    return a+b
}

 export {myAge, earlyYears, laterYears, myAgeInDogYears, myName }