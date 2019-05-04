const routes = require('express').Router();

/* Set GET response for playlists */
routes.get('/', function(request, response){
    response.json([]);
})

routes.get('/:id', function(request, response){
    response.json({id: request.params.id, message: `Este es el número de id del usuario ${request.params.id}`});
})


module.exports = routes