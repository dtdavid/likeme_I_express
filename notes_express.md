# Proyecto desarrollo con Express pg cors y Javascript

## Author: **"David Docampo"**

- 1. Inicio del proyecto en el backend:
  - a. **npm init -y**
  - b. **npm install express pg cors**
  - c. **npm install nodemon --save-dev**
  - d. Añadir debajo de **main** en el package.json **"type": "module"** y dentro de \*script** añadir **"dev": "nodemon index.js"\*\* para no tener que reiniciar el proyecto cada vez que hagamos un cambio.

### Estructura del proyecto

project/
│
├── src/
│ ├── app.js # Configuración de Express
│ ├── index.js # Arranque del servidor
│ ├── db/
│ │ └── db.js # Conexión a PostgreSQL
│ ├── models/
│ │ └── posts_models.js # Funciones SQL
│ ├── controllers/
│ │ └── post_controller.js # Lógica de los endpoints
│ ├── routers/
│ │ └── postRouter.js # Define las rutas
│
├── .env # Variables de entorno
├── package.json

## Estructura de la app

1. **Modelo** (posts_models.js) → Se encarga de hablar con la base de datos. Es donde están las querys para las consultas.

2. **Controlador** (post_controller.js) → Lógica de negocio. Llama a las funciones del modelo y responde al cliente.

3. **Router** (postRouters.js) → Define qué ruta HTTP llama a qué función del controlador.

**CLIENTE** → **RUTAS** (router) → **CONTROLADOR** (controller) → **MODELO** (model) → **BD**

- Ojo con las importaciones en los distintas carpetas. Routers solo debería **import** de **controllers** y **controllers** solo debería **import** de **models**

## Notas de los commits para GitHub

<**tipo**>: <**descripción** breve en minúscula y modo imperativo>

- feat: una nueva funcionalidad
- fix: una corrección de bug
- refactor: cambios en el código que no agregan ni corrigen features
- docs: cambios en la documentación
- style: cambios de formato, espacios, comas, etc. (sin impacto en el código)
- test: agregar o corregir pruebas
- chore: tareas menores o mantenimiento (no afecta código ni pruebas)
