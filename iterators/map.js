/**
 * Iterates over an array and returns a new array with based on callback returned data.
 * 
 * @template T
 * @this {Array<T>}
 * @param {(value: T, index: number, array: T[]) => unknown} callback
 * @returns {ReturnType<(value: T, index: number, array: T[]) => unknown[]>}
 */
function customMap(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const newItem = callback(item, i, this);

    result.push(newItem);
  }

  return result;
}

// ⚠️ Warning: Don't do this in production code
// Create a custom method inside Array.prototype scope
Array.prototype.customMap = customMap;

// Execute the method
const multipliedByTwo = [0, 1, 2, 3, 4, 5].customMap((item) => item * 2);

// Print the result
console.log(multipliedByTwo); // [0, 2, 4, 6, 8, 10]