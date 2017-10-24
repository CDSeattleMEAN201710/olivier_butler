var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
app.use(express.static(path.join(__dirname, './static/dist')))
app.use(bodyParser.urlencoded({extended: true}))


app.listen(7000, ()=>{
    console.log("Listening on 7000")
})