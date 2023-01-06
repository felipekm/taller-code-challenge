/*
Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.

The given coins can have any positive integer value and aren't necessarily unique 
(i.e., you can have multiple coins of the same value).

Sample Input: coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output: 20 
*/

function nonConstructibleChange(coins) {

  // Sort the array
  coins.sort((a, b) => a - b);

  // Initialize the change
  let change = 0;

  // Iterate over the array
  for (const coin of coins) {

    // If the coin is greater than the change + 1, return the change + 1
    if (coin > change + 1) {
      return change + 1;
    }

    // Add the coin to the change
    change += coin;
  }

  // Return the change
  return change + 1;
}

function init() {
  console.log(`
Issue: Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
  `);
  
  const ST_CASE_ARRAY_LIST = [5, 7, 1, 1, 2, 3, 22];
  const ND_CASE_ARRAY_LIST = [1, 1, 1, 1, 1];
  const RD_CASE_ARRAY_LIST = [1, 5, 1, 1, 1, 10, 15, 20, 100];

  const processedChange = nonConstructibleChange(ST_CASE_ARRAY_LIST);
  const processedChange2 = nonConstructibleChange(ND_CASE_ARRAY_LIST);
  const processedChange3 = nonConstructibleChange(RD_CASE_ARRAY_LIST);

  console.log(`  - Test case 1: [5,7,1,1,2,3,22] -> ${processedChange}`);
  console.log(`  - Test case 2: [1,1,1,1,1] -> ${processedChange2}`);
  console.log(`  - Test case 3: [1,5,1,1,1,10,15,20,100] -> ${processedChange3}`);
}

init();
