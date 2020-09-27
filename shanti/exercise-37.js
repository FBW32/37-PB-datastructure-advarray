// Map, Filter, Reduce

/* 1. Increment by 1
    const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
    Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
*/
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
let increment = arrayOfNumbers.map(elem => elem + 1);
console.log(increment); // [ 4, 46, 7, 57, 8, 10 ]

/* 2. Square Root
    Given an array of numbers, find the square root of each element in the array. 
*/
const numbers = [4,9,16];
let newArr = numbers.map(elem => Math.sqrt(elem));
console.log(newArr); // [ 2, 3, 4 ]

// OR

let newArr1 = numbers.map(Math.sqrt);
console.log(newArr1); // [ 2, 3, 4 ]

/* 3. Filter Evens
    Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

    Examples:

    filterEvens([1,2,3,11,12,13]); //returns [2,12]
    filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
*/
filterEvens=[22,2,31,110,6,13];
console.log(filterEvens.filter(elem => elem % 2 === 0)); // [ 22, 2, 110, 6 ]

// OR

function filterEvens1(arr){
    return arr.filter(elem => elem % 2 === 0 );
}
console.log(filterEvens1([1,2,3,11,12,13])); // [2,12]
console.log(filterEvens1([22,2,31,110,6,13])); // [22,2,110,6]

/* 4. Filter Friends
    Given an array, create a function which filters array based on a search query.

    Examples

    const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
    console.log(filterItems(friends, 'ka')); // ["Rika"];
    console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
*/
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, str){
    let result =  arr.filter(elem => elem.includes(str.toLowerCase()));
    let toString = result.toString();
    return toString;
}
console.log(filterItems(friends, 'ka')); // rika
console.log(filterItems(friends, 'e')); // jenna,bleda,oliver

// OR

function filterItems1(arr, str) {
    return arr.filter(elem => elem.toLowerCase().indexOf(str.toLowerCase()) !== -1)
}
console.log(filterItems1(friends, 'ka')); // [ 'rika' ]
console.log(filterItems1(friends, 'e')); // [ 'jenna', 'bleda', 'oliver' ]

// Bonus (reduce)
/* 5. Get total orders
    Return the total amount of orders.
    const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
    ];
*/
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
let total = orders.reduce(all = (a,b) => {
    return a + b.amount
}, 0);
console.log(total); // 1075

/* 6. Sum Up
    Write a function called sum that uses the reduce method to sum up an array of numbers.

    Examples:

    sum([1,2,3,4,5]); //returns 15
    sum([6,7,7]); //returns 20
*/
function sum(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(sum([1,2,3,4,5])); // 15
console.log(sum([6,7,7])); // 20




