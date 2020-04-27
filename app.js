const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' })
        let out = {
            nombre: 'Jose',
            apellido: 'Carreño',
            edad: '36',
            sexo: 'M'
        };
        res.write(JSON.stringify(out));
        // res.write('Hola a Todos!!');
        res.end();
        console.log('Escuchando en puerto 8000');
    })
    .listen(8000);