// 1. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]
let modifiedArr = arrayOfNumbers.map(num => num +1);
console.log(modifiedArr);  // [ 4, 46, 7, 57, 8, 10 ]


// 2. Square Root
// Given an array of numbers, find the square root of each element in the array.

const givenArr = [25, 36, 64, 81, 144]
const squareRootArr = givenArr.map(Math.sqrt);
console.log(squareRootArr); // [ 5, 6, 8, 9, 12 ]


// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// Examples:
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]


function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0)
}
console.log(filterEvens([1,2,3,11,12,13]));   // [ 2, 12]
console.log(filterEvens([22,2,31,110,6,13]));  // [ 22, 2, 110, 6 ]



// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

// Examples

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


const myFriends = ["miky", "giuseppe", "francesco", "chris", "dan", "peppino"];

function filterFriends(arr, query) {
    return arr.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterFriends(myFriends, "pp"));  // [ 'giuseppe', 'peppino' ]
console.log(filterFriends(["anna", "paola", "franca"], "an"));  // [ 'francesco', 'dan' ]




//     6. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20


function sum(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log(sum([1,2,3,4,5])); // 15
console.log(sum([2, 5, 8, 15])); // 30