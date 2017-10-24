var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

var app = express()
app.use(express.static(path.join(__dirname, './static/dist')))
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/anon-1', {useMongoClient: true})

const NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
    }
}, {timestamps: true})
mongoose.model('Note', NoteSchema)
const Note = mongoose.model('Note')

app.post("/note", (req, res) => {
    console.log('You want to make a new note', req.body)
    const newNote = new Note()
    newNote.note = req.body.note
    newNote.save( err => {
        if (err) {
            console.log("Failed to make new note", err)
            res.sendStatus(400)
        } else {
            console.log("Whoop! Saved a new note")
            res.sendStatus(200)
        }
        
    })
})

app.get("/note", (req, res) => {
    console.log('You asked for a note')
    let allNotes = []
    Note.find({}, (err, notes) => {
        if (err) { console.log("We have an error getting notes", err) }
        else {
            console.log("Manages to get notes", notes)
            for (let note of notes){
                allNotes.push(note)
            }
            console.log("Sending them back", allNotes)
            res.send(allNotes)
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./static/dist/index.html"))
});

app.listen(8888, function(){
    console.log("I live!")
})