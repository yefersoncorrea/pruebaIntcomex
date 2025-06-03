import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    enStock: true
  });

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await axios.get('http://localhost:4000/productos');
    setProductos(respuesta.data);
  };

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const agregarOEditarProducto = async (e) => {
    e.preventDefault();

    if (productoEditando) {
      // Modo edición
      await axios.put(`http://localhost:4000/productos/${productoEditando.id}`, nuevoProducto);
      setProductoEditando(null);
    } else {
      // Modo agregar
      await axios.post('http://localhost:4000/productos', nuevoProducto);
    }

    setNuevoProducto({ nombre: '', precio: '', enStock: true });
    obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`http://localhost:4000/productos/${id}`);
    obtenerProductos();
  };

  const cargarProductoParaEditar = (producto) => {
    setProductoEditando(producto);
    setNuevoProducto({
      nombre: producto.nombre,
      precio: producto.precio,
      enStock: producto.enstock
    });
  };

  return (
    <div>
      <form onSubmit={agregarOEditarProducto}>
        <h2>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoProducto.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={manejarCambio}
          required
        />
        <label>
          En stock
          <input
            type="checkbox"
            name="enStock"
            checked={nuevoProducto.enStock}
            onChange={manejarCambio}
          />
        </label>
        <button type="submit">
          {productoEditando ? "Guardar Cambios" : "Agregar"}
        </button>
        {productoEditando && (
          <button type="button" onClick={() => {
            setProductoEditando(null);
            setNuevoProducto({ nombre: '', precio: '', enStock: true });
          }}>
            Cancelar
          </button>
        )}
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>En stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.enstock ? 'Sí' : 'No'}</td>
              <td>
                <button className="btn-editar" onClick={() => cargarProductoParaEditar(producto)}>Editar</button>
                <button className="btn-eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProductos;