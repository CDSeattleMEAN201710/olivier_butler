var express = require("express")
var path = require("path");

var app = express()
app.use(express.static(path.join(__dirname, "./static")))
app.set('views',path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render("counter", {counter:4})
})

app.get('/updateCounter')

app.listen(8884, function(request, response){
    console.log('We\'re listening, port number is 8884 \nView the site at http://localhost:8884')
})