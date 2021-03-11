function getDifferentNumber(arr) {
  // your code goes here
  /*
  I unique nonnegative integers
  O smallest nonnegative integer NOT in array
  C - MAX INT = 2^31-1
  E -  0-2^31-1
  0123
  4

  1
  0
  
  0134
  2
  
  if element 1 less than previous element
    continue
  if not 
    return previous element plus 1
    
    
  */
  arr.sort((a,b) => (a-b));
  if(arr[0] !== 0) return 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i-1] !== arr[i] - 1){
      return arr[i-1] + 1;
    } 
  }
  return arr[arr.length - 1] + 1;
}



//console.log(getDifferentNumber([1,2,3]));
