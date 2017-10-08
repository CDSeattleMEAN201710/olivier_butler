var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
    var route = req.url.split('/')
    var makeFileResponse = function(file, contentType = 'text/html'){
        res.writeHead(200, {'Content-type':contentType});
        res.write(file);
        res.end();
    }

    console.log('Our route is' + route)

    if (route[1] === "assets"){
        let contentType, baseRoute
        switch (route[2]){
            case 'styles':
                console.log('styles requested')
                contentType = "text/css"
                fs.readFile(`./stylesheets/${route[3]}`, 'utf8', function(err, file){
                    makeFileResponse(file, contentType)
                });
                break
            case 'images':
                console.log('image requested')
                let fileType = route[3].split('.')
                console.log(fileType)
                contentType = "img/" + fileType[fileType.length - 1]
                fs.readFile(`./images/${route[3]}`, function(err, file){
                    makeFileResponse(file, contentType)
                });
                break
            default:
                console.log('Asset file patterns not matched')
                break
        }

    } else if (route[1] === "aliens" || route[1] === "humans") {
        fs.readFile(`./views/${route[1]}.html`, 'utf8', function(err, file){
            makeFileResponse(file)
        })
    } else {
        res.writeHead(404);
        res.end('Error')
    }
});

server.listen(8881)