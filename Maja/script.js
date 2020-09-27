/* 1. 
Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements. */

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

let incriment = arrayOfNumbers.map(element => element +1);

console.log(incriment);


/* 2. 
Square Root
Given an array of numbers, find the square root of each element in the array. */

let numbers1 = [4, 9, 100];

function squareRook(x) {
    return x.map(Math.sqrt)
}
console.log(squareRook(numbers1)); // [ 2, 3, 10 ]

/* 3. 
Filter Evens
Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

Examples:

filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6] */
let array1 = [1,2,3,11,12,13];
let array2 = [22,2,31,110,6,13];

let x = array1.filter(z => z % 2 === 0);
console.log(x); // [2, 12]

function filterEvens(numbers) {
    let d = numbers.filter(z => z % 2 === 0);
    return d;
}
console.log(filterEvens(array2)); // [ 22, 2, 110, 6 ]

/* 5.
Filter Friends
Given an array, create a function which filters array based on a search query. */

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(params, kk) {
    return params.filter(word => word.includes(kk));
}


console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

//Bonus

/* 5. 
Get total orders
Return the total amount of orders.*/

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]; 

let sum = orders.reduce(function(a, b) {
    return a + b.amount;
}, 0)
console.log(sum); // 1075

/* 6. 
Sum Up
Write a function called sum that uses the reduce method to sum up an array of numbers.*/
let cc = [1,2,3,4,5];
let dd = [6,7,7];

let sum2 = cc.reduce(function(a, b) {
    return a + b;
}, 0)

console.log(sum2); ; //returns 15


