// separate str at 1st repeated num
const separateRepeatsOne = (str) =>{
    let arr = str.split('');
    let dupStartIdx = arr.findIndex((item, index) => arr.indexOf(item) !== index);
    if (dupStartIdx === -1) return [arr.join('')]
    let nonDups = arr.slice(0,dupStartIdx)
    let nonDupChunk = nonDups.join('')
    let nextArr = arr.slice(dupStartIdx)
    let nextStr = nextArr.join('')
    //result => returned result from each recursion
    let result = separateRepeatsOne(nextStr)
    result.unshift(nonDupChunk)
    return result
}
  console.log(separateRepeatsOne('123121')) //['123','12','1']