// Task 5: setTimeout + Closures Trap
// Classic but mandatory

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }
// Tasks
// • Fix using:
// let
// closure
// IIFE
// • Explain why each fix works

// The callback is NOT executed immediately.
// It is registered now and executed later.

for (var i=1 ; i<=5 ; i++)
{
    setTimeout( () => console.log(i) , i*1000 );
}
// This function:
// () => console.log(i)

// Does NOT store the value of i
// It stores a reference to the variable i

// Closures capture variables, not values.

// During loop (sync phase)
// i = 1  → callback registered
// i = 2  → callback registered
// i = 3  → callback registered
// i = 4  → callback registered
// i = 5  → callback registered
// i = 6  → loop ends

// Later (async phase)
// callback → console.log(i) → 6
// callback → console.log(i) → 6
// callback → console.log(i) → 6
// callback → console.log(i) → 6
// callback → console.log(i) → 6

// The REAL villain (summarized)

// There are three combined reasons:

// 1️⃣ var creates ONE shared variable
// 2️⃣ Callbacks run after the loop finishes
// 3️⃣ Closures capture the same variable

// Fix1 : Using let

for (let i = 1; i <= 5 ; i++)
{
    setTimeout( () => console.log(i) , i*1000 );
}

// Why this works

// let is block-scoped

// Each loop iteration creates a new binding

// Each callback closes over a different i

// Fix2 : Using Closure(factory function)

for (var i = 1 ; i <= 5 ; i++)
{
    createTimer(i);
}

function createTimer(value)
{
    setTimeout( () => console.log(value) , value*1000 );
}

// Why this works

// value is a function parameter

// Each call creates a new execution context

// Closure captures value, not i

// Each timeout now remembers its own copy.

// Fix3 : Using IIFE (Immediately Invoked Function Expression)

for (var i = 1 ; i <= 5 ; i++)
{
    (function(j)
    {
        setTimeout(() => console.log(j) , j*1000 );
    })(i);
}

//We pass (i) to the IIFE so the current value of i is copied into the parameter j,
// creating a new variable that the closure can safely capture.
