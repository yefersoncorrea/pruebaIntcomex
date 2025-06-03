// Importamos el paquete 'pg' para conectarnos a PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();

// Creamos una conexión a PostgreSQL usando variables de entorno
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USUARIO,
  password: process.env.DB_CONTRASENA,
  database: process.env.DB_NOMBRE,
});

module.exports = pool;