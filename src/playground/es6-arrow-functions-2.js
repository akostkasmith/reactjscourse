
// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;

}
console.log(add(55, 1, 1000));

const user = {
    name: 'Aaron',
    cities: ['Port Coquitlam', 'Langley', 'Richmond'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};

console.log(user.printPlacesLived());

// this keyword - no longer bound

// Challenge 

const multiplier = {
    // numbers - array of numbers 
    // multipleBy - a single number
    // multiply - new array where numbers have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

