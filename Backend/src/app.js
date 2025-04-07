import express from 'express';
import cors from 'cors';
import postRouters from './routers/postRouter.js'; // Cambié el nombre a postRouters para mayor claridad

const app = express();

// Middlewares
app.use(express.json());

//app.use(cors("*")); // Permite todas las conexiones
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })); // Permite todas las conexiones

// Routes
app.use("/posts", postRouters);

export default app; // Exporta la app configurada

// separamos la configuración de express de la ejecución del servidor para facilitar las pruebas y la modularidad