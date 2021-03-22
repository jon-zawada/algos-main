/*
I arr of ints, k - non-negative
O arr of pairs [x,y] where x-y = k
C - sorted in y
E - no pairs, return []



input:  arr = [0,-1,-2, 2, 1], k = 1

output: [[0, -1], [1, 0], [-1, -2], [2, 1]]

x-y = k
1-0=1
0- -1 =1

steps
result = []
iterate through every element y
  compare to every other element x
  if x-y = k 
    push([x,y])
  
  return []
  
  
  
  O(N)
  O(N)
  

  
  x-y =k
  arr[i] =x
  y? =x-k  
  
  
  k=1
  
  k-y = ?
  arr = [0, -1, -2, 2, 1]
  stor[arr[i]]
  {
    0: 1,
    -1: 0,
    -2: -1

  }  
  
  
  [1,0]

*/




function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let result = [];
  for(let i = 0; i < arr.length; i++) { //y
    let y = arr[i];
    for(let j = 0; j < arr.length; j++) { //x
      if(j !== i) {
        let x = arr[j];
        if(x-y === k) {
          result.push([x,y]);
        } 
      }
    }
  }
  return result;
}

function findPairsWithGivenDifference(arr, k) {
  let result = [];
  let stor = {};
  for(let num of arr) {
    stor[num - k] = num;
  }
  for(let num of arr) {
    if(stor[num] !== undefined) {
      result.push([stor[num], num]);
    }
  }
  return result;
}

//console.log(findPairsWithGivenDifference([0,-1,-2, 2, 1], 1))

