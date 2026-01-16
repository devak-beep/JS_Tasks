// what is prototype in javascript?
// Whenever we created an object or an array or a fuction in JavaScript, JavaScript attaches it's hidden properties into an object, and attach the object with the original object .
// In JavaScript, a prototype is an object that is associated with every function and object by default.
// It serves as a blueprint from which other objects can inherit properties.
// When a function is created, JavaScript automatically adds a prototype property to that function.
// This prototype property is an object that contains properties and methods that can be shared among all instances of that function when used as a constructor.

// For example:

let arr = ["Devak" , "Tirth" , "Shivam"];
let obj1 = {
    name : "Devak" , 
    age : 21,
    getintro : function()
    {
        return this.name + " is " + this.age + " years old.";
    }
};

let obj2 = {
    name : "Tirth"
}
// That's how the prototype is created by default by JavaScript.
console.log(arr.__proto__); // This indicates to the prototype object which is created by JavaScript for the arr arrray object.
console.log(Array.prototype); // This indicates to the prototype object of the Original Array counstructor function.
//both are same

console.log(obj1.__proto__); // This indicates to the prototype object which is created by JavaScript for the obj1 object.
console.log(Object.prototype); // This indicates to the prototype object of the Original Object counstructor function.
//both are same

// Now if we go one step further up the prototype chain:
console.log(arr.__proto__.__proto__); // This indicates to the prototype object of the Original Object counstructor function because array is also an object.
console.log(Object.prototype); // This indicates to the prototype object of the Original Object counstructor function.
//both are same

// At the top of the prototype chain is null, which indicates the end of the chain.
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(obj1.getintro.__proto__); // This indicates to the prototype object which is created by JavaScript for the getintro function.
console.log(Function.prototype); // This indicates to the prototype object of the Original Function counstructor function.
//both are same

console.log(obj1.getintro.__proto__.__proto__); // This indicates to the prototype object of the Original Object counstructor function because function is also an object.
console.log(Object.prototype); //This indicates to the prototype object of the Original Object counstructor function.
//both are same

// You can also create your own prototype by defining a function and adding properties or methods to its prototype property.

// Never do this

obj2.__proto__ = obj1; // This is deprecated and not recommended.

console.log(obj2.age); // 21
console.log(obj2.getintro()); // Devak is 21 years old.

// Instead use Object.create()

let obj3 = Object.create(obj1); // This creates a new object obj3 with obj1 as its prototype.

obj3.name = "Shivam";

console.log(obj3.age); // 21
console.log(obj3.getintro()); // Shivam is 21 years old.

// In summary, prototypes in JavaScript are a powerful mechanism for inheritance and code reuse, allowing objects to share properties and methods through a prototype chain.

Function.prototype.printkarao = function()
{
    console.log("Hello from prototype!");
}

function moj(){}

moj.__proto__.printkarao(); // Hello from prototype!