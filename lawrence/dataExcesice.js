//1. Increment by 1
//```javascript 

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

let incArrayNum = arrayOfNumbers.map(num => num + 1);

console.log(incArrayNum); // [ 4, 46, 7, 57, 8, 10 ]

// #### 2. Square Root
//* Given an array of numbers, find the square root of each element in the array.

let finNums = [68,24,72,54,18,27,32];

 function numSquareRoot() {
    let squareNum = finNums.map((item) => {
        return Math.round(Math.sqrt(item))
    });

    return squareNum
 }

console.log(numSquareRoot()); // [8, 5, 8, 7, 4, 5, 6]
  
  

//# 3. Filter Evens
//* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

let numbers = [ 3,4,6,7,10,16,23,38,32,46,53]

function filterEvens(numbers) {
      
    return numbers % 2 === 0; 
}
let evenNum = numbers.filter(filterEvens);

console.log(evenNum); // [4,  6, 10, 16, 38, 32, 46 ]
 

// #### 4. Filter Friends
//* Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterFriends(arr,query) {
    return arr.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1) 
};

console.log(filterFriends(friends,"ka")); // [ 'rika' ]

console.log(filterFriends(friends,"e"));  //[ 'jenna', 'bleda', 'oliver' ]

// #### 5. Get total orders
//* Return the total amount of orders. 

let firstVal = 0;
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];


let orderSum = orders.reduce(function(total,newVal) {
    return total + newVal.amount;
}, firstVal);

console.log(orderSum); //  1075

// #### 6. Sum Up
//* Write a function called sum that uses the reduce method to sum up an array of numbers. 

let arrNum = [2,4,6,8,10];

let numSum = arrNum.reduce(function(total,first) {
    return total +first;
})

console.log(numSum);  // 30
