function numOfPathsToDest(n) {
  // your code goes here
  /*
  INPUT - n size n*n grid
  OUTPUT - number of possible paths from 0,0 to top right N-1,N-1
  CONSTRAINTS - 
  edgecases
  0,0
  [1,1,1,1],    each integer represents how many ways to get to this spot
  [0,1,2,3],
  [0,0,2,5],
  [0,0,0,5]
  i,j
  1,0 1,1 1,2 1,3 1,4
  j >= i
  2,0 2,1
  
  
  
  1,0 0,1
  
  11111
  01234
  013610
  0141020
  00000
  
  
  i >= j
  generate N*N matrix
  fill first row with 1s
  after generation
    
      
      
 return matirx[n-1][n-1];

  */
  let matrix = [];
  for(let i = 0 ; i < n; i++) {
    let newRow = [];
    if(i === 0) {
      for(let j = 0; j < n; j++) {
        newRow.push(1);
      }
      matrix.push(newRow);
    } else {
      for(let j = 0; j < n; j++) {
        newRow.push(0);
      }
      matrix.push(newRow);
    }
  }
  
  for(let i = 1; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(j >= i) {
        matrix[i][j] = matrix[i][j-1] + matrix[i-1][j];
      }
    }
  }
  return matrix[n-1][n-1];
}


console.log(numOfPathsToDest(4));
