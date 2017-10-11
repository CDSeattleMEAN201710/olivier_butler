var mongoose = require("mongoose")

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

module.exports = {
    Post : mongoose.model('Post'),
    Comment : mongoose.model('Comment')
}