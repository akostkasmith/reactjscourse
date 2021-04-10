var nameVar = 'Aaron';
nameVar = 'Mike';
var nameVar = 'test';
console.log('nameVar', nameVar);

let nameLet = 'Aaron';
nameLet = 'Julie';

console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();

console.log(petName);

const fullName = 'Aaron KostkaSmith';
let firstName; 

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);