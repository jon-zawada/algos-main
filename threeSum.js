/*
"array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0

return all valid triplets that add up to target sum, distinct values

[[1,5,-6],[2,6,-8],[3,5,-8]]

          |                       |
"array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0


[0,1,2,3,4,5] O(N)
 l         r


[-8, -6, 1, 2, 3, 5, 6, 12] target= target + arr[i]
      i  l               r



ilr
if sum is greater than target
  decrement r
else increment  l
if(l <= r) break
if sum === target 
  stor triplelet
  move both pointers l up r down


0

[[2,6,-8]]

O(N**2)
O(C)
.sort()






[-8, -6, 1, 2, 3, 5, 6, 12] target= target + arr[i]
  i   l           i   l  r
  0   1                  n
*/

const threeSum = (arr, target) => {
  arr.sort((a,b) => (a-b));
  let result = [];
  for(let i = 0; i < arr.length - 1; i++) { //
    //if i > 0 and arr[i] == arr[i-1]:
        // continue
    let l = i + 1;
    let r = arr.length - 1;
    while(l < r) {
      let tempSum = arr[i] + arr[l] + arr[r];
      if(tempSum === target) {
        result.push([arr[i], arr[l], arr[r]]);
        l++;
        r--;
      } else if(tempSum < target) {
        l++;
      } else {
        r--;
      //while l < r and arr[r] == arr[r+1]: r -= 1   
      }
    }
  }
  return result;
}





console.log(threeSum([12, 3, 1, 2, -6, 5, 5, -8, 6], 0));


//[-8, -6, 1, 2, 3, 5, 6, 12]
//      i  l              r
//0
//0


