"use strict";

let formulario = null; //Declaramos variable para recoger formulario
let imagenPrevia = null; //Declaramos variable para recoger el elemento img donde irá la imagen previsualizada

document.addEventListener("DOMContentLoaded", e => {
    imagenPrevia = document.getElementById("imgPreview"); // Recogemos el elemento img donde irá la imagen previsualizada
    formulario = document.getElementById("newEvent"); // Recogemos el elemento formulario

    formulario.image.addEventListener('change', cargarImagen); // Evento de carga de imagen que llama a función

    formulario.addEventListener('submit', validaFormulario); // Evento que llama a función para enviar el formulario
});

function validaFormulario(evento) { // Funcion para validar el formulario (recogemos el evento por parámetro para poder cancelarlo)
    evento.preventDefault(); // Cancela el evento (útil para poder realizar acciones antes del envío de un formulario)

    let ok = true; // Variable para controlar si los campos del formulario cumplen o no requisitos
    // Comprobamos todos los campos para detectar alguno vacío
    formulario.querySelectorAll(".form-control").forEach(input => { // Recorremos todos los campos
        input.classList.remove("is-valid", "is-invalid"); //Borramos las clases (por si acaso las hubiere)
        if (!input.value) { // Si el campo no contiene valor
            input.classList.add("is-invalid"); // Ponemos la clase para campo no validado
            ok = false; // Pasamos la variable a falso para que no se cree la tarjeta
        } else { // El campo tiene valor (único requerimiento)
            input.classList.add("is-valid"); // Ponemos la clase para campo validado
        }
    });

    if (ok) { // Si todos los campos están validados, recogemos sus valores para crear la tarjeta
        const nombre = formulario.name.value;
        const imagen = imagenPrevia.src;
        const fecha = formulario.date.value;
        const desc = formulario.description.value;
        const precio = formulario.price.value;

        anyadeTarjeta(nombre, imagen, fecha, desc, precio); // Llamamos a la función para la creación de la tarjeta
        formulario.reset(); // Borramos los campos del formulario
        imagenPrevia.classList.add('d-none'); // Añadimos la clase a la imagen previsualizada para que deje de previsualizarse
        imagenPrevia.src = ""; // Limpiamos el atributo src (Para evitar conflicto con la posible siguiente entrada)
        formulario.querySelectorAll(".form-control").forEach( // Recorremos todos los campos
            input => input.classList.remove("is-valid", "is-invalid") //Borramos las clases (como hemos hecho antes)
        );
    }
}

function cargarImagen(evento) { // Función de carga de imagen
    const imagenSelec = evento.target.files[0]; // Recogemos la primera imagen (y única)
    const reader = new FileReader(); // Creamos un objeto de la clase FileReader

    if (imagenSelec) reader.readAsDataURL(imagenSelec); // Si hay una imagen, la metemos en el objeto FileReader con el método readAsDataURL
	
    reader.addEventListener('load', () => {  // Evento que espera a la carga completa del objeto
        imagenPrevia.classList.remove('d-none'); // Quitamos la clase para que se muestre la imagen
        imagenPrevia.src = reader.result; // Ponemos la src del elemento donde saldrá la imagen previsualizada con el atributo result del objeto
    });
}

function anyadeTarjeta(nombre, imagen, fecha, desc, precio) { // Función que crea la tarjeta
	// Para crear la tarjeta, tenemos clara la disposición y creamos y añadimos hijos en orden
    const tarjeta = document.createElement("div"); // Creamos el elemento
    tarjeta.classList.add("card"); // Le añadimos la clase
    document.getElementById("eventsContainer").appendChild(tarjeta); // Cogemos el elemento padre y le añadimos un hijo

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = imagen; // El parámetro imagen contiene la src de la imagen previa
    tarjeta.appendChild(img);

    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");
    tarjeta.appendChild(cuerpoTarjeta);

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = nombre; // El parámetro nombre contiene el texto del primer input
    cuerpoTarjeta.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = desc; // El parámetro desc contiene el texto del input descripción
	cuerpoTarjeta.appendChild(cardText);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    tarjeta.appendChild(cardFooter);

    const dateObj = new Date(fecha); // Creamos el objeto fecha con la fecha que recogemos del formulario

    const footerText = document.createElement("small");
    footerText.classList.add("text-muted");
    footerText.textContent = new Intl.DateTimeFormat('es-ES', {
        day: "2-digit", month: "2-digit", year: "numeric"
    }).format(dateObj);;
    cardFooter.appendChild(footerText);

    const priceText = document.createElement("span");
    priceText.classList.add("float-right");
    priceText.textContent = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(precio);
    footerText.appendChild(priceText);

}

