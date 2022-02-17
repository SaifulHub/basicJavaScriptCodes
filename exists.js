const fs = require('fs');

fs.exists("mFile.txt", (exists)=>{
    if (exists){
        console.log('Found')
    } else{
        console.log('Not found.')
    }
});