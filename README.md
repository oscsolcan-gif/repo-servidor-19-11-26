# PRACTICA API

Servidor con **Express** y una **API** que devuelve **2 productos** y **2 servicios** en JSON, montado por capas como en la clase del 19-11-2026.

## Puesta en marcha

1. Clona el repositorio

```bash
git clone https://github.com/oscsolcan-gif/repo-servidor-19-11-26.git
cd repo-servidor-19-11-26
```

2. Instala dependencias

```bash
npm i
```

3. Renombra el archivo `.env.template` por `.env` y sustituye los datos

```javascript
PORT=3000   // el número del puerto
```

4. Arranca el servidor y espera a ver `Servidor a la escucha del puerto 3000`

```bash
nodemon src/app.js
```

> Si no tienes `nodemon`, instálalo una vez con `npm install -g nodemon`, o arranca con `node src/app.js`.

## Estructura

```
src/
├── app.js                              servidor: arranca, lee JSON y monta las rutas
├── routes/
│   ├── publicRoutes.js                 GET /productos
│   └── serviciosRoutes.js              los 5 endpoints de /servicios
└── controllers/
    ├── publicControllers.js            qué se contesta en /productos
    └── serviciosController.js          qué se contesta en /servicios (CRUD)
```

## Endpoints

| Método | Dirección | Qué hace | Contesta |
|---|---|---|---|
| GET | `/productos` | todos los productos | 200 |
| GET | `/servicios` | todos los servicios | 200 |
| GET | `/servicios/:id` | un servicio por su id | 200 · 404 si no existe |
| POST | `/servicios` | crea un servicio | 201 · 400 si faltan datos |
| PUT | `/servicios/:id` | cambia un servicio | 200 · 404 si no existe · 400 si faltan datos |
| DELETE | `/servicios/:id` | borra un servicio | 200 · 404 si no existe |

Para POST y PUT, en Postman: **Body › raw › JSON**, con los tres datos obligatorios:

```javascript
{
  "nombre": "Hosting",
  "descripcion": "Alojamos tu web",
  "precio": 10
}
```

> Los servicios se guardan en memoria: al reiniciar el servidor vuelven a ser los 2 de partida.
