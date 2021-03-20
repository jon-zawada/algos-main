/*
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.

For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.

Given a string and a rotation factor, return an encrypted string.

Signature
  string rotationalCipher(string input, int rotationFactor)
  
Input
  1 <= |input| <= 1,000,000
  0 <= rotationFactor <= 1,000,000
Output
  Return the result of rotating input a number of times equal to rotationFactor.
  
  rotation = nums/alphStrs 
                -rotate numbers, indiviudal integers
                -rotate numeric/alphabetic order given K 
  
  I - str, int rFactor
  O - str - encrypted
  C - only rotate nums/alpha 
  E
  
  
  A,1 => B
  
  B3, 2 => D5
  
  -C100, 3 => -F433
  
  b -> e
  Z -> C
  1 -> 3
  9 -> 2
  lowercase
  uppercase
  digit
  punctuation
  
  1000
  0
  26
  10
  52
  
  
  
  input = Zebra-493?
  rotationFactor = 3
  output = Cheud-726?
  
  C0a-
  
  result = 'C'
  e = 
  h = 67
  

  
  
  
  steps
    define bounds lower, upper, digits
    if alpha?
      if 90 >= charcode at >= 65
        find asci value charAt
        increment  value 
          if capital value > 90
            reset to 65 keep incrementing
            newString
        result += newString;
      if 122 >= charcode at >= 97
        find asic value charAt
        increment value 
            if capital value > 122
              reset to 97 keep incrementing
              fromCharcCode -> newString
          result += newString;
    if 57 >= charcode at >= 48
        find asci
        increment val
          if val > 57
          reset to 48 keep incrementing
          newString
          result += newString
        
    else
      result += current
      
      
      

  'a'.charCodeAt(0) => 97
  'ab'.charCodeAt(1) => 98
  String.fromCharCode(97) => 'a'
  '8'.char
Lower: 97 - 122
Upper: 65 - 90
Digits: 48 - 57

0 9
 
  
Example 1
  input = Zebra-493?
  rotationFactor = 3
  output = Cheud-726?
Example 2
  input = abcdefghijklmNOPQRSTUVWXYZ0123456789
  rotationFactor = 39
  output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
  
for each char
  if lowercase:
    rotate
    add rotated to res
  if uppercase:
    rotate
    add rotated to res
  if digit
    rotate
    add rotated to res
  else
    add char to res


[121]
[122]
[311]

ascending,peak,descend
ascending, plato
descending,ascending
    
    
    
rotation, wrap-rotation, multi-wrap-rotation, no-rotation 10,26,     

Lower: 97 - 122
Upper: 65 - 90
Digits: 48 - 57

upper: 65 - 90
  - code - 65 (code is now between 0-25)
  - code = (code + rotation) % 26
  - code + 65
lower: 97 - 122
  - code - 97
  - code = (code + rotation) % 26
  - code + 97
digit: 48 - 57
  - code - 48
  - code = (code + rotation) % 10
  - code + 48
other:
  - code stays same

turn code into character, add character to str
    
    
    
alpha
number
[]


for each character
  if alphanumeric
    rotate character
    add to result
    
    at ki:
    reslove string in brackets
    duplicate resolved k times
    return duplicated str

space on call stack: numK's calls to decode_str
O(n) to look at each character
*/

function rotationalCipher(input, rotationFactor) {
  let lower = [97,122];
  let upper = [65, 90];
  let digits = [48, 57];
  let result = '';
  for(let str of input) {
    let code = str.charCodeAt();
    if(lower[1] <= code <= lower[0]) {
      if(code + rotationFactor > 122) {
        result += String.fromCharCode(code + rotationFactor - 122 + 97 - 1); 
      } else {
        String.fromCharCode(code + rotationFactor);
      }
    } else if(upper[1] <= code <= lower[0]) {
      if(code + rotationFactor > 122) {
        result += String.fromCharCode(code + rotationFactor - 122 + 97 - 1); 
      } else {
        String.fromCharCode(code + rotationFactor);
      }
  }
//     steps
//     define bounds lower, upper, digits
//     if alpha?
//       if 90 >= charcode at >= 65
//         find asci value charAt
//         increment  value 
//           if capital value > 90
//             reset to 65 keep incrementing
//             newString
//         result += newString;
//       if 122 >= charcode at >= 97
//         find asic value charAt
//         increment value 
//             if capital value > 122
//               reset to 97 keep incrementing
//               fromCharcCode -> newString
//           result += newString;
//     if 57 >= charcode at >= 48
//         find asci
//         increment val
//           if val > 57
//           reset to 48 keep incrementing
//           newString
//           result += newString
        
//     else
//       result += current
  
}
