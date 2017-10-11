var express = require("express")
var configure = require("./server/configure")
var routes = require("./server/routes")

var app = express()
configure(app)
routes(app)

app.listen(8887)