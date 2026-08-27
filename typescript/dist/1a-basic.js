"use strict";
let msg = "Hello";
// Primitives type
let username = "Deepak";
let age = 27;
let isAdmin = true;
// Array
let numbers = [1, 2, 3];
let names = ["Deepak", "Ashu"];
let names1 = [1, "Deepak", "Ashu"];
// Tuples
let person = ["Deepak", 27];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let fevoriteCOlor = Color.Green;
//Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "Hello";
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
// Void (For functions that don't return)
function subscribe(message) {
    console.log(message);
}
// Basic function with types
function add(a, b) {
    return a + b;
}
// Basic function with types
function greet(name, gretting) {
    if (gretting) {
        return `${gretting}, ${name}!`;
    }
    return `Hello ${name}!`;
}
// Default parameters
function multiply(a, b = 2) {
    return a * b;
}
// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Arrow functions
const divide = (a, b) => a / b;
// Function types
let calculate;
calculate = add;
let user = {
    name: "Deepak",
    age: 34,
    id: 1,
};
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(precentage) {
        return this.price * (precentage / 100);
    },
};
let point = { x: 10, y: 10 };
let userId = "piyush123";
let productId = 234;
let myDog = {
    name: "Basanti",
    breed: "Deshi",
};
let dog = {
    name: "Basanti",
    age: 4,
};
function getStatus(status) {
    console.log(`Status is ${status}`);
}
console.log(getStatus("approved"));
let myCircle = {
    color: "Red",
    radius: 12,
};
// String literal types
let direction;
direction = "North";
// Numeric literal types
let diceRoll;
diceRoll = 2;
// Type assertions
let someValue = "Subscribe";
let strLength = someValue.length;
//or
let strLength2 = someValue.length;
// Type guards
function processValue(value) {
    if (typeof value === "string") {
        // Here added in type string condition so it auto allow string method
        value.toUpperCase();
    }
    else {
        // Here added in type string condition so it auto allow number method
        value.toFixed();
    }
}
// instanceof type guard
class Dogs {
    bark() {
        console.log("Woof");
    }
}
class Cat {
    meom() {
        console.log("Meow");
    }
}
function makeSound(animal) {
    if (animal instanceof Dogs) {
        animal.bark();
    }
    else {
        animal.meom();
    }
}
// Generics 
function identity(arg) {
    return arg;
}
let output1 = identity("Subscribe");
let output2 = identity(123);
// Generic with array
function getFirstElement(arr) {
    return arr[1];
}
let myNum = getFirstElement([12, 3, 4]);
let myName = getFirstElement(["Ram", "Shayam"]);
let stringNumberPair = {
    key: "age",
    value: 23
};
// Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItem() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
console.log(logLength([2]));
let updateTodo = {
    completed: true
};
let assignWork = {
    title: "Create a story",
    desription: "Sprint 5",
    completed: false,
    createAt: new Date(),
    assignedTo: "Deepak"
};
let exposeTodo = {
    title: "Create a story",
    desription: "Sprint 5",
    completed: false,
    createAt: new Date(),
    assignedTo: "Deepak"
};
let pages = {
    home: {
        title: "df",
        url: "df"
    },
    about: {
        title: "",
        url: ""
    },
    contact: {
        title: "",
        url: ""
    }
};
// RetrunType - get return type of function
function createUser() {
    return {
        id: 1,
        name: "Piyush",
        email: "piyush@gmail.com"
    };
}
// enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Left;
// enum string
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["success"] = "SUCCESS";
    Status["rejected"] = "REJECTED";
})(Status || (Status = {}));
let getMyStatus = Status.pending;
