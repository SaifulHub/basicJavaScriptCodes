const fs = require('fs');

fs.rename("ReadExistingFile.js", "readExistingFile.js", (err)=>{
    if (err){
        console.log(err)
    } else{
        console.log("Successfully renamed.")
    }
});