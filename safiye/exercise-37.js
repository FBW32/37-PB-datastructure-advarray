//#### 1. Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
function incBy1(arr) {
  let newarr = [];
  arr.map((item) => {
    newarr.push((item += 1));
  });
  return newarr;
}

console.log(incBy1(arrayOfNumbers));

//#### 2. Square Root
let givenarr = [9, 25, 36, 81];
function findSquareRoot(arr) {
  let newarr = [];
  arr.map((item) => {
    let squareroot = Math.sqrt(item);
    newarr.push(squareroot);
  });
  return newarr;
}
console.log(findSquareRoot(givenarr));
//#### 3. Filter Evens
let filterEvens = (arr) => arr.filter((item) => item % 2 == 0);
console.log(filterEvens([1, 2, 3, 11, 12, 13]));

//#### 4. Filter Friends
let filterItems = (arr, query) =>
  arr.filter((item) => item.includes(query) == true);
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, "ka"));

//#### Bonus (reduce)

//#### 5. Get total orders
let totalOfOrders = (orders) => {
  let sum = 0;
  orders.map((obj) => (sum += obj.amount));
  return sum;
};

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

console.log(totalOfOrders(orders));

//#### 6. Sum Up
function sum(arr) {
  let reducer = (acc, cur) => acc + cur;
  return arr.reduce(reducer);
}
console.log(sum([1, 2, 3, 4, 5]));
