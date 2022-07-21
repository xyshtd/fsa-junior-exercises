const scoreFns = require('./scoreFns');
const fs = require('fs');

fs.readFile('class1.txt', (err, data)=> {
  if(err){
    console.log(err);
  }
  else {
    const lines = data.toString().trim().split('\n');
    const users = lines.map( line => {
      const parts = line.split(',');
      const scores = parts.slice(1);
      console.log(scores);
      return {
        name: parts[0],
        averageScore: scoreFns.computeAverage(scores) 
      };
    });
    console.log(users);
  }
});

console.log('hello world');
