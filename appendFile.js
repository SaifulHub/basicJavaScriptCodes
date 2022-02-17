const fs = require('fs');

appendData = "\nThis text has been added by appendFile.js\n";

console.log('\nBefore appending: ')
console.log(fs.readFileSync('myFile.txt', 'utf-8'));

fs.appendFile('myFile.txt', appendData, (err) =>{
    if (err){
        console.log(err)
    } else{
        console.log('\nSuccesfully added text.')
        console.log('After Appending :')
        console.log(fs.readFileSync('myFile.txt', 'utf-8'));
    }
})