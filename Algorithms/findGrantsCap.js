/*
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, 
the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to 
reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. 
Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap 
such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).
*/

//Time: O(nlog(n)) | Space: O(1)
function findGrantsCap(grantsArray, newBudget) {
  let totalGrants = grantsArray.reduce((a, c) => a += c, 0);
  if (totalGrants <= newBudget) return 0;
  grantsArray.sort((a, b) => a - b);
  let [cap, counter] = [0, 0];
  for (let i = grantsArray.length - 1; i >= 0; i--) {
    if (cap >= grantsArray[i]) break;
    counter++;
    totalGrants -= grantsArray[i];
    if (grantsArray[i] > newBudget || totalGrants > newBudget) continue;
    const distributionAmt = newBudget - totalGrants;
    if (distributionAmt < 0) continue;
    const calculatedCap = distributionAmt/counter;
    if (calculatedCap >= cap) cap = calculatedCap;
  }
  return cap;
}

//findGrantsCap([2,100,50,120,1000], 190) // 47
//findGrantsCap([2,100,50,120,167], 400) // 128
//findGrantsCap([21,100,50,120,130,110], 140) // 23.8
findGrantsCap([210,200,150,193,130,110,209,342,117], 1530) // 211
