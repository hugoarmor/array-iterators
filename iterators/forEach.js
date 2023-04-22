/**
 * Iterates over an array and executes a callback function for each element.
 * 
 * @template T
 * @this {Array<T>}
 * @param {(value: T, index: number, array: T[]) => unknown} callback
 * @returns {void}
 */
function customForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    callback(item, i, this);
  }
}

// ⚠️ Warning: Don't do this in production code
// Create a custom method inside Array.prototype scope
Array.prototype.customForEach = customForEach;

// Execute the method
[0, 1, 2, 3, 4, 5].customForEach((item) => console.log(item)); // 0 1 2 3 4 5