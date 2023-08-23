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

// Abrir http (metodo, url)

// CRUD - METODOS HTTP
// CREATE - POST
// READ   - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

const listaClientes = () =>{
    const promise = new Promise((resolve, reject) => {
        // CLASE PARA CONECTAR EL FRONT CON EL BACK
        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:3000/perfil");

        http.send();

        // CARGAMOS EL LOCALHOST DESDE JS Y NO DESDE EL NAVEGADOR
        http.onload = () => {

            // CONVIERTE EL HTTP RESPONSE EN UN OBJETO
            const response = JSON.parse(http.response);
            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response);
            }
        };
    });
    return promise;
};

listaClientes().then((data) => {
    data.forEach((perfil) => {
        const nuevaLinea = crearLineaNueva(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));