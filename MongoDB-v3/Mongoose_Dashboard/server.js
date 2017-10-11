var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

var app = express()
app.use(express.static(path.join(__dirname, './client/static')))
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/dashboard-1', {useMongoClient: true})

app.get('/', function(req, response){
    const dumpJellyDB = [ 
        { info: [1] }, 
        { info: [1,1] }
    ]
    response.render('home', {jellys: dumpJellyDB})
})
app.get('/jelly/new', function(){
    response.render('new')
})
app.get('/jelly/:id', function(){
    response.render('single')
})
app.get('/jelly/edit/:id', function(){
    response.render('edit', {pageTitle : "Edit"})
})

app.post('/jelly', function(){
    
})
app.post('/jelly/:id', function(){
    
})
app.post('/jelly/destroy/:id', function(){
    
})

app.listen(8888, function(){
    console.log("I live!")
})