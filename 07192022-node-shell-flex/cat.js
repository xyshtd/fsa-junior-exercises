//cat reads current file
//syntax:fs.readFile( filename, encoding, callbackfunction (err,data){})
const fs = require('fs');

module.exports = (fileName, done) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};