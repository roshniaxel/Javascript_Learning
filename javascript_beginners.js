// 1. Adding comments
// Single line comment

/* Multiple line comment
  This is a basic course to learn
  Javascript. It is very helpful and easy to learn things.
 */

// 2. Variables
// Two ways to define variables

// Using let to define variable
let name = "Roshni";
let age = 30;

console.log(name);
console.log(age);

// Using const to define variable
const a = 10;
console.log(a);

// 3. Data types
// Primitive Data types

// String
let message = "Hello";
const fname = "Test";
console.log(message);
console.log(fname);

// Number
let number = 42;
const PI = 3.14;
console.log(number);
console.log(PI);

// Boolean
let isActive = true;
const isPrimaryNumber = false;
console.log(isActive);
console.log(isPrimaryNumber);

// Undefined
let result;
console.log(result);

// Null
let data = null;
// BigInt
// Symbol

// Non Primitive Data type
// Objects
const person = {
  fname: "Roshni",
  lname: "Upadhyay",
};
const arrNumbers = [1, 2, 3, 4, 5];

console.log(person.fname);
console.log(person.lname);
console.log(arrNumbers[5]);

// Operators

// Assigment operators
let x = 5;
let y = 10;
console.log(x)
console.log(y)

// Arithmetic operators
let z = y - x
console.log(z)
console.log(x + y)
console.log(x % y)
console.log(++x)
console.log(--y)

// Comparison operators
console.log("Equals to " + x == y)
console.log("Not Equals to " + x != y)
console.log("Strict Equals to " + x === y) // Compare values + datatype
console.log("Strict Not Equals to " + x !== y) // Compare values + datatype
console.log(x >= y)
console.log(x < y)

// Logical operators
const isValidNumberAND = x > 8 && 8 > y // Logical AND
console.log(isValidNumberAND)
const isValidNumberOR = x > 8 || 8 > y // Logical OR
console.log(isValidNumberOR)

// String operators
console.log('Roshni ' + 'Upadhyay')

// Other operators
// Ternary Operator
const isEven = 10 % 2 === 0 ? true : false
console.log("isEven " + isEven)

// Type Conversions
console.log(2 + '3')
console.log(true + '3')
console.log('4' - '2')
console.log('4' * '2')
console.log('4' - '2')
console.log('Roshni' - '')
console.log('5' - true)
console.log(parseFloat('3.14'))
console.log((500).toString())
console.log(Boolean(10))

// Equality
const var1 = 'test'
const var2 = 'test'
console.log(var1 == var2)
console.log(var1 === var2)

const str1 = '10'
const str2 = 10
console.log("Different data types Equals")
console.log(str1 == str2)
console.log(str1 === str2)

// Conditional Statements
// if
// else
// else if
// switch

// Looping Code

// For loop
for(let i = 1; i <= 5; i++) {
   console.log(i)
}

//While loop
let wl = 1
while(wl <= 5) {
   console.log("While loop" + wl)
   wl++;
}

//do while
let dw = 1
do {
   console.log("Do while " + dw)
   dw++
} while (dw <= 5)

// For..of Loop
const numArray = [1, 2, 3, 4, 5]
for (const num of numArray) {
   console.log("For of Loop" + num)
}

// Functions
function greet() {
   console.log("hello Roshni")
}
greet()

function greetWithParameters(username) {
   console.log("hello " + username)
}
greetWithParameters('Roshni')
const arrowSum = (a, b) => a + b
const sum = arrowSum(10, 5)
console.log("SUM " + sum)

// Scope
const myNum = 10 // Global scope
if(true) {
   const myName = 'Test Scope - Roshni'
   console.log(myName) // Scope is inside the block only
   console.log("myNum from block " + myNum)
}
//console.log(myName) // This will give error

function test() {
   const myName = "Roshni From Function"
   console.log(myName)
   console.log("myNum from function " + myNum)
}
test()
