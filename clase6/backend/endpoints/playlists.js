const routes = require('express').Router();


/* Set GET response for playlists */
routes.get('/', function(request, response){
    response.json([]);
})

routes.get('/:id', function(request, response){
    response.json({id: request.params.id, message: 'hola soy el método de la linea 19'});
})

// Post response
routes.post('/', function(request,response){
    response.json({
        'data': request.body,
        'message': 'la playlist ha sido creada'
    })
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
    response.json({'message' : 'eliminado', 'id': request.params.id})
})

routes.delete('/:id/liked-playlists', function(request,response){
    response.json({
        'message': `el like para la playlist ${request.params.id} ha sido eliminado`,
    })
    response.status(201).end()
})

module.exports = routes