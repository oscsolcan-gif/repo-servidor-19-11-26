// SERVIDOR: arranca Express, monta las rutas y se queda escuchando.

// 1. Primero cargamos las variables del .env (así lo indica el LEEME de dotenv)
import 'dotenv/config';
import express from 'express';
// 2. Traemos las rutas (sin llaves, porque se exportaron con "export default")
import router from './routes/publicRoutes.js';

// 3. Creamos el servidor
const app = express();

// 4. El puerto: el del .env y, si no hay, el 3000
const port = process.env.PORT || 3000;

// 5. Montamos las rutas: todas empiezan en "/"
app.use('/', router);

// 6. Abrimos la puerta: el servidor se queda escuchando en el puerto
app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port}`);
});
