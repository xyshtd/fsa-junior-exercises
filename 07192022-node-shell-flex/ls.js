//fs is not a global module need to require
//'files' will be an array of filenames, like ['bash.js', 'pwd.js']
//ls reads current directory
const fs = require('fs');
module.exports = (done) => {
  fs.readdir('./', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data.join('\n'));
    }
  });
};

  /* 
  The fs.readdir() method is used to asynchronously read the contents of a given directory. The callback of this method returns an array of all the file names in the directory. The options argument can be used to change the format in which the files are returned from the method.

Syntax:fs.readdir( path, options, callback(err,files)=>{

} )
err: It is an error that would be thrown if the operation fails.
files: It is an array of String, Buffer or fs.Dirent objects that contain the files in the directory.
  */