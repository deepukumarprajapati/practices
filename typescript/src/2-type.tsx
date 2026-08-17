type user = {
  readonly name: string;
  age: number;
  gender: string;
  city?: string; // Optional property
};

let userData: user = {
  name: "John",
  age: 30,
  gender: "Male",
};

// userData.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
userData.age = 31; // This is allowed

// first way to define an array of objects with a specific structure
let usersData: Array<{
  name: string;
  age: number;
  city?: string;
  gender: string;
}> = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 28, gender: "Male" },
  { name: "Charlie", age: 32, city: "New York", gender: "Male" },
];

// second way to define an array of objects with a specific structure using the 'user' type
let usersData2: user[] = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: " Bob", age: 28, gender: "Male" },
  { name: "Charlie", age: 32, city: "New York", gender: "Male" },
];
