// Task 10: Deep vs Shallow Copy Lab
// Goal: Avoid real-world bugs.
// Task
// • Create nested object
// • Copy using:
// =
// spread
// Object.assign
// JSON.parse(JSON.stringify())
// • Mutate nested value and observe effects

const Original = {
    name : "Devak",
    address : {
        city : "Vadodara",
        state : "Gujarat" 
    }
};

// Shallow Copy using =

const ShallowCopy1 = Original;

// Shallow Copy using spread operator

const ShallowCopy2 = {...Original};

// Shallow Copy using Object.assign()

const ShallowCopy3 = Object.assign({}, Original);

// Deep Copy using JSON.parse(JSON.stringify())

const DeepCopy = JSON.parse(JSON.stringify(Original));

// Mutate nested value

Original.address.city = "Ahmedabad"; // Changing city from Vadodara to Ahmedabad

// Log all objects to observe effects

console.log("After mutating Original.address.city to Ahemdabad:");
console.log("Original: ", Original);
console.log("ShallowCopy1: ", ShallowCopy1);
console.log("ShallowCopy2: ", ShallowCopy2);
console.log("ShallowCopy3: ", ShallowCopy3);
console.log("DeepCopy: ", DeepCopy);

// Observations:
// ShallowCopy1 reflects the change because it references the same object as Original.
// ShallowCopy2 and ShallowCopy3 do not reflect the change because they are shallow copies, but their nested objects still reference the same object as Original.
// DeepCopy does not reflect the change because it is a deep copy and has its own copy of the nested objects.
