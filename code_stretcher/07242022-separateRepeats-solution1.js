/*Create a function called separateRepeats that takes in a string of numbers
This function should return an array of strings
Each time a number repeats it should be put into the next index
*/

//repetitive -> recursion 
//1. base case: when the nextStr is blank, return an array with the currentStr.
//2. recursive case: add nums that appear first time to currentStr; add nums that appear more than once to nextStr
//2-a. how to tell first time? use a map to track if the number appears.
//O(1) lookup
const separateRepeats = (str) =>{
    const map = new Set();
    let currentStr = '';
    let nextStr = '';
    for (let i=0; i<str.length; i++){
      let num = str[i]
      if (!map.has(num)){
        map.add(num)
        currentStr+=num;
      }
      else {
        nextStr+=num;
      }
    }
    if (!nextStr){
      return [currentStr];
    }
    let result = separateRepeats(nextStr)
    result.unshift(currentStr) 
    return result;
  }
  
  console.log(separateRepeats('1234567890')) // [ '1234567890' ]
  console.log(separateRepeats('1231243')) // [ '1234', '123' ]
  console.log(separateRepeats('6132256671260')) // [ '6132570', '261', '62', '6' ]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// if lookup use set() or object {}
// if iteration use array[]