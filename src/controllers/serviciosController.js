// CONTROLADOR DE SERVICIOS: los 5 endpoints (CRUD) de /servicios.
// Cada función recibe:
//   req -> lo que pide quien llama (la petición)
//   res -> lo que le contestamos (la respuesta)
// Los datos están en un array (en memoria): si se reinicia el servidor, vuelven a ser estos 2.

let servicios = [
    {
        id: 1,
        nombre: 'Diseño web',
        descripcion: 'Hacemos tu página web',
        precio: 300
    },
    {
        id: 2,
        nombre: 'Mantenimiento',
        descripcion: 'Revisamos tu web cada mes',
        precio: 50
    }
];


// 1. GET /servicios -> todos los servicios
export const getServicios = (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'obteniendo servicios',
        servicios                       // es lo mismo que servicios: servicios
    })

}


// 2. GET /servicios/:id -> un servicio por su id
export const getServicio = (req, res) => {

    // El :id llega como texto en req.params; lo pasamos a número para comparar
    const id = Number(req.params.id);
    const servicio = servicios.find(item => item.id === id);

    // Si no existe ese id, 404
    if (!servicio) {
        return res.status(404).json({
            ok: false,
            msg: `no existe el servicio con id ${id}`
        })
    }

    res.status(200).json({
        ok: true,
        msg: 'obteniendo un servicio',
        servicio
    })

}


// 3. POST /servicios -> crear un servicio nuevo con los datos del cuerpo (req.body)
export const createServicio = (req, res) => {

    // "|| {}": si llega sin cuerpo, req.body es undefined y desestructurarlo rompería (error 500)
    const { nombre, descripcion, precio } = req.body || {};   // desestructuramos lo que llega

    // Validamos: si falta algún dato, 400 (el pedido está mal).
    // precio se mira con === undefined porque un precio 0 sería válido y !0 daría true
    if (!nombre || !descripcion || precio === undefined) {
        return res.status(400).json({
            ok: false,
            msg: 'faltan datos: nombre, descripcion y precio son obligatorios'
        })
    }

    // El id nuevo es el más alto que hay + 1 (si no hay ninguno, el 1)
    const nuevoId = Math.max(...servicios.map(item => item.id), 0) + 1;
    const nuevoServicio = { id: nuevoId, nombre, descripcion, precio };
    servicios.push(nuevoServicio);

    // 201 = creado
    res.status(201).json({
        ok: true,
        msg: 'servicio creado',
        servicio: nuevoServicio
    })

}


// 4. PUT /servicios/:id -> cambiar un servicio que ya existe
export const updateServicio = (req, res) => {

    const id = Number(req.params.id);
    const indice = servicios.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            ok: false,
            msg: `no existe el servicio con id ${id}`
        })
    }

    const { nombre, descripcion, precio } = req.body || {};   // "|| {}" por si llega sin cuerpo

    if (!nombre || !descripcion || precio === undefined) {
        return res.status(400).json({
            ok: false,
            msg: 'faltan datos: nombre, descripcion y precio son obligatorios'
        })
    }

    // Lo cambiamos en su sitio, manteniendo el mismo id
    servicios[indice] = { id, nombre, descripcion, precio };

    res.status(200).json({
        ok: true,
        msg: 'servicio actualizado',
        servicio: servicios[indice]
    })

}


// 5. DELETE /servicios/:id -> borrar un servicio
export const deleteServicio = (req, res) => {

    const id = Number(req.params.id);
    const indice = servicios.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            ok: false,
            msg: `no existe el servicio con id ${id}`
        })
    }

    // splice quita 1 elemento en esa posición y nos lo devuelve en un array
    const borrado = servicios.splice(indice, 1);

    res.status(200).json({
        ok: true,
        msg: 'servicio borrado',
        servicio: borrado[0]
    })

}
