var express = require("express")
var session = require("express-session")
var path = require("path")
// we also require ejs, but that's handled for you

var app = express()
var numberMagic = function(request){ 
    console.log("Here I am")
    console.log(request.query.myNumber)
    if (typeof request.session.myNum === "undefined") {
        console.log("Setting new number")
        request.session.myNum = Math.floor(Math.random() * 101)
    }
    console.log(request.session.myNum)
    if (request.query.myNumber == request.session.myNum){
        return true
    }
    return false
}

var numberReset = function(request){ 
    request.session.myNum = undefined
}


app.use(express.static(path.join(__dirname, "./static")))
app.use(session({
    secret: 'Xlkp14pugr98**bHPl6Ckj45673bSQQ2T0hhK3',
    resave: false,
    saveUninitialized: true
}))
app.set('views',path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('home')
})
app.get('/wrong', function(request, response){
    response.render('loose')
})
app.get('/winner', function(request, response){
    if (request.session.winner){
        request.session.winner = false
        response.render('winner', {correctNumber: request.session.myNum})
    } else {
        response.render('cheat')
    }
})

app.get('/guess', function(request, response){
    if (numberMagic(request)){
        console.log("You win!")
        request.session.winner = true
        response.redirect('/winner')
    } else {
        console.log(request.session.myNum)
        response.redirect('/wrong')
    }
})

app.get('/reset', function(request, response){
    numberReset(request)
    response.redirect('/')
})

app.listen(8885)