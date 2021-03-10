/* 
I - string of numbers
O - how many ways can i create that string with letters of alphabet
C - 
E - 


1 => 1 A
2 => 1 B
12 => 2 AB, L

 A            L
B


AZB

1262

  A                L
 Z  B               F
B     F              B
       B

*/

const alphabet = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
}
const decode = (str) => {
  let count = 0;
  let choice = '';
  const helper = (choices, final) => {
    if(final.length === str.length) {
      count++;
    } else {
      for(let i = 0; i < choices.length; i++) {
        choice += choices[i];
        let working
        if(choice)
      }
    }
  }
  helper(str, '');
}