// Level 3: this
// Task 6: this Output Prediction Sheet
// Goal: Kill confusion permanently.
// Create cases
// Global this
// Function this
// Arrow function this
// Method inside object
// Nested arrow inside method
// call, apply, bind
// Rules
// Predict output before running
// Write reasoning for each

//"use strict";

// Case 1: Global this

console.log(this);

// Expected Output:
// Window object (in browsers) or global object (in Node.js)

// In global scope:
// Browser → this === window
// Node → this === module.exports

// Case 2: Function this

function showThis() 
{
    console.log(this);
}

showThis();

// Expected Output:
// undefined

// In strict mode, 'this' in a regular function is undefined.
// In non-strict mode, it would refer to the global object.

// Case 3: Arrow function this

const arrow = () =>
{
    console.log(this);
}

arrow();

// Expected Output:
// Window object (in browsers) or global object (in Node.js)

// Arrow functions do not have their own 'this'.
// They inherit 'this' from the surrounding lexical context, which is the global scope here.
// Arrow function ignores call site completely.

function normal() {
  console.log(this);
}

const arrow1 = () => {
  console.log(this);
};

normal.call({ x: 1 }); // { x: 1 }
arrow1.call({ x: 1 });  // ❌ still lexical this

// Case 4: Method inside object

const user = 
{
    name : "Devak",
    show()
    {
        console.log(this);
        console.log(this.name);
    }
}

user.show();

// Expected Output:
// { name: "Devak", show: [Function: show] }
// "Devak"

// In a method, 'this' refers to the object that owns the method.

// Case 5: Method detached from object(TRAP)

const user2 =
{
    name : "Tirth",
    show2()
    {
        console.log(this.name);
    }
};

const fn = user2.show2;
fn();

// Expected Output:
// undefined

// When a method is detached from its object and called as a regular function,
// 'this' becomes undefined in strict mode (or global object in non-strict mode).


// Case 6: Nested arrow inside method

const user3 =
{
    name : "Shivam",
    show3()
    {
        const arrowFunc = () =>
        {
            console.log(this.name);
        }
        arrowFunc();
    }
};

user3.show3();

// Expected Output:
// "Shivam"

// The arrow function inherits 'this' from the surrounding method,
// which refers to the user3 object.

// Case 7: call

let person1 = { name : "Devak" , age : 21 };
let person2 = { name : "Harsh" , age : 22 };

let biodata = function()
{
    console.log(this.name + " " + this.age);
}

biodata.call(person1);
biodata.call(person2);

// Expected Output:
// "Devak 21 "
// "Bhavya 22"

// 'call' sets 'this' to the first argument passed to it.

// Case 8: apply

let details = function(city , country)
{
    console.log(this.name + " " + this.age + " " + city + " " + country );
}

details.apply(person1 , ["Vadodara" , "India"]);
details.apply(person2 , ["Vancouver" , "Canada"]);

// Expected Output:
// "Devak 21 Vadodara India"
// "Harsh 22 Vancouver Canada"

// 'apply' is similar to 'call', but it takes arguments as an array.
// It sets 'this' to the first argument passed to it.

// Case 9: bind

let info = function(hobby , favMusician)
{
    console.log(this.name + " " + this.age + " " + hobby + " " + favMusician );
}

let BindedInfoPerson1 = info.bind(person1);
let BindedInfoPerson2 = info.bind(person2);

console.log(BindedInfoPerson1);

// Expected Output:
// [Function: bound info]
// The 'bind' method returns a new function with 'this' permanently set to the first argument passed to it.

BindedInfoPerson1("Gaming" , "yo yo honey singh");
BindedInfoPerson2("Reading" , "Arijit Singh");

// Expected Output:
// "Devak 21 Gaming yo yo honey singh"
// "Harsh 22 Reading Arijit Singh"

// 'bind' creates a new function with 'this' bound to the specified object.