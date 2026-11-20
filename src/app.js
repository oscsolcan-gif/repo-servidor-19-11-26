// SERVIDOR: arranca Express, monta las rutas y se queda escuchando.

// 1. Primero cargamos las variables del .env (así lo indica el LEEME de dotenv)
import 'dotenv/config';
import express from 'express';
// 2. Traemos las rutas (sin llaves, porque se exportaron con "export default")
import router from './routes/publicRoutes.js';
import serviciosRoutes from './routes/serviciosRoutes.js';

// 3. Creamos el servidor
const app = express();

// 4. El puerto: el del .env y, si no hay, el 3000
const port = process.env.PORT || 3000;

// 5. Para leer el JSON que llega en el cuerpo (POST y PUT).
//    Sin esto, en Express 5 req.body vale undefined. Va ANTES de las rutas.
app.use(express.json());

// 6. Montamos las rutas
app.use('/', router);                      // GET /productos
app.use('/servicios', serviciosRoutes);    // los 5 endpoints de /servicios

// 7. Abrimos la puerta: el servidor se queda escuchando en el puerto
app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port}`);
});
