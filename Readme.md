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

```
project/ ├── Backend/ │ ├── app.js # Configuración de Express │ ├── index.js # Arranque del servidor │ ├── db/ │ │ ├── db.js # Conexión a PostgreSQL │ │ └── likeme.sql # Script para crear la tabla │ ├── models/ │ │ └── posts_model.js # Consultas SQL │ ├── controllers/ │ │ └── post_controller.js # Lógica de endpoints │ ├── routers/ │ │ └── postRouter.js # Define las rutas │ └── .env # Variables de entorno

```

# Like Me (Parte I)

Este proyecto es una red social mínima donde los usuarios pueden crear publicaciones con una imagen, título, descripción y contador de "likes".

## 🛠️ Tecnologías utilizadas

- Backend: Node.js, Express, PostgreSQL
- Frontend: React, Vite, Axios
- Herramientas: Thunder Client, PGAdmin

## 📁 Estructura del proyecto

/Backend |-- controllers/ |-- db/ |-- models/ |-- routers/ |-- app.js |-- index.js

/Frontend |-- src/ |-- App.jsx |-- main.jsx

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
