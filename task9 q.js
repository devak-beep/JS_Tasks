// Level 5: Advanced Concepts
// Task 9: Polyfill Builder
// Goal: Understand how JS works internally.
// Write polyfills for:
// map
// filter
// reduce
// bind
// Rules
// :x: No libraries
// :x: No copying
// :white_check_mark: Use prototype

// Polyfill for bind method

let name = {
    firstname : "Devak",
    lastname : "Sheth"
}

let printname = function(hometown , state)
{
    console.log(this.firstname + " " + this.lastname + " from " + hometown + state);
}

let printmyname = printname.bind(name , "Vadodara"+" ", "Gujarat");
printmyname();

// Polyfill for bind method

Function.prototype.mybind = function(...args)// args is an array of arguments passed to the mybind function.
{
    let objw = this; //this refers to the function on which mybind is called.
    return function()
    {
        objw.call(args[0], args[1], args[2]);
    }
}

let printmyname2 = printname.mybind(name , "Vadodara" +" ", "Gujarat");
printmyname2();

// polyfill for map method

Array.prototype.mymap = function(callback)//we use callback to pass the function which we want to apply on each element of the array.
{
    let result = [];
    for(let i=0; i<this.length; i++)
    {
        result.push(callback(this[i], i , this));//this[i] is the current element, i is the index, this is the array itself.
    }

    return result;
}

let arr2 = [1,2,3,4,5];

let mapaddarr = arr2.mymap(function(element)//element is the current element of the array.
{
    return element * 2; //we want to multiply each element by 2.
});

console.log(mapaddarr);

// polyfill for filter method

Array.prototype.myfilter = function(callback) //we use callback to pass the function which we want to apply on each element of the array.
{
    let result = [];
    for(let i=0; i<this.length; i++)
    {
        if(callback(this[i], i , this)) //if the callback returns true for the current element, we add it to the result array.
        {
            result.push(this[i]);
        }
    }
    return result;
}

let filterarr = arr2.myfilter(function(element) //element is the currrent element of the array.
{
    return element % 2 === 0; //we want to filter out even numbers.
})

console.log(filterarr);

// polyfill for reduce method

Array.prototype.myreduce = function(callback , initialvalue) //we use callback to pass the function which we want to apply on each element of the array and initialvalue is the initial value of the accumulator.
{
    const hasInitialValue = arguments.length >= 2; //check if initialvalue is provided or not.
    
    if (!hasInitialValue && this.length === 0) //if no initialvalue is provided and the array is empty, throw an error.
    {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = hasInitialValue ? initialvalue : this[0]; //if initialvalue is provided, set accumulator to initialvalue, else set it to the first element of the array.
    let startIndex = hasInitialValue ? 0 : 1;  //if initialvalue is provided, start from index=0, else start from index=1.

    for (let i = startIndex; i < this.length; i++)
    {
        if (!(i in this)) continue; //skip if the element is not present in the array (sparse array case).
        accumulator = callback(accumulator , this[i] , i , this); //update the accumulator by applying the callback function on it and the current element.
        // this[i] is the current element, i is the index, this is the array itself.
    }

    return accumulator; //return the final value of the accumulator.
}

let reducearr = arr2.myreduce(function(accumulator , element) //accumulator is the accumulated value and element is the current element of the array.
{
    return accumulator + element; // we want to sum up all the elements of the array.
})

console.log(reducearr);