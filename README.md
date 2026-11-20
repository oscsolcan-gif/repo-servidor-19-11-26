# Práctica Express · servidor y API de productos y servicios

Servidor con **Express** y una **API** que devuelve **2 productos** y **2 servicios** en JSON, montado por capas como en la clase del 19-11-2026.

## Puesta en marcha

1. Clona el repositorio y entra en la carpeta

```bash
git clone https://github.com/oscsolcan-gif/repo-servidor-19-11-26.git
cd repo-servidor-19-11-26
```

2. Renombra el archivo `.env.template` por `.env` y sustituye los valores por los tuyos (el puerto, por ejemplo `PORT=3000`)

3. Instala los paquetes

```bash
npm install
```

4. Arranca el servidor y espera a ver `Servidor a la escucha del puerto 3000`

```bash
nodemon src/app.js
```

> Si no tienes `nodemon`, instálalo una vez con `npm install -g nodemon`, o arranca con `node src/app.js`.

## Estructura

```
src/
├── app.js                            servidor: arranca y monta las rutas
├── routes/publicRoutes.js            rutas: qué dirección va a qué función
└── controllers/publicControllers.js  controladores: qué se contesta
```

## Rutas

| Método | Dirección | Contesta |
|---|---|---|
| GET | `http://localhost:3000/productos` | 200 · `ok`, `msg` y 2 productos |
| GET | `http://localhost:3000/servicios` | 200 · `ok`, `msg` y 2 servicios |
