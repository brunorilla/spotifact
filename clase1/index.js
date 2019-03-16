// Solicitar un módulo en node

// require() sólo puede importar JS files.

let http = require('http')
let routes = require('./routes')

// let isGet = async function (request) {
//     return request.method.toLowerCase() === 'get'
// }
//
// let isPath = function (request, path = '') {
//     return request.url.toLowerCase().replace('/', '') === path
// }

http
    .createServer(function (request, response) {

        let method = request.method.toLowerCase()

        let methodAllowed = typeof routes[method]

        if (methodAllowed === 'undefined') {
            return response.end('Method not allowed')
        }

        let path = request.url.toLowerCase().replace('/', '')

        let routePath = typeof routes[method][path]

        if (routePath === 'undefined') {
            return response.end('Not found')
        }

        response.write(routes[method][path].html)

        response.end()
    })
    .listen(3000) // port