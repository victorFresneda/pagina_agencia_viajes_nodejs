
import express from 'express';
import router from './routes/index.js';

const app = express();

//Definir puerto

const port = process.env.PORT || 4000;

//Habilitar pug 

app.set('view engine', 'pug');

//Obtener el año altual

app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    return next();
});

//Definir la carpeta publica

app.use(express.static('public'));

//Agregar Router

app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor funciona en puerto ${port}`)
})