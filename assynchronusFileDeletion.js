//Md. Saiful Islam
//ID : 181071016

var fs = require('fs');

readFiles();
fs.unlink('demo.html', err =>{
    if (err) console.log(err);
    else{
        console.log('\nFile deleted.');
        readFiles();
    }
});

function readFiles(){
    console.log('\n_______Existing Files are: _______');
    let files =fs.readdirSync(__dirname);
    files.forEach(file =>{
        console.log(file);
    });
}