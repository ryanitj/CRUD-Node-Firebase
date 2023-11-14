import carros_rotas_api from './api/routes/api/carro.js'
import modelos_rotas_api from './api/routes/api/modelo.js'
import marcas_rotas_api from './api/routes/api/marca.js'

import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 5000;

app.listen(port, () => {});

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/front-end/pages/carros/index.html'));
})

app.get('/marcas', (req, res) => {
    res.sendFile(path.join(__dirname, '/front-end/pages/marcas/marcas.html'));
})

app.get('/modelos', (req, res) => {
    res.sendFile(path.join(__dirname, '/front-end/pages/modelos/modelos.html'));
})

app.use(
    '/api/v1/carros', carros_rotas_api, 
);

app.use(
    '/api/v1/modelos', modelos_rotas_api, 
);

app.use(
    '/api/v1/marcas', marcas_rotas_api, 
);