/**
 * Array.prototype.map()
 * 
 * Iterates over an array and returns a new array with based on callback returned data.
 */
[0, 1, 2, 3, 4, 5].map((item) => item * 2); // [0, 2, 4, 6, 8, 10]

/**
 * Array.prototype.flatMap()
 * 
 * Iterates over an array and applies a callback function that returns a new flattened array.
 */
[[0], [1], [2], [3], [4], [5]].flatMap(item => item); // [0, 1, 2, 3, 4, 5]

/**
 * Array.prototype.filter()
 * 
 * Iterates over an array and returns a new array with based on callback returned condition.
 */
[0, 1, 2, 3, 4, 5].filter((item) => item % 2 === 0); // [0, 2, 4]

/**
 * Array.prototype.reduce()
 * 
 * Iterates over an array and accumulates a single value by applying a callback function to each element.
 */
[0, 1, 2, 3, 4, 5].reduce((prev, cur) => prev + cur, 1); // 16

/**
 * Array.prototype.forEach()
 * 
 * Iterates over an array and executes a callback function for each element.
 */
[0, 1, 2, 3, 4, 5].forEach((item) => console.log(item)); // 0 1 2 3 4 5