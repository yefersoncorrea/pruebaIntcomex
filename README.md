#  Sistema de Gestión de Productos - INTCOMEX

Aplicación web desarrollada con **Node.js + Express** para el backend y **React** para el frontend. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de productos conectada a una base de datos PostgreSQL.

---
##  Características

 -Crear, visualizar, editar y eliminar productos  
 -Interfaz amigable y responsiva con React  
 -Backend robusto con Express y PostgreSQL  
 -Comunicación entre frontend y backend vía API REST  
 -Código organizado y comentado

---

##  Tecnologías Usadas

###  Backend
- Node.js
- Express.js
- PostgreSQL
- Dotenv
- CORS
- Nodemon (modo desarrollo)

###  Frontend
- React
- Axios
- CSS personalizado

---
##  Estructura del Proyecto

pruebaIntcomex/
│
├── backend/ → API con Express y PostgreSQL
│ ├── index.js → Archivo principal del servidor
│ ├── db.js → Conexión a PostgreSQL
│ ├── rutas/ → Rutas de productos
│
├── frontend/ → Aplicación React
│ ├── src/
│ │ ├── componentes/ → ListaProductos.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│
└── README.md

##  Instalación y Uso

### 1️ Clonar el repositorio

```bash
git clone https://github.com/yefersoncorrea/pruebaIntcomex.git
cd pruebaIntcomex


Backend (API REST)
📌 Entrar a la carpeta del backend
cd backend
📌 Instalar dependencias
📌 Crear archivo .env
Crea un archivo .env con los datos de conexión de PostgreSQL:
PUERTO=4000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=intcomex
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
Reemplaza los valores con tu configuración real de PostgreSQL.

📌 Crear la base de datos
Desde PgAdmin, o terminal PostgreSQL:
sql
CREATE DATABASE intcomex;

📌 Crear tabla productos
Ejecuta esta migración:
sql
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  enstock BOOLEAN NOT NULL
);

Iniciar servidor
npm run dev
Servidor activo en: http://localhost:4000


Frontend (React)
📌 Ir a la carpeta frontend
cd ../frontend
📌 Instalar dependencias
Iniciar la aplicación
npm start
Aplicación visible en: http://localhost:3000


Endpoints de la API

Método	   Endpoint	         Descripción
GET	      /productos	     Listar todos los productos
GET	      /productos/:id	 Obtener un producto por ID
POST	    /productos	     Crear un nuevo producto
PUT	      /productos/:id	 Actualizar un producto
DELETE	  /productos/:id	 Eliminar un producto
