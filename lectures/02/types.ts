/**
 * let <indentifier> ":" <type> = [value]
 */

// Initilize
let customerName: string = 'Jame';

// Type error thrown
// customerName = 1;

console.log(customerName);

let x: number = 5;
let y: number = 5;

console.log(x === y);

let text1: string = 'A';
let text2: string = 'B';

console.log(text1, text2);

// String formatting
let firstName: string = 'John';
let lastName: string = 'Doe';

let age: number = 10;

// console.log("Hello", firstName, lastName, "age", age);
console.log(`Hello, ${firstName} ${lastName}, ${age}`);
