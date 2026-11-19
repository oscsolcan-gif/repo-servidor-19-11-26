// RUTAS: aquí se decide QUÉ función atiende cada dirección.
// La ruta no hace el trabajo: solo manda la petición a su controlador.

import express from 'express';
// Traemos las dos funciones por su nombre (con llaves, porque se exportaron con "export const").
// "../" = subir una carpeta (de routes a src). En ESM la ruta propia lleva ".js" al final.
import { getProductos, getServicios } from '../controllers/publicControllers.js';

// Creamos el router: el fichero de rutas
const router = express.Router();

// Una ruta = método + camino + la función que la atiende.
// La función va SIN paréntesis: el router la llamará cuando llegue la petición.
router.get('/productos', getProductos);   // GET /productos -> getProductos
router.get('/servicios', getServicios);   // GET /servicios -> getServicios

// Lo exportamos para usarlo en app.js
export default router;
