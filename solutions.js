// 1. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
let increasedNumbers = arrayOfNumbers.map(num => num + 1);
console.log(increasedNumbers);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 2. Square Root
// Given an array of numbers, find the square root of each element in the array.

let numArr1= [4, 9, 16, 25]

let squareRoot = numArr1.map(num => Math.sqrt(num));
console.log(squareRoot);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
const arrayOfNumbers1 = [3, 45, 6, 56, 7, 9]; 
let filterEvens = arrayOfNumbers1.filter(num => num % 2 === 0);
console.log(filterEvens);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

let newFriend = friends.filter(name => name.startsWith('it') || name.match(/rik/));

console.log(newFriend);

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


