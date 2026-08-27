let msg: string = "Hello";

// Primitives type
let username: string = "Deepak";
let age: number = 27;
let isAdmin: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Deepak", "Ashu"];
let names1: Array<number | string> = [1, "Deepak", "Ashu"];

// Tuples
let person: [string, number] = ["Deepak", 27];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let fevoriteCOlor: Color = Color.Green;

//Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "Hello";

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Void (For functions that don't return)
function subscribe(message: string): void {
  console.log(message);
}

// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

// Basic function with types
function greet(name: string, gretting?: string): string {
  if (gretting) {
    return `${gretting}, ${name}!`;
  }
  return `Hello ${name}!`;
}

// Default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Arrow functions
const divide = (a: number, b: number): number => a / b;

// Function types
let calculate: (x: number, y: number) => number;
calculate = add;

// Object type annotation

interface User {
  name: string;
  age: number;
  email?: string;
  readonly id?: number;
}

let user: User = {
  name: "Deepak",
  age: 34,
  id: 1,
};

// Interface with method
interface product {
  name: string;
  price: 2000;
  getDiscount(percent: number): number;
}

let laptop: product = {
  name: "MacBook Pro",
  price: 2000,
  getDiscount(precentage: number): number {
    return this.price * (precentage / 100);
  },
};

// Type alias
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 10 };

// Type alias of primitives
type ID = string | number;

let userId: ID = "piyush123";
let productId: ID = 234;

// Types alias vs Interface

// Interface can be extended, type aliases cannot
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Basanti",
  breed: "Deshi",
};

// Intercae can be declared multiple times and will merge, Use interfaces for object shapes,
interface Animal {
  name: string;
}
interface Animal {
  age?: number;
}
let dog: Animal = {
  name: "Basanti",
  age: 4,
};

// type aliases for unions/intersections
// Union types (OR)
type StatusType = "pending" | "approved" | "rejected";

function getStatus(status: StatusType) {
  console.log(`Status is ${status}`);
}

console.log(getStatus("approved"));

// Intersection types (And)
interface Colorful {
  color: string;
}
interface Circle {
  radius?: number;
}
type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
  color: "Red",
  radius: 12,
};

// String literal types
let direction: "North" | "South" | "East" | "West";
direction = "North";

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 2;

//  Combining with other types

type SuccessResponce = {
  status: "success";
  data: any;
};
type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponce | ErrorResponse;

// Type assertions
let someValue: unknown = "Subscribe";
let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;


// Type guards
function processValue(value: string | number) {
  if (typeof value === "string") {
    // Here added in type string condition so it auto allow string method
    value.toUpperCase()
  } else {
    // Here added in type string condition so it auto allow number method
    value.toFixed()
  }
}

// instanceof type guard

class Dogs {
  bark() {
    console.log("Woof")
  }
}

class Cat {
  meom() {
    console.log("Meow")
  }
}

function makeSound(animal: Dogs | Cat) {
  if (animal instanceof Dogs) {
    animal.bark()
  } else {
    animal.meom()
  }
}


// Generics 
function identity<k>(arg: k): k {
  return arg
}
let output1 = identity<string>("Subscribe")
let output2 = identity<number>(123)


// Generic with array
function getFirstElement<T>(arr: T[]): T {
  return arr[1]
}
let myNum = getFirstElement([12, 3, 4])
let myName = getFirstElement(["Ram", "Shayam"])

// Generic interfaces
interface keyValuePair<K, V> {
  key: K;
  value: V;
}

let stringNumberPair: keyValuePair<string, number> = {
  key: "age",
  value: 23
}

// Generic classes
class DataStorage<T> {
  private data: T[] = []

  addItem(item: T): void {
    this.data.push(item)
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i: T) => i !== item)
  }

  getItem(): T[] {
    return [...this.data]
  }
}

let textStorage = new DataStorage<string>()

textStorage.addItem("Hello")


// Generic constraints
interface LengthWise {
  length: number
}
function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}
console.log(logLength([2]));


////////////////////////////////////////

interface Todo {
  title: string
  desription: string
  completed: boolean
  createAt: Date
  assignedTo: string
}

// Partial -  makes all properties optional
type PartialTodo = Partial<Todo>

let updateTodo: PartialTodo = {
  completed: true
}

// Required for all
type RequiredTodo = Required<Todo>

let assignWork: RequiredTodo = {
  title: "Create a story",
  desription: "Sprint 5",
  completed: false,
  createAt: new Date(),
  assignedTo: "Deepak"
}

// Readonly, Not allow to udpate it
type ReadOnlyTodo = Readonly<Todo>

let exposeTodo: ReadOnlyTodo = {
  title: "Create a story",
  desription: "Sprint 5",
  completed: false,
  createAt: new Date(),
  assignedTo: "Deepak"
}

// Pick - Pick specific properties
type TodoPreview = Pick<Todo, "title" | "assignedTo">

// Omit - omit specific properties
type TodowithoutDate = Omit<Todo, "createAt">


// Record - construct object type with specific keys value type

type PageInfo = {
  title: string
  url: string
}

type Pages = "home" | "about" | "contact"

type Merged = Record<Pages, PageInfo>

let pages: Merged = {
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
}

// RetrunType - get return type of function
function createUser() {
  return {
    id: 1,
    name: "Piyush",
    email: "piyush@gmail.com"
  }
}

type UserType = ReturnType<typeof createUser>

// enum
enum Direction {
  up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Left

// enum string
enum Status {
  pending = "PENDING",
  success = "SUCCESS",
  rejected = "REJECTED"
}

let getMyStatus: Status = Status.pending