const config = {
    paisURL: 'https://api.countrystatecity.in/v1/countries',
    estadoURL: 'https://api.countrystatecity.in/v1/countries/[ciso]/states',
    apiKey: 'WHVqQVNzNzN2ZzEzWHhVdlNyUWp5TTBtSWlmNElJOVpMY1JTY3dhdA=='
}

const selectPais = document.getElementById('country');
const selectArea = document.getElementById('area');

function cargarPaises() {
    let parametros = config.paisURL;

    fetch(parametros, {headers: {"X-CSCAPI-KEY": config.apiKey}})
        .then(response => response.json())
        .then(paises => {
            // console.log(paises);
            paises.forEach(pais => {
                const option = document.createElement('option');
                option.value = pais.name;
                option.textContent = pais.name;
                selectPais.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error al cargar paises: ", error);
        });

        selectArea.disabled= true;
        selectArea.style.pointerEvents = 'none';
}

function cargarAreas() {

    selectArea.disabled= false;
    selectArea.style.pointerEvents = 'auto';

    const paisSeleccionado = selectPais.value;
    // console.log(paisSeleccionado);
     selectArea.innerHTML = '<option value="">Seleccione el area</option>'; //Limpia todas las opciones de areas existentes

     fetch(`${config.paisURL}/${paisSeleccionado}/states`, {headers: {"X-CSCAPI-KEY": config.apiKey}})
        .then(response => response.json())
        .then(areas => {
            // console.log(areas);

            areas.forEach(area => {
                const option = document.createElement('option');
                option.value = area.name;
                option.textContent = area.name;
                selectArea.appendChild(option);
            })
        })
        .catch(error => {
            console.error("Error al cargar provincias: ", error);
        });
}

window.onload = cargarPaises;
