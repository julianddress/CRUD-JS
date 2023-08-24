import { clientServices } from "../service/client-service.js"

const crearLineaNueva = (nombre, email, id) => {
    const lineaNueva = document.createElement("tr");

    // BACKTICKS - UNEN HTML CON JS
    const contenido = 
        `<td class="td" data-td>
        ${nombre}</td>
            <td>${email}</td>
            <td>
                <ul class="table__button-control">
                    <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                    <button
                        class="simple-button simple-button--delete" type="button" id="${id}">
                        Eliminar
                    </button>
                    </li>
                </ul>
            </td>`;
            
    lineaNueva.innerHTML = contenido;

    // POR EL DOM BUSCAMOS EL BTN DE ELMINAR Y OBTENEMOS EL ID DEL CLIENTE
    const btn = lineaNueva.querySelector("button");
    btn.addEventListener("click", () =>{
        const id = btn.id;

        // COMUNICAMOS LA FUNCION ELIMINAR CLIENTE CON NUESTRO FETCH API
        clientServices.eliminarCliente(id).then((respuesta) =>{
            console.log(respuesta);
        }).catch((err) => alert("Ocurrió un error eliminar"));
    })

    return lineaNueva;
};

const table = document.querySelector("[data-table]");

clientServices.listaClientes().then((data) => {
    data.forEach(({nombre, email, id}) => {
        const nuevaLinea = crearLineaNueva(nombre, email, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error lista"));