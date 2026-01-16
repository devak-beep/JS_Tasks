// Task 8: Promise Chain Builder
// Goal: Master promise chaining.
// Task
// • Create 5 async tasks using Promises
// • Chain them
// • Add:
// .then
// .catch
// .finally
// Then
// Rewrite same logic using async/await
// Explain which is cleaner and why

function Task1 ()
{
    return new Promise((resolve ) => 
    {
        setTimeout(() => resolve("Task 1 complete") , 1000);
    });
}

function Task2 (mes)
{
    return new Promise((resolve) => 
    {
        setTimeout(() => resolve(mes + "-> Task 2 complete")  , 1000);
    });
}

function Task3 (mes)
{
    return new Promise((resolve) => 
    {
        setTimeout(() => resolve(mes + "-> Task 3 complete") , 1000);
    });
}

function Task4 (mes)
{
    return new Promise((resolve) => 
    {
        setTimeout(() => resolve(mes + "-> Task 4 complete") , 1000);
    });
}

function Task5 (mes)
{
    return new Promise((resolve) => 
    {
        setTimeout(() => resolve(mes + "-> Task 5 complete") , 1000);
    });
}

// Using Promise chaining

Task1()
.then((res) => {
    console.log(res);
    return Task2(res);
})
.then((res) => {
    console.log(res);
    return Task3(res);
})
.then((res) => {
    console.log(res);
    return Task4(res);
})
.then((res) => {
    console.log(res);
    return Task5(res);
})
.then((finalResult) => {
    console.log(finalResult);
})
.catch((err) => {
    console.error("Error: ", err);
})
.finally(() => {
    console.log("All tasks completed (success or failure) using Promise chaining.")
});

// Using async/await

async function runTasks()
{
    try
    {
        let res1 = await Task1();
        console.log(res1);

        let res2 = await Task2(res1);
        console.log(res2);

        let res3 = await Task3(res2);
        console.log(res3);

        let res4 = await Task4(res3);
        console.log(res4);

        let res5 = await Task5(res4);
        console.log(res5);

    }
    catch(err)
    {
        console.error("Error: ", err);
    }
    finally 
    {
        console.log("All tasks completed (success or failure) using async/await.");
    }
}

runTasks();

// Explanation:
// The async/await version is generally cleaner and easier to read.
// It resembles synchronous code, making it easier to follow the flow of execution.
// Error handling is also more straightforward with try/catch blocks.
// In contrast, promise chaining can become cumbersome with multiple .then() calls,
// especially when dealing with complex logic or error handling.

// Additional Context from task6.js and task7.js for reference:
// Task 6: Understanding 'this' in Different Contexts
// Goal: Grasp 'this' behavior in various scenarios.
// Task 7: Event Loop Prediction Game
// Goal: Think like JS runtime and understand execution order of synchronous and asynchronous code.