//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const result = numbers.filter((num) => num >= 25);

const result2 = numbers.filter((num) => num % 5 == 0);
console.log(result);
console.log(result2);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const Q3 = numbers.map((num) => num * num);
const Q4 = numbers.map((num1) => num1 * 2);

console.log(Q3);
console.log(Q4);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const Q5 = numbers.filter((num) => num >= 20);
const result3 = Q5.map((num) => num * num);
console.log(result3);

const Q6 = result2.map((num) => {
  return num * 3;
});
console.log(Q6);
