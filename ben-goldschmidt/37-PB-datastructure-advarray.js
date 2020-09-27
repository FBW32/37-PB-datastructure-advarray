console.log("# Map, Filter, Reduce")

// own definitions
// map()    ---> "map" or go through all the elements
// filter() ---> "filter" out elements
// 

console.log("")
console.log("QUESTION 1. Increment by 1")

// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
let increment1 = arrayOfNumbers.map(num => num + 1);

console.log(increment1);




console.log("")
console.log("QUESTION 2. Square Root")
// * Given an array of numbers, find the square root of each element in the array.

const Q2arrayOfNumbers = [4, 9, 16, 25, 36, 49];
let squareRoot = Q2arrayOfNumbers.map(num => num ** (1 / 2));

console.log(squareRoot);




console.log("")
console.log("QUESTION 3. Filter Evens")
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```

let oddsEvensArray = [1, 2, 3, 11, 12, 13];

function filterEvens(oddsEvensArray) {
    return oddsEvensArray % 2 === 0;
}

let evens = oddsEvensArray.filter(filterEvens);

console.log(evens);




console.log("")
console.log("QUESTION 4. Filter Friends")
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```

let friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, query) {
    return arr.filter(element =>
        element.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];






// #### Bonus (reduce)

console.log("")
console.log("Bonus QUESTION 5. Get total orders")

// * Return the total amount of orders.

// ```javascript
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// ```

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

const totalsOrders = Object.values(orders).reduce((order, { amount }) => order + amount, 0);

console.log(totalsOrders);





console.log("")
console.log("Bonus QUESTION 6. Sum Up")
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```

function sum(arraySum) {
    console.log(arraySum.reduce((num, addNum) => num + addNum, 0));
}

sum([1, 2, 3, 4, 5]);
// 15
sum([6, 7, 7]);
// 20