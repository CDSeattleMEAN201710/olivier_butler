var express = require("express")
var path = require("path")
var session = require("express-session")

var app = express()
app.use(express.static(path.join(__dirname, "./static")))
app.use(session({
    secret: 'Xlkp14p2I5GOPl6CkjZHobSQQ2T0hhK3',
    resave: false,
    saveUninitialized: true
}))
app.set('views',path.join(__dirname, './views'))
app.set('view engine', 'ejs')

var counterGetSetter = function(sessionCounter, upHowMuch = 0){
    console.log('Preparing to play with the counter')
    let response = 0;
    if (typeof sessionCounter === "number"){
        console.log("Incrementing")
        response = sessionCounter + upHowMuch
    } else {
        console.log("Resetting")
    }
    return response
}

app.get('/', function(request, response){
    response.render("counter", {counter:counterGetSetter(request.session.counter)})
})
app.get('/updateCounterx1', function(request, response){
    request.session.counter = counterGetSetter(request.session.counter, 1)
    response.redirect('/')
})
app.get('/updateCounterx2', function(request, response){
    request.session.counter = counterGetSetter(request.session.counter, 2)
    response.redirect('/')
})
app.get('/resetCounter', function(request, response){
    request.session.counter = counterGetSetter(request.session.counter, (request.session.counter * -1))
    response.redirect('/')
})

app.listen(8884, function(request, response){
    console.log('We\'re listening, port number is 8884 \nView the site at http://localhost:8884')
})

