const express = require('express');
var bodyParser = require('body-parser');
let playlistRoutes = require('./endpoints/playlists')
let userRoutes = require('./endpoints/profile')
let albumRoutes = require('./endpoints/albums')
let usersRoutes = require('./endpoints/users');
// Instantiate express

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* Set GET response */

app.get('/', function(request,response){
    console.log('Get response');
    response.json({
        'playlists' : '/playlists',
        'albums' : '/albums',
        'profile' : '/me',
    })
})


// Routear playlists

app.use('/playlists', playlistRoutes);
app.use('/me', userRoutes);
app.use('/albums', albumRoutes);
app.use('/users', usersRoutes);
// Colleccion (muchos datos devueltos



// Resource




/* Set/stat Server */

let server = app.listen(3000, ()=>{
    console.log('La aplicación está escuchando el puerto 3000');
});