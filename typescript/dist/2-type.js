"use strict";
let userData = {
    name: "John",
    age: 30,
    gender: "Male",
};
// userData.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
userData.age = 31; // This is allowed
// first way to define an array of objects with a specific structure
let usersData = [
    { name: "Alice", age: 25, gender: "Female" },
    { name: "Bob", age: 28, gender: "Male" },
    { name: "Charlie", age: 32, city: "New York", gender: "Male" },
];
// second way to define an array of objects with a specific structure using the 'user' type
let usersData2 = [
    { name: "Alice", age: 25, gender: "Female" },
    { name: " Bob", age: 28, gender: "Male" },
    { name: "Charlie", age: 32, city: "New York", gender: "Male" },
];
