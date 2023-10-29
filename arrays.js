// Arrays in Javascript - much like any other arrays in other languages, but here we can store any datatype in a single array like, numbers, strings , booleaan in a single array.

const arr = [1,2,3,4,5,6]
console.log(arr)
const anotherArr = [1,2,"aditya",true]
console.log(anotherArr)

//another way to create array is to create with the object creation
const array = new Array(1,2,3,4,5)
console.log(array[2]);

//Array Methods in JS
array.push("aditya")  // -> add an element in the array at the end
console.log(array) 
array.pop()  // --> need no params, it deletes the last element from the array
console.log(array) 

array.unshift(18) // -> add element in the starting in the array, it basically shifts the array towards the right (can be time consuming)
console.log(array)
array.shift() // -> removes the first element from the array 
console.log(array)

console.log(array.includes(7)) //-> give the result in the boolean type
console.log(array.indexOf(5)) // -> gives the index of the element in the array, if no eleemnt found it gives -1

const newArr = array.join() // -> it converts the array into comma separated strings
console.log(newArr)
console.log(array)

// Another methods slice and splice

console.log(array.slice(1,3))  // -> it give a section of the array and end range is not included
console.log(array.splice(1,3)) // -> it manipulates the array itself and removes the range of the element form the array.

//let say if want to push an array into another array, then what will happen?
// the entire array will be added to the first array but as a element, it wont be joined

const marvel = ["thor","ironman","cap","hulk"]
const dc = ["batman","superman","flash"]
// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[4])      // -> if we want to access the element that is an array itself
// console.log(marvel[4][2])   // --> if we want to access the array under the array , the is like 2d array syntax

const allHeros = marvel.concat(dc)  // -> it return the new array with all the elements combined.

// there is another method "SPREAD" to add two or more arrays
const newHeros = [...marvel,...dc]
console.log(newHeros)

const mixedArray = [1,2,3,[5,6,7],7,8,[1,10,[2,3,5]]]
const flatArray = mixedArray.flat(Infinity)
console.log(flatArray)


//some "Array" methods 
console.log(Array.isArray(mixedArray))
console.log(Array.from("Aditya"))
console.log(Array.from({name:"Aditya"})) //-> from converts into array, but for objects is will show empty array 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))