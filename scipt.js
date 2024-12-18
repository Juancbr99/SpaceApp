const url = "https://api.nasa.gov/planetary/apod?api_key=t8TOVZbAdsZN32p1w7KYXPrTymSSZQsoVP95MoVX&count=15";

async function listaImagenes() {
    try {
        // Realiza la solicitud a la API
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        console.log(datosImagenes); // Verifica los datos devueltos por la API

        // Selecciona el elemento donde se insertarán las tarjetas
        const card = document.querySelector("[data-ul]");
        if (!card) {
            throw new Error("El elemento con [data-ul] no existe en el DOM.");
        }

        // Construye el contenido de las tarjetas
        let contenido = ""; // Variable para acumular el contenido
        datosImagenes.forEach(element => {
            contenido += `
                <li class="card">
                    <img class="card__image" src="${element.url}" alt="${element.title}">
                    <h3 class="card__title">${element.title}</h3>
                </li>
            `;
        });

        // Asigna todo el contenido al contenedor
        card.innerHTML = contenido;
    } catch (error) {
        console.log("Ocurrió un error:", error); // Muestra errores en la consola
    }
}

// Llama a la función
listaImagenes();