const fs = require("fs");

fs.readFile('myFile.txt', 'utf8',(err,data)=>{
    if (err){
        console.error(err)
    }else{
        console.log(data)
    }
})