// *** Final Task
// Task 11: Build Your Own setTimeout
// Goal: Understand async internals (conceptually).
// Task
// • Create a fake mySetTimeout(fn, delay)
// • Use:
// Date.now()
// while loop (blocking version)
// • Then try to understand why real setTimeout is non-blocking

function mysetTimeout(fn , delay)
{
    let start = Date.now(); //get the current time in milliseconds

    while(Date.now() - start < delay) //keep looping until the delay time has passed
    {
        //Do nothing , just make system busy
    }
    fn(); //call the function after the delau
}

console.log("A");

mysetTimeout(function()
{
    console.log("B");
} , 3000); //3 seconds delay

console.log("C");

// What just happened?
// while loop blocks the call stack
// JS cannot do anything else until mysetTimeout is done
// console.log("C") waits  until mysetTimeout is done

// In the above code, mysetTimeout is a blocking version of setTimeout. 
// It uses a while loop to keep the system busy until the specified delay time has passed.
// During this time, no other code can execute, which is why "C" is printed only after "B". 
// This is different from the real setTimeout, which is non-blocking and allows other code to execute while waiting for the delay to pass.

console.log("A2");

setTimeout(function() 
{
    console.log("B2");
} , 6000); //6 seconds delay

console.log("C2"); 

// In this case, "C2" is printed immediately after "A2", and "B2" is printed after a 3-second delay, demonstrating the non-blocking nature of the real setTimeout.

// Why real setTimeout is non-blocking
// Internal conceptual model
// Real setTimeout does this:

// 1️⃣ Sends callback to Web APIs
// 2️⃣ Starts a timer in background
// 3️⃣ JS continues execution
// 4️⃣ After delay → callback goes to Callback Queue
// 5️⃣ Event Loop pushes it to Call Stack