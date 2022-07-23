const filterMultiples = (arr, num)=> {
  return arr.filter((item)=> {
    return item % num !== 0;
  });
  
}

//console.log(filterMultiples([1, 3, 9, 11], 3));//[1, 11];

//const arr = [7, 11, 2];

//console.log(filterMultiples(arr, 7));//[11, 2]

//console.log(arr);


