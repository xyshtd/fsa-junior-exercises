const computeAverage = (scores)=> {
  return scores.reduce((sum, score)=> {
    sum = sum + score*1;
    return sum;
  }, 0) / scores.length;
};

module.exports = {
  computeAverage
};
/* 
// default export
module.exports = function defaultExportedFunction() {};
// named export
module.exports = {
  something,
  anotherThing,
}; 
*/
