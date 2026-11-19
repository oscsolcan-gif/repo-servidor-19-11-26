// CONTROLADORES: aquí se decide QUÉ se contesta en cada ruta.
// Cada función recibe:
//   req -> lo que pide quien llama (la petición)
//   res -> lo que le contestamos (la respuesta)
// Llevan "export" para poder usarlas desde el fichero de rutas.


//GET PRODUCTOS
export const getProductos = (req, res) => {

    // 200 = todo ha ido bien; .json() contesta con datos (no con una página)
    res.status(200).json({
        ok: true,                      // ok: true va a juego con el 200
        msg: 'obteniendo productos',   // mensaje para quien lea la respuesta
        productos: [                   // array con los 2 productos (cada uno es un objeto)
            {
                id: 1,
                nombre: 'Camiseta',
                precio: 15
            },
            {
                id: 2,
                nombre: 'Taza',
                precio: 8
            }
        ]
    })

}


//GET SERVICIOS
export const getServicios = (req, res) => {

    // Igual que la de productos, pero con los 2 servicios
    res.status(200).json({
        ok: true,
        msg: 'obteniendo servicios',
        servicios: [
            {
                id: 1,
                nombre: 'Diseño web',
                descripcion: 'Hacemos tu página web'
            },
            {
                id: 2,
                nombre: 'Mantenimiento',
                descripcion: 'Revisamos tu web cada mes'
            }
        ]
    })

}
