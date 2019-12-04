// # Write a method that prints out every number from 1 to 100.
function oneToAHundred() {
  var number = 0;
  while (number < 100) {
    number += 1;
    console.log(number);
  }
}

oneToAHundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 ... 99).
function everyOtherNumber() {
  var number = 0;
  while (number < 100) {
    if (number % 2 !== 0) {
      console.log(number);
    }
    number += 1;
  }
}

everyOtherNumber();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.
function numberOf55(numbers) {
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 55) {
      count += 1;
    }
  });
  console.log(count);
}

numberOf55([1, 55, 23, 31, 55, 1002, 55, 2]);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function awesomesauced(strings) {
  var lengthOfArray = strings.length;
  var newArray = [];
  var index = 0;

  while (index < lengthOfArray) {
    newArray.push(strings[index]);
    if (index !== lengthOfArray - 1) {
      newArray.push("awesomesauce");
    }
    index += 1;
  }

  return newArray;
}

console.log(awesomesauced(["a", "b", "c", "d", "e"]));

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
var itemAmounts = { chair: 5, table: 2 };
itemAmounts["chair"] -= 2;
console.log(itemAmounts);

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
var itemAmounts = { chair: 5, table: 2 };
itemAmounts["desks"] = 7;
console.log(itemAmounts);

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
  var product = 1;
  while (num > 0) {
    product *= num;
    num -= 1;
  }
  return product;
}

console.log(factorial(5));

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function printSums(array1, array2) {
  array1.forEach(function(num1) {
    array2.forEach(function(num2) {
      console.log(num1 + num2);
    });
  });
}

printSums([1, 5, 10], [100, 500, 1000]);
