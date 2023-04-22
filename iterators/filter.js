/**
 * Iterates over an array and returns a new array with based on callback returned condition.
 * 
 * @template T
 * @this {Array<T>}
 * @param {(value: T, index: number, array: T[]) => unknown} predicate
 * @returns {ReturnType<(value: T, index: number, array: T[]) => unkown[]>}
 */
function customFilter(predicate) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const condition = predicate(item, i, this);

    if (condition) {
      result.push(item);
    }
  }

  return result;
}

// ⚠️ Warning: Don't do this in production code
// Create a custom method inside Array.prototype scope
Array.prototype.customFilter = customFilter;

// Execute the method
const pairNumbers = [0, 1, 2, 3, 4, 5].customFilter((item) => item % 2 === 0);

// Print the result
console.log(pairNumbers); // [0, 2, 4]