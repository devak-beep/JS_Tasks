//  Level 4: Async JS & Event Loop (Very Important)
// Task 7: Event Loop Prediction Game
// Goal: Think like JS runtime.
// Include
// console.log
// setTimeout
// Promise.resolve
// fetch (or mocked promise)
// Task
// • Predict exact output order
// • Label:
// Call Stack
// Microtask Queue
// Callback Queue

// Solution:
//“JavaScript executes synchronous code first, then processes all microtasks like Promise, and only then handles macrotasks like setTimeout

// Golden rule 
// JavaScript runs synchronous code first,
// then microtasks,
// then macrotasks (callback queue).

// Order priority:

// Call Stack
// → Microtask Queue (Promises)
// → Callback / Macrotask Queue (setTimeout, setInterval)

console.log("A");

setTimeout(() => 
{
    console.log("B");
}, 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Expected Output Order:
// A
// D
// C
// B

// Reasoning:
// 1. "A" is logged first as it's synchronous code.
// 2. "D" is logged next, also synchronous.
// 3. The Promise's .then() callback is a microtask, so "C" is logged after all synchronous code.
// 4. Finally, the setTimeout callback is a macrotask, so "B" is logged last.