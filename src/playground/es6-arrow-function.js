const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }

const  squareArrow = (x) => x * x;

console.log(squareArrow(9));

const fullName = 'Aaron KostkSmith';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName(fullName));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow(fullName));

