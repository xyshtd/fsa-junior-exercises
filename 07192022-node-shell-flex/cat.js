const fs = require('fs');
//cat reads current file
module.exports = (fileName, done) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);// throw err;
    } else {
      done(data);
    }
  });
};