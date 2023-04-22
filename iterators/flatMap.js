/**
 * Iterates over an array and applies a callback function that returns a new flattened array.
 * 
 * @template T
 * @this {Array<T>}
 * @param {(value: T, index: number, array: T[]) => unknown} callback
 * @returns {ReturnType<(value: T, index: number, array: T[]) => unknown[]>}
 */
function customFlatMap(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const newItem = callback(item, i, this);

    result.push(...newItem);
  }

  return result;
}

// ⚠️ Warning: Don't do this in production code
// Create a custom method inside Array.prototype scope
Array.prototype.customFlatMap = customFlatMap;

// Execute the method
const multipliedByTwo = [[0], [1], [2], [3], [4], [5]].customFlatMap(item => item);

// Print the result
console.log(multipliedByTwo); // [0, 1, 2, 3, 4, 5]