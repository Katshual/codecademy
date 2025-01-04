//Accessing properties
let spaceship = {
    homePlanet: 'Earth',
    cityConception: 'Lubumbashi',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    'Secret Mission' : 'Discover life outside of Earth'
};
console.log(spaceship.homePlanet)
console.log(spaceship.color)

/* 1/ Let's use the dot operator to access the value of numCrew from the spaceship object in the code editor.
Create a variable crewCount and assign the spaceship's numCrew property to it
*/
let crewCount= spaceship.numCrew
console.log(crewCount)
/* 2/ Again using the dot operator, create a variable planetArray and assign the spaceship's flightPath 
property to it
*/
let planetArray=spaceship.flightPath
console.log(planetArray)

//Bracket notation
console.log(spaceship['Fuel Type'])
let returnAnyProp=(objectName, propName)=>objectName[propName];

console.log(returnAnyProp(spaceship,'cityConception'))

/*Let's use the bracket notation to access the value of 'Active Mission' from the spaceship object
in the code editor. Create a variable isActive and assign the spaceship's 'Active Mission' property to it 
*/
let propName= 'Active Mission';
//let isActive=(spaceship, propName)=>spaceship[propName]
let isActive=spaceship[propName]
//console.log(isActive(spaceship, propName))

//property assignment
/* Reassign the color property of the spaceship object to have a value of 'glorious gold' */
spaceship.color='glorius gold';
console.log(spaceship.color)
/*Whithout changing lines 1-11, add a numEngines property with a numeric value between 1 and 10
to the spaceship object
*/
spaceship.numEngines=8
/*Use the delete operator to remove the 'secret mission' property from the spaceship object */
delete spaceship['Secret Mission']
console.log(spaceship['Secret Mission'])

//Methods
/*Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method
 retreat() which wil console.log() the retreatMessage
 */
let retreatMessage='We no longer whish to conquer your planet. It is full of dogs, which we do not care for.'
let alienShip={
    retreat(){console.log(retreatMessage)
    },
    /*Add another method to your object literal. This method, takeOff(), should console.log() the string 
'Spim... Borp... Glix... Blastoff!' */
    takeOff(){
        console.log('Spim... Borp... Glix... Blastoff!')
    }
    
}
/*Invoke the two methods: first .retreat() then .takeOff() */
console.log(alienShip.retreat())
console.log(alienShip.takeOff())






