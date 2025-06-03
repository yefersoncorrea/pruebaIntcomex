const pool = require('../baseDatos/conexion');

// Modelo para obtener todos los productos
const obtenerProductos = async () => {
  const resultado = await pool.query('SELECT * FROM productos ORDER BY id');
  return resultado.rows;
};

// Modelo para obtener un producto por ID
const obtenerProductoPorId = async (id) => {
  const resultado = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
  return resultado.rows[0];
};

// Modelo para crear un nuevo producto
const crearProducto = async ({ nombre, precio, enStock }) => {
  const resultado = await pool.query(
    'INSERT INTO productos (nombre, precio, enStock) VALUES ($1, $2, $3) RETURNING *',
    [nombre, precio, enStock]
  );
  return resultado.rows[0];
};

// Modelo para actualizar un producto existente
const actualizarProducto = async (id, { nombre, precio, enStock }) => {
  const resultado = await pool.query(
    'UPDATE productos SET nombre = $1, precio = $2, enStock = $3 WHERE id = $4 RETURNING *',
    [nombre, precio, enStock, id]
  );
  return resultado.rows[0];
};

// Modelo para eliminar un producto
const eliminarProducto = async (id) => {
  await pool.query('DELETE FROM productos WHERE id = $1', [id]);
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};