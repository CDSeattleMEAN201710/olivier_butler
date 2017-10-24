var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

var app = express()
app.use(express.static(path.join(__dirname, './static/dist')))
//app.use(bodyParser)
app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/dashboard-1', {useMongoClient: true})

app.post("/note", (req, res) => {
    console.log('You wanted to make a note')
})

app.get("/note", (req, res) => {
    console.log('You asked for a note')
    let dummyNotes = [
        {note:"Hi I'm a note", created:"12/13/2009"},
        {note:"Why did I think that ray sponantiously coming up to me with help getting things done", created:"4/13/2009"},
        {note:"I really like chocolate", created:"12/13/2012"}
    ]
    res.send(dummyNotes)
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./static/dist/index.html"))
});

app.listen(8888, function(){
    console.log("I live!")
})