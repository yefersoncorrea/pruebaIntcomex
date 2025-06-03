const express = require('express');
const cors = require('cors');
require('dotenv').config();
const rutaProductos = require('./rutas/rutaProductos');

const app = express();
const PUERTO = process.env.PUERTO || 4000;

app.use(cors());

app.use(express.json());

app.use('/productos', rutaProductos);

app.listen(PUERTO, () => {
  console.log(`Servidor iniciado en http://localhost:${PUERTO}`);
});