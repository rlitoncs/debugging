/**
 * Errors:
 * 1) function was missing an ending brace }
 * 2) wrong use of operator ++, the intended operator should be += to add each element
 *
 * Fix all the errors in both files (each file may have more than one error), without changing the implementations.
 */

function average(list) {
  let sum = 0;
  
  for (let num of list) {
    sum += num;
  }
  
  return sum / list.length;
}
console.log(average([3, 5, 7]));