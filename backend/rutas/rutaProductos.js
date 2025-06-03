const express = require('express');
const router = express.Router();
const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../modelos/modeloProducto');

//Listar todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

//Obtener producto específico
router.get('/:id', async (req, res) => {
  try {
    const producto = await obtenerProductoPorId(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

//Crear un producto
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = await crearProducto(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

//Actualizar un producto
router.put('/:id', async (req, res) => {
  try {
    const productoActualizado = await actualizarProducto(req.params.id, req.body);
    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

//Eliminar un producto
router.delete('/:id', async (req, res) => {
  try {
    await eliminarProducto(req.params.id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

module.exports = router;