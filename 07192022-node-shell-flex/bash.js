/* terminal npm i nodemon: instant refreshing prompt
json script ->npm start 
control + c to quit 
a command prompt is an input field */

//process global module
//stdout: standard output -> Output a prompt
const done = (data) => {
  process.stdout.write(data);//console.log(data);
  process.stdout.write('\nprompt > ');//start a new line after execute the function/module
};

process.stdout.write('prompt > ');//Output a prompt at front

const main = (data) => {
  const cmd = data.toString().trim();//convert buffer & remove the newline
  //switch -case break 
  switch (cmd) {
    case 'pwd':
      require('./pwd')(done);//require and execute
      break;
    case 'ls':
      require('./ls')(done);
      break;
    case 'cat':
      require('./cat')(arg, done);
      break; 
    case 'date':
      require('./date')(done);
      break;
    default:
      done('not found');
  }
};
//stdin: standard input -> The stdin 'data' event fires after a user types in a line
//syntax process.stdin.on('data', callbackfunc(data)=>{});
process.stdin.on('data', main);


//Alternative Solution: if /else
/* 
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const date = require('./date');
if(cmd === 'pwd'){
  pwd(done);
}
if(cmd === 'ls'){
  ls(done);
}
if(cmd === 'cat'){
  cat(done);
}
if(cmd === 'date'){
  date(done);
}
else {
  done('not Found')
}
*/