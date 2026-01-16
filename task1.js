// Level 1: Core JS Engine Thinking
// Task 1: Hoisting & Execution Context Drill
// Goal: Understand exact execution order.
// Task
// • Write a JS file with:
// var, let, const
// function declaration
// function expression
// arrow function
// • Console log everything before declaration
// • Predict output on paper first
// • Then run and compare

console.log(a);
//console.log(b);
//console.log(c);

var a = 5;
let b = 10;
const c = 15;

// Expected Output:
//undefined
//ReferenceError: Cannot access 'b' before initialization
//ReferenceError: Cannot access 'c' before initialization

// Explanation:
// In JavaScript, variable declarations using 'var' are hoisted and initialized with 'undefined', 
// so accessing 'a' before its declaration logs 'undefined'.
// However, variables declared with 'let' and 'const' are also hoisted but not initialized, 
// leading to a Temporal Dead Zone (TDZ). Accessing 'b' or 'c' before their declarations 
// results in a ReferenceError.


declarativeExample(); // This will work because declarative functions are hoisted.
//expresionExample(); // This will give an error because function expressions are not hoisted.
//arrowExample(); // This will give an error because arrow functions are not hoisted.

function declarativeExample() 
{
    console.log("Hey ,I am a declarative function.");
}

var expresionExample = function()
{
    console.log("Hey , I am a expresion function."
    );
}

var arrowExample = () => 
{
    console.log("Hey , I am an arrow function.")
}
