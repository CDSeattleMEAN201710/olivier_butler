var express = require("express")
var mongoose = require("mongoose")
var path = require("path")
var bodyParser = require("body-parser")

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/message_board_1', { useMongoClient: true })

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
})

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [CommentSchema]
})

mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'./static')))
app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    console.log("We are here")
    Post.find({}, (err, data) => {
        if (err){
            response.render('home', {'posts':[]})
        } else {
            response.render('home', {'posts':data})
        }
    })
})

app.post('/post', function(request, response, next){
    var user = new Post(request.body)
    user.save((error) => {
        if (error){
            console.log("Error")
            response.redirect('/error')
            return
        }
        console.log(user)
        response.redirect('/')   
    })
})

app.get('/error', function(req, response){
    response.send("You suck. Use your back button and try again.")
})



app.post('/message', function(request, response){
    var comment = new Comment(request.body)
    Post.update({_id: request.body.postID}, {
        $addToSet: {comments: comment}
    }, function(error){
        response.redirect('/')
    })
})


app.listen(8887)