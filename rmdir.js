const fs = require('fs');
const path  = require('path');

fs.rmdir('myDir', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('Folder Deleted successfully.');
    }
})