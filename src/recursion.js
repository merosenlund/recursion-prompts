/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
// Inputs: A number
// Outputs: The factorial of the input number
// Constraints: None
// Edge Cases: Return null for negative numbers
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// Inputs: An array of numbers
// Outputs: The sum of all numbers in the input array
// Constraints: None
// Edgecases:
  // 1. Should return 0 for an empty array
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (typeof array === 'number') {
    return array;
  }
  var total = 0;
  array.forEach(function(item) {
    total += sum(item);
  });
  return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// Inputs: An array of number (May contain nested arrays)
// Outputs: The sum of all numbers in the array
// Constraints: None
// Edge Cases: Return zero for an empty array
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (typeof array === 'number') {
    return array;
  }
  var total = 0;
  array.forEach(function(item) {
    total += arraySum(item);
  });
  return total;
};

// 4. Check if a number is even.
// Input: A number
// Output: A boolean saying whether the number is even
// Constraints: Can't use the modulo operator
// Edge Cases: None
var isEven = function(n) {

  // Attempt #3 (Based off of this https://stackoverflow.com/questions/44423482/recursively-checking-for-odd-or-even)

  n = Math.abs(n);

  var isOdd = function(n) {
    return !isEven(n);
  }

  if (n === 0) {
    return true;
  } else {
    return isOdd(n - 1);
  }


  // Attempt #2

  // // Create a result variable and set it to false
  // var result = false;
  // // if n equals -2, 0, or 2
  // if (Math.floor(n / 2) * 2 === n) {
  //   // set the result to true
  //   result = true;
  // // Else if n is less than -2 and greater than 2
  // } else if (n < -2 || n > 2) {
  //   // Set the result to return value of calling isEven with n divided by 2 as the argument
  //   result = isEven(n / 2);
  // }
  // // Return result
  // return result;


  // Attempt #1

  // // Create an is even variable and set it to false
  // var result = false;
  // // If n is zero
  // var innerFunction = function(n) {
  //   if ((n === 0 || n === 2 || n === -2)) {
  //     // Set is even to true
  //     result = true;
  //   // Else
  //   } else if (n < -2 || n > 2) {
  //     // Set is even to the return value of calling the isEven function with n divided by 2
  //     innerFunction(n / 2);
  //   }
  // }
  // innerFunction(n);
  // // Return is even
  // return result;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// Inputs: An number to add up all the numbers lower than it
// Outputs: The sum of all the numbers lower than the input number and greater than zero
// Constraints:
  // 1. Must use recursion,
  // 2. Must now the difference between negative and positive number
// Edge Cases: If number is negative move up to zero, if number is positive move down to zero
var sumBelow = function(n) {
  var sum = 0;
  if (n < 0) {
    sum += n + 1;
  } else if (n > 0)
    sum += n -1;
  if (sum === 0) {
    return sum;
  } else if (n > 1) {
    return sum + sumBelow(n - 1);
  } else if (n < -1) {
    return sum + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// Inputs:
  // 1. A number to start the range after
  // 2. A number to end the range before
// Outputs: an array of numbers that fall between the input numbers
// Constraints:
  // 1. Should accept negative integers
  // 2. Should accept starting integers that are larger than ending integers
// Edge Cases:
  // 1. Return an empty array if no integers in range
var range = function(x, y) {
  if (x - y > -2 && x - y < 2) {
    return [];
  }
  var newX;
  var newY;
  if (y > x) {
    newX = x + 1;
    newY = y - 1;
  } else {
    newX = x - 1;
    newY = y + 1;
  }
  if (newX === newY) {
    return [newX];
  }
  var result = range(newX, newY);
  result.unshift(newX);
  result.push(newY);
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// Inputs:
  // 1. base, a number to be multiplied by itself exp times
  // 2. exp, a number that determines how many times to multiple base by itself
// Constraints: Should except negative numbers
// Edge Cases:
  // 1. If exp is 0 return 1
  // 2. If exp is 1 return base
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  var isNegative = false;
  if (exp < 0) {
    isNegative = true;
    exp *= -1;
  }
  var output = base * exponent(base, exp - 1);
  if (isNegative) {
    output = 1 / output;
  }
  return output;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// Inputs: A number to determine if it is a power of two
// Outputs: A boolean saying whether the input was a power of two or not
// Constraints: Use recursion
// Edge Cases: None
var powerOfTwo = function(n) {
  var isPowerOfTwo = false;
  if (n === 1) {
    isPowerOfTwo = true;
  } else if (n > 1) {
    isPowerOfTwo = powerOfTwo(n / 2);
  }
  return isPowerOfTwo;
};

// 9. Write a function that reverses a string.
// Inputs: A string to be reversed
// Outputs: A reverse of the input string
// Constraints: None
// Edge Cases: None
var reverse = function(string) {
  if (string.length === 1) {
    return string;
  }
  var firstLetter = string.slice(0, 1);
  var remainder = string.slice(1);
  var reversed = reverse(remainder);
  reversed += firstLetter;
  return reversed;
};

// 10. Write a function that determines if a string is a palindrome.
// Inputs: A string
// Outputs: A boolean determining if the input is a palindrome
// Constraints:
  // 1. Use recursion
  // 2. Ignore spaces and capital letters
// Edge Cases: None
var palindrome = function(string) {
  if (string.length === 0) {
    return true;
  }
  var first = string.slice(0, 1).toUpperCase();
  var last = string.slice(string.length - 1).toUpperCase();
  if (first !== last) {
    return false;
  }
  var middle = string.slice(1, string.length - 1);
  return palindrome(middle);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// Inputs:
  // 1. Interger to be divided
  // 2. Integer to divide by
// Outpus:
  // The remainder of dividing x by y
// Constraints: None
// Edge Cases:
  // 1. If zero is passed in for y we want to return NaN
var modulo = function(x, y) {
  if (y === 0 && x === 0) {
    return NaN;
  }
  var xIsNegative = false;
  if (x < 0) {
    x = -(x);
    xIsNegative = true;
  }
  if (y < 0) {
    y = -(y);
  }
  if (y > x) {
    return xIsNegative ? -(x) : x;
  }
  var result = x - y;
  if (result < y) {
    return xIsNegative ? -(result) : result;
  } else {
    return modulo(result, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// Inputs:
  // 1. Multipliee number
  // 2. Multiplier number
// Outputs: The result of 'Multiplying' the inputs
// Constraints: Can't use complex math (*, /, %, or Math)
// Edge Cases:
  // 1. Should correctly handle negative integers
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  } else if (y === -1) {
    return -(x);
  } else if (y === 1) {
    return x;
  } else {
    var newY = y < 0 ? y + 1 : y - 1;
    var result = multiply(x, newY);
    x = (x < 0) !== (result < 0) ? -(x) : x;
    return result + x;
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// Inputs:
  // 1. Number to be divided
  // 2. Number to be divided by
// Outputs: The result of 'dividing' x by y (rounded down)
// Constraints: Do not use complex math (*, /, %, or Math)
// Edge Cases:
  // 1. Should correctly handle negative integers
  // 2. Should return NaN if x and y are both zero
var divide = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  }
  var absX = x < 0 ? -(x) : x;
  var absY = y < 0 ? -(y) : y;
  if (x === 0 || y === 0 || absY > absX) {
    return 0;
  }
  var result = (x < 0) !== (y < 0) ? -1 : 1;
  var newX = (x < 0) ? -(absX - absY) : absX - absY;
  result += divide(newX, y)
  return result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
// Inputs: Two numbers to find the gcd of
// Outputs: The gcd of the two numbers
// Constraints: None
// Edge Cases: Return null for negative integers
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  var greater = x > y ? x : y;
  var lesser = x < y ? x : y;
  var remainder = modulo(greater, lesser);
  return gcd(lesser, remainder);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
// Inputs: two strings to compare
// Outputs: A boolean saying whether the strings are equal
// Constraints: Use recursion
// Edge Cases: Return false if the strings are of different length
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  } else if (str1.length === 0 && str1.length === 0) {
    return true;
  } else {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// Inputs: A string to convert to an array
// Outputs: An array with each character of the input string as a separate element
// Constraints: Use recursion
// Edge Cases: None
var createArray = function(str) {
  var result = [];
  if (str.length === 0) {
    return result;
  }
  result.push(str.slice(0, 1));
  result = result.concat(createArray(str.slice(1)));
  return result;
};

// 17. Reverse the order of an array
// Inputs: An array to be reversed
// Outputs: A new array that is reversed
// Constraints: None
// Edge Cases: None
var reverseArr = function(array) {
  if (array.length === 0) {
    return array;
  }
  var result = reverseArr(array.slice(1));
  result.push(array[0]);
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// Inputs: A value to fill the new array with, and the length to make the new array
// Outputs: A new array
// Constraints: None
// Edge Cases: None
var buildList = function(value, length) {
  // Base case if length equals zero
  if (length === 0) {
    // Return an empty array
    return [];
  }
  // Create a result array with a single value of value
  var result = [value];
  // Concat the result with the result of calling this function on value and length - 1
  result = result.concat(buildList(value, length - 1));
  // Return the result
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
// Inputs: An integer
// Outputs: An array of strings
// Constraints: None
// Edge Cases: None
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
// Inputs: An object (We don't know how deeply it could be nested with further objects)
// Outputs: A number showing how many times the value appears in the object
// Constraints: None
// Edge Cases: None
var countValuesInObj = function(obj, value) {
  var counter = 0;
  for (var key in obj) {
    var current = obj[key];
    if (typeof current !== 'object') {
      if (current === value) {
        counter++;
      }
    } else {
      counter += countValuesInObj(current, value);
    }
  }
  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// Inputs:
  // 1. An obj to search through
  // 2. An oldKey to search for
  // 3. A newKey to replace with
// Outputs: The changed object...
// Constraints: Should mutate the input object
// Edge Cases: None
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
