var fs = require('fs');
var http = require('http')

http.createServer(function(req,res){
    if (req.url == "/"){
        res.end(fs.readFileSync('home.html'), 'utf-8')
    } else if(req.url == '/about'){

    }else if(req.url == '/contact'){

    }else if(req.url == '/terms'){

    }
})