// Basic TypeScript type examples

// Primitive string type annotation
let message: string = "Hello, TypeScript!";

// Array of numbers using generic type syntax
let numArray2: Array<number> = [1, 2, 3, 4, 3];
// Array of numbers using shorthand syntax
let numArray1: number[] = [1, 2, 3, 4, 3];

// Array of strings using generic type syntax
let stringArray1: Array<string> = ["df", "223"];
// Array of strings using shorthand syntax
let stringArray2: string[] = ["df", "223"];

// Array elements may be string or number (union type)
let stringNumberArray2: Array<string | number> = ["df", 223];
// Tuple with a fixed structure: first value string, second value number
let stringNumberArray1: [string, number] = ["df", 223];

// Readonly array of strings using shorthand syntax
let readyOnlyString: readonly string[] = ["sdfdsf", "sdfdsf"];
// Readonly array of strings using ReadonlyArray utility type
let readyOnlyString2: ReadonlyArray<string> = ["sdfdsf", "sdfdsf"];

// Readonly array of numbers using shorthand syntax
let readyOnlyNumber: readonly number[] = [2, 3];
// Readonly array of numbers using ReadonlyArray utility type
let readyOnlyNumber2: ReadonlyArray<number> = [2, 3];
