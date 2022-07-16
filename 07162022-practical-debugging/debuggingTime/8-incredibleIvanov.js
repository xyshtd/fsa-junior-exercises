
// No need to debug these four lines (this is needed to get user input from the terminal)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Debug the code below
//bug: ${100 + yourNumber}
//other solution ${100 + yourNumber*1}
readline.question('Tell me your favorite number...', yourNumber => {
    console.log(`
  *********************************************************************
    The incredible Ivanov will now add 100 to your favorite number...
    
    ${100 + Number(yourNumber)}
  *********************************************************************
`);
  readline.close();
});

console.log();