import { Router } from 'express'
// importaremos toda la lógica para completar las rutas

import { addNewPost, getPost } from '../controllers/post_controller.js'


// express dispone del paquete Routers que nos permite exportarla "en racimo" para que podamos usarlas en otros lugares

const router = Router() // guardaremos en la variable router todo de lo que disponemos en Router()

router.get('/', getPost) 
router.post('/', addNewPost)


// importante: exportat la variable que contiene todas las rutas

export default router;