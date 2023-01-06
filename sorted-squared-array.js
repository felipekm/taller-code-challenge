/*
  Write a function that takes in a non-empty array of integers that are sorted in ascending order 
  and returns a new array of the same length with the squares of the original integers 
  also sorted in ascending order.

  Sample Input: [1, 2, 3, 5, 6, 8, 9]
*/

function sortedSquaredArray(array) {
  
  // Initialize the result array
  const result = [];

  // Iterate over the array
  for (const item of array) {

    // Push the squared item to the result array
    result.push(item * item);
  }

  // Sort the result array
  result.sort((a, b) => a - b);

  // Return the result array
  return result;
}

function init() {
  console.log(`
Issue: Write a function that takes in a non-empty array of integers that are sorted in ascending order
and returns a new array of the same length with the squares of the original integers
also sorted in ascending order.\n`);

  const ST_CASE_ARRAY_LIST = [1, 2, 3, 5, 6, 8, 9];
  const ND_CASE_ARRAY_LIST = [-2, -1];
  const RD_CASE_ARRAY_LIST = [-10, -5, 0, 5, 10];

  const processedArray = sortedSquaredArray(ST_CASE_ARRAY_LIST);
  const processedArray2 = sortedSquaredArray(ND_CASE_ARRAY_LIST);
  const processedArray3 = sortedSquaredArray(RD_CASE_ARRAY_LIST);

  console.log(`  - Test case 1: [1,2,3,5,6,8,9] -> [${processedArray.toString()}]`);
  console.log(`  - Test case 2: [-2,-1] -> [${processedArray2.toString()}]`);
  console.log(`  - Test case 3: [-10,-5,0,5,10] -> [${processedArray3.toString()}]`);
}

init();