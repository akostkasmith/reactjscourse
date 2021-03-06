class Person {
    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
    
}



class Student extends Person { 
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // fliping it will give us a true or false value;
    }

    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}



class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += `. I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveller('Aaron Kostka Smith', 65, "Port Coquitlam");
console.log(me.getGreeting());

const them = new Traveller();
console.log(them.getGreeting());