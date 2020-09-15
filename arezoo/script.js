//1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

let arrayIncriment = arrayOfNumbers.map(function resultOfIncriment(num) {
  return (num += 1);
});

console.log(arrayIncriment);

//2
let squareRoot = arrayOfNumbers.map(function squareRootFinder(num) {
  return num * num;
});

console.log(squareRoot);

//3
const arrayNumber1 = [1, 2, 3, 11, 12, 13];
let filterEventNumners = arrayNumber1.filter(function finderEvenNumber(num) {
  return num % 2 == 0;
});
console.log(filterEventNumners);

//4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, str) {
  return arr.filter((element) =>
    element.toLowerCase().includes(str.toLowerCase())
  );
}
console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));

//5
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
//5
function totalAmount(arr) {
  return arr // Array of object [{amount:1}, {amount:2}]
    .map((order) => order.amount) // [1,2]
    .reduce((previous, current) => current + previous);
}
console.log(totalAmount(orders));

//test more
function maxAmount(arr) {
  return arr
    .map((order) => order.amount)
    .reduce((previous, current) => Math.max(previous, current));
}
console.log(maxAmount(orders));

//6
function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(sum([6, 7, 7]));
