const odd = (n)=> n % 2;
const even = (n)=> n % 2 == 0;
const multipleOfThree = (n)=> n % 3 == 0;

const filter=(arr,func)=>{
  const result = [];
  for(let i=0; i<arr.length; i++){
  	if (func(arr[i])){
      result.push(arr[i]);
  	}
  }
  return result;
}
console.log(filter([1, 2, 3], odd));//[1, 3]
console.log(filter([1, 2, 3], even));//[2]
console.log(filter([1, 2, 3], multipleOfThree));//[3]

/* solution 2
const filter = (array, callback) => {
  const filtered = [];
  for (const element of array) {
   	if (callback(element)) filtered.push(element); 
  }
  
  return filtered;
};
*/

/* solution 3 if .filter allowed
  const filter = (array, callback) => array.filter(callback);

*/