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

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index = index + 1;
  });
  return result;
}

console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
function max(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}

console.log(max([5, 4, 8, 1, 2]));

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(number) {
  var result = 1;
  var current_number = number;
  for (var i = 0; i < number; i++) {
    result = result * current_number;
    current_number--;
  }
  return result;
}

console.log(factorial(5));

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.
function descending(numbers) {
  numbers[numbers.length - 1];
  var result = [];
  var index = numbers.length - 1;
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[index]);
    index = index - 1;
  }
  return result;
}

console.log(descending([1, 3, 5, 7]));

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// 1. Write a function that takes in an array of numbers and returns its sum.
function sum(numbers) {
  var result = 0;
  var index = 0;
  while (index < numbers.length) {
    result += numbers[index];
    index += 1;
  }
  return result;
}

console.log(sum([1, 2, 3]));

// 2. Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  // With a while loop
  var result = strings[0];
  var index = 0;
  while (index < strings.length) {
    if (strings[index].length < result.length) {
      result = strings[index];
    }
    index += 1;
  }
  return result;

  // // With a forEach method
  // var result = strings[0];
  // strings.forEach(function(string) {
  //   if (string.length < result.length) {
  //     result = string;
  //   }
  // });
  // return result;

  // // With a reduce method
  // return strings.reduce(function(result, string) {
  //   if (string.length < result.length) {
  //     return string;
  //   } else {
  //     return result;
  //   }
  // }, strings[0]);
}

console.log(smallestString(["bob", "apple", "orange", "pear", "a", "grapes"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
function reversedNumbers(numbers) {
  var result = [];
  var index = numbers.length - 1;
  while (index >= 0) {
    result.push(numbers[index]);
    index -= 1;
  }
  return result;
}

console.log(reversedNumbers([1, 2, 3]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".
function aWords(words) {
  var result = 0;
  var index = 0;
  while (index < words.length) {
    if (words[index][0] === "a") {
      result += 1;
    }
    index += 1;
  }
  return result;
}

console.log(aWords(["apple", "orange", "grapes"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function joinWithCommas(strings) {
  var result = "";
  var index = 0;
  while (index < strings.length) {
    result += strings[index] + ",";
    index += 1;
  }
  return result;
}

console.log(joinWithCommas(["apple", "orange", "grapes"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
function product(numbers) {
  var result = 1;
  var index = 0;
  while (index < numbers.length) {
    result = result * numbers[index];
    index += 1;
  }
  return result;
}

console.log(product([1, 2, 3, 4]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallestNumbers(numbers) {
  var smallestIndex = 0;
  var smallest = numbers[smallestIndex];
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] < smallest) {
      smallest = numbers[index];
      smallestIndex = index;
    }
    index += 1;
  }
  var secondSmallest = numbers[smallestIndex + 1];
  index = 0;
  while (index < numbers.length) {
    if (numbers[index] < secondSmallest && index !== smallestIndex) {
      secondSmallest = numbers[index];
    }
    index += 1;
  }
  return [smallest, secondSmallest];
}

console.log(twoSmallestNumbers([1, 10, 9, 3, 23, 12]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function zeroCount(numbers) {
  var result = 0;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] === 0) {
      result += 1;
    }
    index += 1;
  }
  return result;
}

console.log(zeroCount([9, 32, 0, 2, 0, 12, 5, 2, 0, 1, 0, 0]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
function isAllBig(numbers) {
  var result = true;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] <= 10) {
      result = false;
    }
    index += 1;
  }
  return result;
}

console.log(isAllBig([11, 23, 32]));

// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.
function aCount(words) {
  var result = 0;
  var index = 0;
  while (index < words.length) {
    var word = words[index];
    var index2 = 0;
    while (index2 < word.length) {
      if (word[index2] === "a") {
        result += 1;
      }
      index2 += 1;
    }
    index += 1;
  }
  return result;
}

console.log(aCount(["apple", "orange", "grapes"]));
