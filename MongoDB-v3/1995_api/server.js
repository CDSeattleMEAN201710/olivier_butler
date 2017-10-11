var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

var app = express()
app.use(express.static(path.join(__dirname, './client/static')))
app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/1990_api', {useMongoClient: true})

var PersonSchema = new mongoose.Schema({
    name: {type: String, required: true}
})
mongoose.model('Person', PersonSchema)
var Person = mongoose.model('Person')

app.get('/', function(req, response){
    Person.find({}, function(err, data){
        if (err !== null){ console.log("We messed up the 'find all' query")}
        response.send(data)
    })
})
// Does fwd slash at end make change?
app.get('/new/:name/', function(request, response){
    const newPerson = new Person({name: request.params.name})
    newPerson.save((error)=>{
        if (error !== null){
            console.log("We went wrong saving the new peep")
        }
        response.redirect('/')
    })
})
app.get('/remove/:name/', function(request, response){
    Person.remove({name:request.params.name},(err)=>{
        if(err !== null){ console.log('Could not delete user of ${request.params.name}')}
        response.redirect('/')
    })
})

app.get('/:name/', function(request, response){
    Person.find({name: response.params.name}, function(err, data){
        if (err !== null){ console.log("We messed up finding your user")}
        response.send(data)
    })
})


app.listen(8889)