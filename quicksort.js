function quicksort(array) {
  if(array.length === 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  if(left.length > 0 && right.length > 0) {
    return [...quicksort(left), pivot, ...quicksort(right)];
  } else if(left.length > 0) {
    return [...quicksort(left), pivot];
  } else {
    return [pivot, ...quicksort(right)]
  }
};

const arr = [1,4,2,8,345,123,43,32, 92, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(quicksort(arr));

