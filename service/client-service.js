// Fetch API

// HACE EL MISMO USO QUE EL ANTERIOR CODIGO, DONDE FECTH TIENE POR DEFAULT EL METODO GET
// CON ARROW FUNCTIONS RETURNAMOS SIN AHCER USO DE RETURN SOLO DESPUES DE => MANDAMOS EL VALOR
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json())

// CREAMOS UNA NUEVA FUNCION PARA CREAR CLIENTES Y MANDARLOS A NUESTRO WEB API
const crearCliente = (nombre, email) =>{

    // DEFINIMOS EL FETCH CON EL METODO POST (CREAR)
    return fetch("http://localhost:3000/perfil", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // CONVIERTE EL OBJETO EN TEXTO CON JSON.STRINGIFY
                body: JSON.stringify({nombre, email, id: uuid.v4()}),
            })
}

// CREAMOS UN NUEVO FETCH CON EL METODO DELETE PARA BORRAR UN CLIENTE SEGÚN SU USUARIO
const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
                method: "DELETE",
    });
};

const detalleCliente = (id) => fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())

const actualizarCliente = (nombre, email, id) => {
    // DEFINIMOS EL FETCH CON EL METODO PUT (ACTUALIZAR)
    return fetch(`http://localhost:3000/perfil/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                // CONVIERTE EL OBJETO EN TEXTO O EN PARAMETROS CON JSON.STRINGIFY PARA EL HTTP
                body: JSON.stringify({nombre, email}),
            }).then((respuesta) => respuesta).catch((err) => alert(err));
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};