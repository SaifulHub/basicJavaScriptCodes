const fs = require('fs');

fs.open('mFile.txt','w', (err) =>{
    if (err){
        console.log(err);
    } else{
        console.log("File opened.");
    }
});