const fs = require('fs');

let data = "This is a new file and created by writeFile.js";

fs.writeFile('newFile.txt' , data ,(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("File written successfully.");
        console.log("The file conains following contents:")
        console.log(fs.readFileSync("newfile.txt", "utf8"));
    }
})