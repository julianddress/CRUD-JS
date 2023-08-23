const crearLineaNueva = (nombre, email) => {
    const lineaNueva = document.createElement("tr")

    // BACKTICKS - UNEN HTML CON JS
    const contenido = 
        `
            <td class="td" data-td>${nombre}/td>
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
            </td>
        `;
    lineaNueva.innerHTML = contenido;
};

const table = document.querySelector("[data-table]")

// CLASE PARA CONECTAR EL FRONT CON EL BACK
const http = new XMLHttpRequest();

// Abrir http (metodo, url)

// CRUD - METODOS HTTP
// CREATE - POST
// READ   - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

http.open("GET", "http://localhost:3000/perfil");

http.send();

// CARGAMOS EL LOCALHOST DESDE JS Y NO DESDE EL NAVEGADOR
http.onload = () => {

    // CONVIERTE A UN OBJETO EL JSON.PARSE()
    const data = JSON.parse(http.response);

    data.forEach( perfil => {
        const nuevaLinea = crearLineaNueva(perfil.nombre, perfil.enail);
        table.appendChild(nuevaLinea);
    });
};
