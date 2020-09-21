// Map, Filter, Reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 1. Increment by 1
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
const newArr = arrayOfNumbers.map(x => x +1);
console.log(newArr);//[ 4, 46, 7, 57, 8, 10 ]

// 2. Square Root
// Given an array of numbers, find the square root of each element in the array.
//const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
function squareRoot() {
return arrayOfNumbers.map(item => Math.round( Math.sqrt(item)));
// return arrayOfNumbers.map(Math.sqrt);
}

console.log(squareRoot()); //[ 2, 7, 2, 7, 3, 3 ] => with math.round
/* => without arrow function and math.round()
[ 1.7320508075688772,
6.708203932499369,
2.449489742783178,
7.483314773547883,
2.6457513110645907,
3 ] */

// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
function filterEvens(values) {
    return values % 2 === 0;
  }
  let filtered = [1,2,3,11,12,13].filter(filterEvens);
  console.log(filtered); //[ 2, 12 ]

  //OR
  const array = [1,2,3,11,12,13];
  const result = array.filter(array => array % 2 == 0);
  console.log(result); //[ 2, 12 ]

// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, query) {
    return arr.filter(element => {
        return element.toLowerCase().indexOf(query.toLowerCase()) !==-1;
}
)
}console.log(filterItems(friends, 'ka')); //[ 'rika' ]
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5. Get total orders
// Return the total amount of orders.
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const total = orders.reduce((a, b) => ({amount: a.amount + b.amount})); // here use the key 'amount' to acess the values. 
console.log(total); //{ amount: 1075 }

// 6. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

function sum([...arr]) {
  return arr.reduce((a, b) => (a + b));
}
console.log(sum([1,2,3,4,5])); //15
console.log(sum([6,7,7])); //20