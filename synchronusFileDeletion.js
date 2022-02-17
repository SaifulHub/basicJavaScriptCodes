//Md. Saiful Islam
//ID : 181071016

var fs = require('fs');

readFiles();                                                                        //Existing File Show korar jonno function
fs.unlinkSync('demo.html');
console.log('\nFile Deleted.');
readFiles();                                                                             //Existing File Show korar jonno function

function readFiles(){                                                                      //Function daclaration
    console.log('\n_______Existing Files are: _______');
    let files =fs.readdirSync(__dirname);
    files.forEach(file =>{
        console.log(file);
    });
}