const array1 = [1,2,3,4,5,6,7,8,9,10]
console.log(array1.filter((value)=> value %2===0));
console.log(array1.filter((value)=> value %2===0).sort());

//2
//sort even numbers in an array:
function evenFilter(arr){
  return arr.filter((value) => {
    return value % 2 === 0
  }).sort(function(a, b) {
  return b - a;
})
}
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(evenFilter(array))
