// RUTAS: aquí se decide QUÉ función atiende cada dirección.
// La ruta no hace el trabajo: solo manda la petición a su controlador.
// (Los servicios tienen ahora su propio fichero: serviciosRoutes.js)

import express from 'express';
// Traemos la función por su nombre (con llaves, porque se exportó con "export const").
// "../" = subir una carpeta (de routes a src). En ESM la ruta propia lleva ".js" al final.
import { getProductos } from '../controllers/publicControllers.js';

// Creamos el router: el fichero de rutas
const router = express.Router();

// Una ruta = método + camino + la función que la atiende.
// La función va SIN paréntesis: el router la llamará cuando llegue la petición.
router.get('/productos', getProductos);   // GET /productos -> getProductos

// Lo exportamos para usarlo en app.js
export default router;
