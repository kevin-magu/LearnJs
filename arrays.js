let numbers = [1,2,3,4,5,6,7,8,9,10];

// Array methods- for manupulating arrays
numbers.push(8) // adds 8 at the end of the array

numbers.pop() // removes the last element of the array
// adding numbers at the start of the arry
numbers.unshift(12);

//removing the first element
numbers.shift()

//finding the index of an element in an array

let index = numbers.indexOf(4)
console.log(index)

//removing elements at a specific index

numbers.splice(index,1);
console.log(numbers.join(','))

//slicing a portion of the array. The output will be the sliced array elements
let sliceArray = numbers.slice(2,5);
console.log(sliceArray.join(','))

//OBJECTS -- used to store key value pairs and represent complex data structures
//keys are also called properties and they must be unique

//creating an object
let person = {
    name: "kevin",
    age: 21,
    isStudent: true
};
console.log(person.name) // kevin

// adding a new property

person.job = "Engineer";
console.log(person.job)

// deleting a property
delete person.isStudent;
console.log(person)

//accessing the length of an object
console.log(Object.keys(person).length)

