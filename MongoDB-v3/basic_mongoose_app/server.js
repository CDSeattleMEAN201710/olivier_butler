var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")

var mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose', { useMongoClient: true })
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); 
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')




app.get('/', function(req, response){
    var myUsers = []
    User.find({}, function(err, users) {
        for (user of users){
            myUsers.push({
                'name':user.name, 
                'age':user.age,
            })
        }
        console.log(myUsers)
        response.render('index', {'users':myUsers})
    })
})

app.post('/users', function(request, response){
    console.log("POST DATA", request.body);
    var user = new User({name: request.body.name, age: request.body.age});
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
        }
    })
    response.redirect('/');
})

app.listen(8886, function(r,q){
    console.log("Listening away on 8886")
})