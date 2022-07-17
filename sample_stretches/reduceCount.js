//reduceCount([1,3,4,2,4]); //{1:1, 2:1, 3:1, 4:2};
function reduceCount(arr){
  return arr.reduce((acc, init)=>{
    if(acc[init]){
      acc[init]++;
    }
    else{
      acc[init] = 1;
    }
    return acc;
  },{})
}
console.log(reduceCount([1,3,4,2,4]));
