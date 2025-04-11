import { Router } from 'express'
// importaremos toda la lógica para completar las rutas

import { addNewPost, getPost, updatePostController, deletePostController } from '../controllers/post_controller.js'
//import { updatePost } from '../models/posts_models.js' En Routers no se debe comunicar directamente con Models, sino a través de Controllers


// express dispone del paquete Routers que nos permite exportarla "en racimo" para que podamos usarlas en otros lugares

const router = Router() // guardaremos en la variable router todo de lo que disponemos en Router()

router.get('/', getPost) 
router.post('/', addNewPost)
router.put('/like/:id', updatePostController) // el id lo pasamos como parámetro en la url, por eso lo indicamos con :id
router.delete('/:id', deletePostController) // el id lo pasamos como parámetro en la url, por eso lo indicamos con :id


// importante: exportat la variable que contiene todas las rutas

export default router;