/* 
write unique
takes a string, returns a string with any duplicate characters removed
try and solve it using reduce
*/

//solution 1: Set() -> unique value
const unique = (str) =>{
	const set = new Set(str.split(''));
    return [...set].join('');
}
/*solution 2: indexOf -> index of element first appears
const unique =(str)=>{
  const arr =str.split('')
  return arr.filter((item, index) => arr.indexOf(item) === index).join('');
}
*/
console.log(unique('abc'));//abc
console.log(unique('aabba'));//ab
console.log(unique(''));//''
console.log(unique('ddddddd'));//'d'