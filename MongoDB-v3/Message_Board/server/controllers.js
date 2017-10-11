var mongoose = require("mongoose")
var models = require("./models")
var Post = models.Post
var Comment = models.Comment

module.exports = {
    showWall : function(request, response){
        console.log("We are here")
        Post.find({}, (err, data) => {
            if (err){
                response.render('home', {'posts':[]})
            } else {
                response.render('home', {'posts':data})
            }
        })
    },

    showError : function(req, response){
        response.send("You suck. Use your back button and try again.")
    },

    processPost : function(request, response, next){
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
    },

    processMessage : function(request, response){
        var comment = new Comment(request.body)
        Post.update({_id: request.body.postID}, {
            $addToSet: {comments: comment}
        }, function(error){
            response.redirect('/')
        })
    },
}