const routes = require('express').Router();
const model = require('.././models/UserModel')


routes.get('/', function(request, response){
    model.findAll({
        attributes : ['id', 'email']
    }).then(data => {
        response.json(data)
    })
})

routes.post('/',function(request, response){
    model.create(request.body)
})

module.exports = routes;