/* function reverseStr(str) {
 return str.split('').reverse().join('');
}
console.log(reverseStr('hello')) */



/* function reverseStr(str) {
    for (let i = str.length - 1; i > -1; i--) {
      str = str.concat(str[i]);
    }
  
    return str.slice(str.length / 2);
  } */


  // i added the `index` arg here with a default value of 0
// the purpose of this index arg is just to help us iterate the string without using a for loop
const reverseString = (string, index = 0) => {
    // base case- if index reaches the end of the string, return the last char in the string
    if (index === string.length - 1) return string[index];
  
    // recursive step- call `reverseString(...)` here and concat the current character that you're on
    return reverseString(string, index + 1) + string[index];
  }