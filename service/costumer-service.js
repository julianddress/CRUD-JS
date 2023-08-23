// Fetch API

// HACE EL MISMO USO QUE EL ANTERIOR CODIGO, DONDE FECTH TIENE POR DEFAULT EL METODO GET
// CON ARROW FUNCTIONS RETURNAMOS SIN AHCER USO DE RETURN SOLO DESPUES DE => MANDAMOS EL VALOR
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json())

export const clientServices = {
    listaClientes,
};