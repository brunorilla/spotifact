const routes = require('express').Router();

/* Set GET response for playlists */
routes.get('/', function(request, response){
    response.json([]);
})

routes.patch('/',function(request,response){
    response.json({
        'data': request.body,
        'message': `los datos ${request.body.email} fueron actualizados`
    })
})



module.exports = routes