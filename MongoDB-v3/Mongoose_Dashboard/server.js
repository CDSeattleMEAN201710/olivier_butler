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
const JellySchema = new mongoose.Schema({
    name: {type: String, required: true},
    superpower: {type: String, required: true},
    squishiness: {type: String, required: true}
})
mongoose.model('Jelly', JellySchema)
const Jelly = mongoose.model('Jelly')


app.get('/', function(req, response){
    Jelly.find({}, (err, data)=>{
        console.log("Was there an error?" + err)
        response.render('home', {jellys: data})
    })
})
app.get('/jelly/new', function(req, response){
    response.render('new')
})
app.get('/jelly/:id', function(req, response){
    response.render('single')
})
app.get('/jelly/edit/:id', function(req, response){
    response.render('new', {pageTitle : "Edit"})
})

app.post('/jelly', function(request, response){
    var newJelly = new Jelly(request.body)
    newJelly.save((error)=>{
        console.log("Was there an error? " + error)
        response.redirect('/')
    })
})
app.post('/jelly/:id', function(){
    
})
app.post('/jelly/destroy/:id', function(){
    
})

app.listen(8888, function(){
    console.log("I live!")
})