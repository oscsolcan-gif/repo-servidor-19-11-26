# Práctica Express · servidor y API de productos y servicios

Servidor con **Express** y una **API** que devuelve **2 productos** y **2 servicios** en JSON, montado por capas como en la clase del 19-11-2026.

## Estructura

```
src/
├── app.js                          servidor: arranca y monta las rutas
├── routes/publicRoutes.js          rutas: qué dirección va a qué función
└── controllers/publicControllers.js  controladores: qué se contesta
```

## Cómo arrancarlo

1. Instalar los paquetes: `npm install`
2. Crear un fichero `.env` en la raíz con `PORT=3000` (no se sube a GitHub)
3. Arrancar: `nodemon src/app.js` (o `node src/app.js`)
4. Esperar a ver `Servidor a la escucha del puerto 3000`

## Rutas

| Método | Dirección | Contesta |
|---|---|---|
| GET | `http://localhost:3000/productos` | 200 · `ok`, `msg` y 2 productos |
| GET | `http://localhost:3000/servicios` | 200 · `ok`, `msg` y 2 servicios |
