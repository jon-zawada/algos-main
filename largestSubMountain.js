function largestSubMountain(arr) {
  let max = 1;
  let current = 1;
  let direction = true;
  let haveInclinded = false;
  //true - incline, false - decline
  for(let i = 0; i < arr.length; i++) {
    if(direction) {
      if(arr[i] < arr[i+1]) {
        current++;
      } else if(arr[i] > arr[i+1]) {
        direction = false;
        current++;
      } else {
        current = 1;
      }
    } else if {
      if(arr[i] > arr[i+1]) {
        current++;
      } else if(arr[i] < arr[i+1]) {
        direction = true;
        max = Math.max(current, max);
        current = 1;
      } else {
        max = Math.max(current, max)
        current = 1;
        direction = true;
      }
    }
  }
  return max;
}

console.log(largestSubMountain([2,1,2,1]));
