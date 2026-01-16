// Level 2
// Task 4: Closure Counter (3 Variations)
// Goal: Internalize closures.
// Build
// Counter using global variable :x:
// Counter using closure :white_check_mark:
// Counter using IIFE + closure :white_check_mark:
// Explain
// Why version 2 & 3 are safer
// Memory implications 

// Without closoures

var counter = 0;

function incrementCounter() {
  counter += 1;
  return counter;
}

console.log("Global counter " + incrementCounter()); //1
console.log("Global counter " + incrementCounter()); //2

counter = 10; // Modifying the global counter directly
console.log("Global counter " + incrementCounter()); //11

const gc = incrementCounter();
console.log("Global counter gc " + gc); //12
const gc2 = incrementCounter();
console.log("Global counter gc2 " + gc2); //13

// Explanation:
// In this example, the variable 'counter' is declared in the global scope.
// The function 'incrementCounter' modifies this global variable each time it is called.
// As a result, the counter value persists across multiple calls to the function,
// leading to an incrementing count each time.

// With closures

function createCounter() {
  let counter = 0;

  return function incrementCounter2() {
    counter += 1;
    return counter;
  };
}

const myCounter = createCounter();
const anotherCounter = createCounter();

console.log("Closure my: " + myCounter());
console.log("Closure my: " + myCounter());
console.log("Closure another: " + anotherCounter());
console.log("Closure my: " + myCounter());
console.log("Closure another: " + anotherCounter());

// Explanation:
// In this example, the 'createCounter' function defines a local variable 'counter'
// and returns an inner function 'incrementCounter2' that has access to this variable.
// Each time 'createCounter' is called, a new closure is created with its own 'counter' variable.
// Therefore, 'myCounter' and 'anotherCounter' maintain separate counts,
// demonstrating how closures can encapsulate state.

function outer() {
  let bigdata = new Array(1000000);

  return function inner() {
    console.log("Bigdata length: ", bigdata.length);
  };
}

let fn = outer();
fn(); // Outputs: 1000000
fn(); // Outputs: 1000000

fn = null; // doing this will allow garbage collection of bigdata to free up memory otherwise bigdata will remain in memory as long as fn exists

// Explanation:
// In this example, the 'outer' function creates a large array 'bigdata' and returns an inner function 'inner'.
// The inner function retains access to 'bigdata' through closure, allowing it to log the length of the array
// even after 'outer' has finished executing. This demonstrates how closures can preserve access to variables
// from their outer scope.
