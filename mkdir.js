const  fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "myDir"), (err) =>{
    if (err){
        console.log(err)
    } 
    console.log('Directory Created Successfully.')
})