/**
 * Iterates over an array and accumulates a single value by applying a callback function to each element.
 * 
 * @template T
 * @this {Array<T>}
 * @param {(previousValue: T, currentValue: T, currentIndex, array: T[]) => unknown} callback
 * @param {unknown} initialValue
 * @returns {ReturnType<(value: T, index: number, array: T[]) => unknown>}
 */
function customReduce(callback, initialValue) {
  const initialValueExists = initialValue !== undefined

  let accumulated = initialValueExists ? initialValue : this[0];

  const startIdx = initialValueExists ? 0 : 1;

  for (let i = startIdx; i < this.length; i++) {
    accumulated = callback(accumulated, this[i], i, this);
  }
  return accumulated;
}

// ⚠️ Warning: Don't do this in production code
// Create a custom method inside Array.prototype scope
Array.prototype.customReduce = customReduce;

// Execute the method
const sum = [0, 1, 2, 3, 4, 5].customReduce((prev, cur) => prev + cur, 1);

// Print the result
console.log(sum); // 16