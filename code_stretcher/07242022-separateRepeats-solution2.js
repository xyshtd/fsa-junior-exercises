const separateRepeats = (string) => {
  // this object counts the occurrence of each num 
  const duplicates = {};

  // this holds the answer
  const array = [];

  for (const num of string) {
    // find the index of the array to concat this num into
    // if `num` is in duplicates, we concat `num` to duplicates[num]
    // if `num` is not in duplicates, we concat `num` to index 0
    const index = duplicates.hasOwnProperty(num) ? duplicates[num] : 0;

    // every time we see a duplicate, we need to concat `num` to the next index that does not have `num` in it
    // if we are already at the last index of `array`, there is no 'next index', so we push an empty string to the array
    if (index >= array.length) {
      array.push('');
    }

    // concat the element to the index
    array[index] = array[index].concat(num);

    // do these next 4 lines of code seem familiar? as you can probably tell, this is a very common pattern- to count the occurrence of each element
    if (!duplicates.hasOwnProperty(num)) {
      duplicates[num] = 1;
    } else {
      duplicates[num]++;
    }
  }

  return array;
}
console.log(separateRepeats('123121'))