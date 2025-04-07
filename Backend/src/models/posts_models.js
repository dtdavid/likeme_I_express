

import pool from "../db/db.js";

// función para OBTENER todos los posts

export const getAllPost = async () => {
    const result = await pool.query('SELECT * FROM posts;');
    return result.rows;
};

// función para añadir un nuevo post

export const addPost = async (titulo, img, descripcion, likes = 0) => {
    const query = `
        INSERT INTO posts (titulo, img, descripcion, likes)
        VALUES ($1, $2, $3, $4)
        RETURNING id, titulo, img, descripcion, likes
    `;
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(query, values);
        return result.rows[0]; // Devuelve el nuevo registro insertado
    } catch (error) {
        console.error('Error en la consulta SQL:', {
            query,
            values,
            error: error.message
        });
        throw error; // Propaga el error para manejarlo en el controlador
    }
        
    }
   


//RETURNING * devuelve el nuevo registro que se ha insertado en la base de datos, lo que permite obtener el ID y otros campos generados automáticamente por la base de datos.
// Esto es útil para confirmar que la inserción fue exitosa y para devolver el nuevo registro al cliente.