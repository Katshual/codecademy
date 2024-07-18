//JS destructuring assignment shorthand syntax (permet  d'accéder aux propriétés d'un objet)
const rubikCubeFacts={
    possiblePermutations: '43, 252, 003, 274, 489, 856, 000',
    invented: '1974',
    largestCube: '17x17x17'

};

const {possiblePermutations, invented, largestCube}= rubikCubeFacts;
console.log(possiblePermutations)
console.log(invented);
console.log(largestCube);

//shorthand property name syntax for object creation
const activity='Surfing';
const beach={activity};
console.log(beach)

//this Keyword
const cat={
    name: 'Pipey',
    age: 8,
    whatName(){
        return this.name
    }
};
console.log(cat.whatName())

//javascript function this
const restaurant={
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats(){
        //this refers to the restaurant object and it's used to access its properties
        return this.seatCapacity-this.numCustomers;
    }
}
console.log(restaurant.availableSeats())

