
import { addPost, getAllPost, updatePostModels, deletePostModels } from "../models/posts_models.js";


export const getPost = async (req, res) => {        
    try {
        const result = await getAllPost();
        if (result.length === 0) {
            return res.status(404).json({ message: 'No se encontraron posts' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los posts' });
    }
}

export const addNewPost = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const likes = req.body.likes || 0; // Asigna 0 si no se proporciona likes
        if (!titulo || !img || !descripcion) {
            return res.status(400).json({ message: 'Faltan datos requeridos' });
        }
        const result = await addPost( titulo, img, descripcion, likes );
        res.status(201).json(result);   // quito .rows[0] porque ya lo devuelve la función addPost
    } catch (error) {
        res.status(500).json({ message: 'Error al añadir el post' });
    }
}

export const updatePostController = async (req, res) => {
    const { id } = req.params;
    //const { likes } = req.body; // Adaptado a la ruta del FrontEnd
    try {
        const result = await updatePostModels(id);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el post' });
    }
}

export const deletePostController = async (req, res) => { 
    const { id } = req.params;
    try {
        const result = await deletePostModels(id);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.status(200).json({ message: 'Post eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el post' });
    }
}