const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

let puerto = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    // res.send('Hola Mundo');

    // let out = {
    //     nombre: 'Jose',
    //     apellido: 'Carreño',
    //     edad: '36',
    //     sexo: 'M'
    // };
    // res.send(out);

    res.render('home', {
        nombre: 'jALCAR - jOsE cArReÑo'
    });
    res.render('about');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}.`);
});