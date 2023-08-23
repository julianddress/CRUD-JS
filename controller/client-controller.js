import { clientServices } from "../service/costumer-service.js"

console.log(clientServices);

const crearLineaNueva = (nombre, email) => {
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
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                    </li>
                </ul>
            </td>`;
            
    lineaNueva.innerHTML = contenido;
    return lineaNueva;
};

const table = document.querySelector("[data-table]");

clientServices.listaClientes().then((data) => {
    data.forEach((perfil) => {
        const nuevaLinea = crearLineaNueva(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));