// RUTAS DE SERVICIOS: los 5 endpoints. En app.js se montan con el prefijo /servicios,
// así que aquí '/' significa /servicios y '/:id' significa /servicios/1, /servicios/2...

import express from 'express';
import {
    getServicios,
    getServicio,
    createServicio,
    updateServicio,
    deleteServicio
} from '../controllers/serviciosController.js';

const router = express.Router();

// Mismo camino, distinto método = distinta ruta
router.get('/', getServicios);          // GET    /servicios      -> todos
router.get('/:id', getServicio);        // GET    /servicios/:id  -> uno
router.post('/', createServicio);       // POST   /servicios      -> crear
router.put('/:id', updateServicio);     // PUT    /servicios/:id  -> cambiar
router.delete('/:id', deleteServicio);  // DELETE /servicios/:id  -> borrar

export default router;
