// 15.09.2020
// EXERCISE 1
//  Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.


const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
let returnArray = arrayOfNumbers.map(num => num + 1);

console.log(returnArray);  // [ 4, 46, 7, 57, 8, 10 ]


// EXERCISE 2
// Square Root
// Given an array of numbers, find the square root of each element in the array.

let arr = [4, 8, 80, 50, 102];

function arrSqr() {
    return arr.map(Math.sqrt);
}

console.log(arrSqr());

// [
//   2,
//   2.8284271247461903,
//   8.94427190999916,
//   7.0710678118654755,
//   10.099504938362077
// ]


// EXERCISE 3
//  Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

let filterEvens = [22,2,31,110,6,13];

const evenNum = filterEvens.filter(num => num % 2 === 0 );

console.log(evenNum); // [ 22, 2, 110, 6 ]


// EXERCISE 4

// Filter Friends
// Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, query) {
    return arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];















