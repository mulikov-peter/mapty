'use strict';
//* Construcror & this:
//^ this in a global scope = window

// Person constructor
const Person = function (firstName, birthYear) {
  // Instance properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  //! NEVER TO DO THIS(don't put methods in function constructor):
  // this.calculateAge = function () {
  //   const age = new Date().getFullYear() - birthYear;
  //   return age;
  // };

  // console.log(this); //  Person {firstName: "Brad", birthYear: 1985, calculateAge: ƒ}
};

// Create new instance of Person
const brad = new Person('Brad', 1985);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// console.log(brad);
// console.log(brad.calculateAge());

//* Prototype:
// Greeting method:
Person.prototype.greeting = function () {
  return `Hello my name is ${this.firstName}`;
};

Person.prototype.calcAge = function () {
  console.log(
    `${this.firstName} is ${
      new Date().getFullYear() - this.birthYear
    } years old`
  );
};
// console.log(brad.greeting());
// console.log(brad.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(brad)); // true

// Static method in function constructor
Person.hey = function () {
  console.log('Hey there...');
};

//^Inheritance between constructor function
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Student.prototype.constructor = Student;

const mike = new Student('Mike', 1990, 'JavaScript');
// mike.introduce();
// mike.calcAge();

//====================================================
//* ES6 CLASSES:
// 1. Classes are NOT hoisted
// 2. Classes are first-classs citizes => we can pass classes into functions and we can return classes from functions
// 3. Classes are executed in strict mode

// class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }
  // Getters & Setters
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exests
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    return 'Hey there!!!';
  }
}

const jesica = new PersonCL('Jesica Davis', 1990);
// console.log(jesica);
// console.log(jesica.calcAge());
// console.log(jesica.age);
// const alan = new PersonCL('Alan', 1990);
// console.log(Person.hey());

//^ Inheritance Between ES6 classes
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hello my name ${this.firstName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2021 - this.birthYear} years old...`);
  }
}

const maria = new StudentCL('Maria Stone', 1985, 'Marketing');
// console.log(maria);
// maria.introduce();
// maria.calcAge();
//==================================================
//* Object.create()
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

//^ Inheritance between Object.create
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `Hello my name is ${this.firstName} and I'm ${
      2021 - this.birthYear
    } years old`
  );
};

const jay = Object.create(StudentProto);
// jay.init('Jay', 1992, 'Economy');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

// console.log(steven); // {}
// steven.name = 'Steven';
// steven.birthYear = 1989;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1992);
// sarah.calcAge();

//* Another Class Example
class Account {
  // Public fields (instances):
  locale = navigator.language;

  // Private fields (instances):
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.local = navigator.language;

    // console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods:
  // Public interface
  getMovements() {
    console.log(this.#movements);
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('helper');
  }

  // Private methods:
  // #approveLoan(val) { // doesn't support yet
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(300);
// acc1.withdraw(-50);

// acc1.requestLoan(1000);
// acc1.getMovements();

// console.log(acc1);

//^ Chaining methods
// acc1.deposit(300).deposit(500).withdraw(200).requestLoan(400);

// console.log(acc1);

//*****************************************************//
//=======================TRAVERSY LESSONS===============
//****************************************************//

//* Object.create
const mary = Object.create(Person.prototype, {
  firstName: { value: 'Mary' },
  lastName: { value: 'Smith' },
  birthYear: { value: 1988 },
});

// console.log(mary); // Person {firstName: "Mary", lastName: "Smith"}
// console.log(mary.greeting()); // Hello my name is Mary
// console.log(mary.calculateAge()); // TypeError: mary.calculateAge is not a function. -- because calculateAge is not in prototype of Person

//*=============== ES6 CLASSES =================//
class Human {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  // Methods going to prototype:
  greeting() {
    return `Hello there I'm ${this.firstName} ${this.lastName}`;
  }
  // Method only for Human:
  static canBreathe() {
    `I can breathe...`;
  }
}

