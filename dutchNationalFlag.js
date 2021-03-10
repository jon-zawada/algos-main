/* Dutch National Flag

Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.

Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.


Example

Input: [G, B, G, G, R, B, R, G]

Output: [R, R, G, G, G, G, B, B]

There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

Notes
Input Parameters: An array of characters named balls, consisting of letters from {‘R’, ‘G’, ‘B’}.

Output: Return type is void. Modify the input character array by rearranging the characters in-place.

Constraints:

1 <= n <= 100000
Do this in ONE pass over the array - NOT TWO passes, just one pass.
Solution is only allowed to use constant extra memory.

*/


/*
I array of balls *ORDER(RGB)
O sorted by color
C - in place, cant make more space
  -must be done in one pass
E

[] => []
[R] => [R]
[RG] => [RG]
[GR] => [RG]
[RBG] => [RGB]
[GBGR] =>[RGGB] 
[RGGB]
[G, B, G, G, R, B, R, G] => [R, R, R, G, B, B, B, B]
                               ^                  ^

if green
  next
if red
  swp red_i + 1
  next
if blue
  swp blue_i - 1


greens dont touch
Red starting point
  swap red with what comes after red starting point(it wont be a B)
Blue - first time throw at the end - B starting point
  swap blue with what comes before B line
    if its G
  double swap B-R --- Red logic goes to front

end 


*/


//My implementation
const nationalFlag = (balls) => {
  let red_i = -1;
  let blue_i = balls.length; 
  for(let i = 0; i < balls.length; i++) {
    if(i === blue_i) {
      break;
    }
    if(balls[i] === 'R') {
      let temp = balls[i];
      balls[i] = balls[++red_i];
      balls[red_i] = temp;
    } else if(balls[i] === 'B') {
      if(balls[blue_i - 1] === 'R') {
        let tempB = balls[i];
        balls[i] = balls[--blue_i];
        balls[blue_i] = tempB;
        let tempR = balls[i];
        balls[i] = balls[++red_i]
        balls[red_i] = tempR;
      } else {
        let tempB = balls[i];
        balls[i] = balls[--blue_i];
        balls[blue_i] = tempB;
      }
    }
  }
  return balls;
};



//CLEANER
let swap = (arr, first, second) => {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

let dutchNatFlag = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while(mid <= high) {
    if(arr[mid] === 'R') {
      swap(arr, low++, mid++);
    } else if(arr[mid] === 'B') {
      swap(arr, mid, high--);
    } else if(arr[mid] === 'G') {
      mid++;
    }
  }
  return arr;
};

console.log(nationalFlag(['G', 'B', 'G', 'G', 'R', 'B', 'R', 'G']));
console.log(dutchNatFlag(['G', 'B', 'G', 'G', 'R', 'B', 'R', 'G']));