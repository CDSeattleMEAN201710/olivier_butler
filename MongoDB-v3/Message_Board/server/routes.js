controllers = require('./controllers')

module.exports = (app) => {
    app.get('/', controllers.showWall)
    app.get('/error', controllers.showError)
    app.post('/post', controllers.processPost)
    app.post('/message', controllers.processMessage)
}