//terminal: node app.js
const scoreFns = require('./scoreFns');//internal file need ./
const fs = require('fs');//external 3rd party: The Node.js File System module

//aync operation
//fs.readFile(path,callback which takes two parameters: 1)err: If any error occurred; 2)data: Contents of the file.
fs.readFile('class1.txt', (err, data)=> {
  if(err){
    console.log(err);
  }
  else {
    //Stringify the buffer
    const lines = data.toString().trim().split('\n');//[ 'moe,68,92,77', 'lucy,99,88,92', 'curly,65,68' ]
      const users = lines.map(line => {
        const parts = line.split(',');//[ 'moe', '68', '92', '77' ]
        const scores = parts.slice(1);//[ '68', '92', '77' ]
     
      return {
        name: parts[0],
        averageScore: scoreFns.computeAverage(scores) 
      };
    }); 
    console.log(users);
  }
});

//execute before async
console.log('hello world');
