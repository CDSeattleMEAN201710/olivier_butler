var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/message_board_1', { useMongoClient: true })

module.exports = (app) => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(path.join(__dirname,'../client/static')))
    app.set('views', path.join(__dirname,'../client/views'))
    app.set('view engine', 'ejs')
}