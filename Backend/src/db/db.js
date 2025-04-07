import pkg from 'pg'
import { config } from "dotenv"

const { Pool }  = pkg

config()

// configurar la conexión

const pool = new Pool({
    user: process.env.DB_USER ,  // usuario
    password: process.env.DB_PASSWORD ,
    host: process.env.DB_HOST , // dirección del servidor
    database: process.env.DB_NAME,  // nombre de la base de datos
    port: process.env.DB_PORT , 
    allowExitOnIdle: true  // cierra las conexiones con la base de datos después de cada consulta para evitar inyecciones SQL
})

export default pool;