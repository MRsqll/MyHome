var http = require('http')
var fs = require('fs')
var url = require('url');
var server = http.createServer(function(req,res){
    var path = req.url.toString()
    switch(path.split('.')[1]){
        case undefined :
            res.writeHead(200,{"Content-type":"text/html;chartset=UTF-8"});
            break;
        case 'css':
            res.writeHead(200,{"Content-type":"text/css;chartset=UTF-8"});
            break;
        case 'js':
            res.writeHead(200,{"Content-type":"application/javascript;chartset=UTF-8"});
            break;
        case 'img':
            res.writeHead(200,{"Content-type":"image/jpeg"});
        default:
            res.writeHead(200,{"Content-type":"image/jpeg"});
            break;
    }
    if(req.url == '/'){
        fs.readFile('./index.html',function(err,data){
            res.end(data)
        })
    }else{
        fs.readFile(`.${req.url}`,function(err,data){
            res.end(data.toString())
        })
    }
})


server.listen(3000,'127.0.0.1');