// Create object - instance of Human
const anna = new Human('Anna', 'Williams', 1987);

// console.log(anna);
// console.log(anna.greeting());
// console.log(anna.canBreathe()); // TypeError: anna.canBreathe is not a function, because canBreathe method only for Human

class Player extends Human {
  constructor(firstName, lastName, birthYear, playerType, position) {
    super(firstName, lastName, birthYear);
    this.playerType = playerType;
    this.position = position;
  }

  playerGreeting() {
    return `Hi, my name is ${this.firstName} and I'm ${this.playerType}, my position is ${this.position}.`;
  }
}

const alex = new Player('Alex', 'Helk', 1990, 'footballer', 'forward');

// console.log(alex);
// console.log(alex.greeting());
// console.log(alex.playerGreeting());

class BarcelonaPlayer extends Player {
  constructor(
    firstName,
    lastName,
    birthYear,
    playerType,
    position,
    team,
    games,
    salery
  ) {
    super(firstName, lastName, birthYear, playerType, position);

    this.team = team;
    this.games = games;
    this.salery = salery;
  }

  get getYearSalery() {
    return `${this.salery * 13} per year`;
  }

  set setNewGames(newGames) {
    this.games = newGames;
  }
}

const georg = new BarcelonaPlayer(
  'Georg',
  'Larin',
  1992,
  'footballer',
  'goalkeeper',
  'FC Barcelona',
  4,
  14000
);

// console.log(georg);
// console.log(georg.playerGreeting()); // Hi, my name is Georg and I'm footballer, my position is goalkeeper.

// console.log(georg.getYearSalery); // 182000 per year
georg.setNewGames = 8;

//*=-=-=-=-=-=-=- Example:
// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = 'none';
//   }

//   show() {
//     this.$el.style.display = 'block';
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);

//     this.$el.style.width = this.$el.style.height = `${options.size}px`;
//     this.$el.style.backgroundColor = options.color;
//   }
// }

// const box1 = new Box({
//   selector: '#box1',
//   size: 100,
//   color: 'red',
// });

// box1.hide();
// box1.show();

// Exercise
// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return `${this.name} going at ${(this.speed += 10)} km/h`;
// };

// Car.prototype.brake = function () {
//   return `${this.name} going at ${(this.speed -= 5)} km/h`;
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercsdes', 100);

//======================================
// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     return `${this.make} going at ${(this.speed += 10)} km/h`;
//   }

//   break() {
//     return `${this.make} going at ${(this.speed -= 5)} km/h`;
//   }

//   get speedUs() {
//     return `For USA: ${this.make} going at ${this.speed / 1.6} ml/h`;
//   }

//   set speedUs(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const ford = new CarCL('Ford', 120);
//========================================

// const CarFI = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// CarFI.prototype.accelerate = function () {
//   return `${this.make} going at ${(this.speed += 20)} km/h`;
// };

// CarFI.prototype.brake = function () {
//   return `${this.make} going at ${(this.speed -= 5)} km/h`;
// };

// const EV = function (make, speed, charge) {
//   CarFI.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototype
// EV.prototype = Object.create(CarFI.prototype);

// EV.prototype.constructor = EV;

// EV.prototype.accelerate = function () {
//   return `${
//     this.make
//   } going at ${(this.speed += 20)} km/h, with a charge of ${this.charge--}%`;
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   return (this.charge = chargeTo);
// };

// const tesla = new EV('Tesla', 120, 23);

//==================================
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
  }

  break() {
    console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
    return this;
  }

  get speedUs() {
    return `For USA: ${this.make} going at ${this.speed / 1.6} ml/h`;
  }

  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
}

class EVCL extends CarCL {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    console.log(
      `${
        this.make
      } going at ${(this.speed += 20)} km/h, with a charge of ${--this
        .#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);

// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .break()
//   .chargeBattery(50)
//   .accelerate();
