const routes = require('express').Router();
const model = require('.././models/playlistModel')


/* Set GET response for playlists */
routes.get('/', function(request, response){
    model.findAll({
        attributes : ['id','name']
    }).then(data => {
        response.json(data);
    })
})

routes.get('/:id', function(request, response){
    console.log("find by pk")
    model.findByPk(request.params.id)
        .then(data => response.json(data))
})

// Post response
routes.post('/', function(request,response){
    model.create({
        name: request.body.name,
        user_id : 1
    }).then(data => response.json(data)
    )
})

routes.post('/:id/liked-playlists',function(request,response){
    response.json({
        'data': request.body,
        'message': `la playlist ${request.params.id} ha sido likeada`
    })
})

/* Set delete response */
/* Set parameter (:id) as a part of the request */
/* parametros dentro del objeto request.params*/

routes.delete('/:id', function(request,response){
    model.update({
        deleted_at : new Date
    },{
        where : {id: request.params.id}
    })
        .then(response.json({'message' : 'eliminado', 'id': request.params.id}))
})

routes.delete('/:id/liked-playlists', function(request,response){
    response.json({
        'message': `el like para la playlist ${request.params.id} ha sido eliminado`,
    })
    response.status(201).end()
})


routes.patch('/:id', function(request, response){
    model.update({
        name : request.body.name
    }, {
        where : {id : request.params.id}
    }).then(data => {
        response.json(data)
    })
})

module.exports = routes


