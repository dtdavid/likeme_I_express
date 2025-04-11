# Like Me (Parte I) – Red Social con Express y PostgreSQL

Aplicación web que permite a los usuarios crear publicaciones con título, descripción, imagen (URL) y dar "likes". Esta es la primera parte del proyecto, centrada en el desarrollo del backend con conexión a base de datos PostgreSQL y frontend en React.

## ✍️ Autor

**David Docampo**

---

## 🧰 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg (cliente PostgreSQL)
- cors
- React + Vite
- Axios
- Thunder Client (para pruebas de rutas)

---

## 📁 Estructura del proyecto

project/
├── db/
│ ├── db.js # Conexión con PostgreSQL usando Pool
│ └── likeme.sql # Script para crear la tabla
├── controllers/
│ └── post_controller.js # Funciones que responden a las rutas
├── models/
│ └── posts_model.js # Consultas a la base de datos
├── routers/
│ └── postRouter.js # Define endpoints y rutas
├── index.js # Servidor Express
├── app.js # Configuración general del servidor

# Like Me (Parte I)

Este proyecto es una red social mínima donde los usuarios pueden crear publicaciones con una imagen, título, descripción y contador de "likes".

## 🛠️ Tecnologías utilizadas

- Backend: Node.js, Express, PostgreSQL
- Frontend: React, Vite, Axios
- Herramientas: Thunder Client, PGAdmin

## ⚙️ Instrucciones para correr el proyecto

### Backend

1. Clonar el repositorio
2. Crear una base de datos PostgreSQL llamada `likeme`
3. Ejecutar el script `db/likeme.sql` para crear la tabla `posts`
4. Instalar dependencias:
   cd Backend
   npm install
5. Iniciar el servidor:
   node index.js

### FrontEnd

1. Ir a la carpeta **/FronEnd** en otro terminal
   a. **npm install**
   b. **npm run dev**
2. Acceder desde **http://localhost:3000**
   a. GET /posts -> Devuelve todos los posts
   b. POST /posts -> Crea un nuevo post
