let form = require('./form');

module.exports = {
    'get': {
        'home': {
            'html':'<h1>Bienvenido</h1>'
        },
        'contact': {
            'html': form
        }
    },
    'post': {
        'contact': {
            'html': form
        }
    }

}