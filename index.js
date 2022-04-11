
//const Employee = require("./Employee");
//const Manager = require("./Manager");

//const Engineer = require("./Engineer");
//const Intern = require("./AssetsIntern");
//const { require } = require("yargs");


//console.log(require.Employee);




class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.id} damage.`);
    console.log(`${this.name} has ${this.email} hit points remaining!`);
    console.log('------------');
  }

  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
//   isAlive() {
//     if (this.hitPoints <= 0) {
//       console.log(`${this.name} has been defeated!`);
//       return false;
//     }
//     return true;
//   }

//   // Method which takes in a second object and decreases their "hitPoints" by this character's strength
//   attack(opponent) {
//     console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
//     opponent.hitPoints -= this.strength;
  }
}








class Shape{
    constructor(area, perimeter){
    this.area = area;
    this.perimeter = perimeter;
}

printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
}

}


const shape = new Shape(25, 25)

shape.printInfo();


function Shape(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;


this.printInfo= () => {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
}
}

Shape.prototype.printInfo = function name(params){
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);

}

    
  

