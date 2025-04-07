import app from './app.js';
import pool from './db/db.js'; // Importa la conexión a la base de datos
import 'dotenv/config'; // Importa dotenv para cargar las variables de entorno



const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
pool.query('SELECT NOW()')
  .then(() => console.log(' PostgreSQL conectado'))
  .catch(err => console.error('Error de conexión:', err));



app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});