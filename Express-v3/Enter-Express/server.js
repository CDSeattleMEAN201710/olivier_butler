var express = require("express")
var app = express()

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response){
    response.send("<h1>Hi Guys!</h1>")
})

app.get('/stats', function(request, response){
    response.send(`
    <h1>Here be sexy stats</h1>
    <h2>The request</h2>
    <p>${request}</p>
    <h2>The response</h2>
    <p>${response}</p>
    `)
    console.log("The request!\n--------------\n")
    console.log(request)
    console.log("The response!\n--------------\n")
    console.log(response)

})

app.listen(8882, function(){
    console.log("We're listening on port 8882!")
    console.log(__dirname)
})