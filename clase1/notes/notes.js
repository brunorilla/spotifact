// Solicitar un módulo en node

// require() sólo puede importar JS files.

let http = require('http');
let routes = require('./routes');

http
    .createServer(function(request, response){
        let method = request.method.toLocaleLowerCase();
        let path = request.url.toLocaleLowerCase().replace('/','');
        let html = routes[method][path].html;
        response.write(html);
        console.log(html);
        // terminar la comunicación con el metodo end
        response.end('Fin de la comuniación // Communication has ended');
        /*
        // console.log(request);
        console.log("prueba");
        // Devolver parámetros de la comunicación:
        console.log(request.url);
        console.log(request.method);
        response.write(`<head>
                            <meta charset="UTF-8">
                        </head>`);
        switch(request.url){
            case '/':
                response.write(`<h1>Inicio</h1>`);
                break;
            case '/contact':
                if(request.method === 'GET'){
                    response.write(form);
                    } else {
                    response.write('OK');
                }
                break;
            default:
                response.writeHead(404);
        }
        switch(request.method) {
            case 'GET':
                break;
            case 'POST':
                response.write('');
                break;

            default:
                reponse.write(`<h2>Request method: Undefined</h2>`);
        }


        */


    })
    .listen(3000) // port