// Task 3: let, const, TDZ (Temporal Dead Zone) Experiment
// Goal: Understand Temporal Dead Zone deeply.
// Task
// Try accessing let & const before declaration
// Compare with var
// Wrap same code inside a block {} and a function
// Answer These
// Why TDZ exists?
// Why JS designers added it?

console.log("A is "+a);
//console.log("B is " + b);
//console.log("C is " + c);

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

{
console.log("D is " + d);
//console.log("E is " + e);
//console.log("F is " + f);

var d = 5;
let e = 10;
const f = 15;
}
{
    console.log("We are accessing d: outside the block " + d);
}

// Expected Output:
//undefined
//ReferenceError: Cannot access 'e' before initialization
//ReferenceError: Cannot access 'f' before initialization
//5

// Explanation:
// Similar to the previous example, 'd' is hoisted and initialized with 'undefined', 
// while 'e' and 'f' are in the Temporal Dead Zone (TDZ) until their declarations are reached.
// However, 'd' is function-scoped (or globally scoped if not in a function), so it is accessible 
// outside the block, logging its value as 5.
// we can access var outside the block but let and const are block scoped.

function test()
{
    console.log("G is " + g); 
    //console.log("H is " + h);
    //console.log("I is " + i);

    var g = 20;
    let h = 30;
    const i = 40;
}

test();

// Expected Output:
//undefined
//ReferenceError: Cannot access 'h' before initialization
//ReferenceError: Cannot access 'i' before initialization

// Explanation:
// Inside the function 'test', 'g' is hoisted and initialized with 'undefined', 
// while 'h' and 'i' are in the Temporal Dead Zone (TDZ) until their declarations are reached.