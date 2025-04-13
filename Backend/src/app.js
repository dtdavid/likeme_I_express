import express from 'express';
import cors from 'cors'; // (Cross-Origin Resource Sharing) permite que el FronEnd se comunique con el BackEnd
import postRouters from './routers/postRouter.js'; // Cambié el nombre a postRouters para mayor claridad

const app = express(); //inicializa la aplicación Express

// Middlewares
app.use(express.json()); //

//app.use(cors("*")); // Permite todas las conexiones
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })); // Permite todas las conexiones

// Routes
app.use("/posts", postRouters);  // se montan todas las definidas en postRouter.js debajo de la ruta base /posts

export default app; // Exporta la app configurada

// separamos la configuración de express de la ejecución del servidor para facilitar las pruebas y la modularidad