"use strict";

// Edita sólo este fichero

// Global var
let form = document.getElementById("newEvent");
let div = document.getElementsByClassName('div');
let valid = false;

let imgPreview =  document.getElementById('imgPreview');
let img =  document.getElementById('image');

// imgpreview
img.onchange = event => {
    const [file] = img.files
    if (file) {
        imgPreview.classList.remove('d-none');
        imgPreview.src = URL.createObjectURL(file)
    }
}


// required input
form.addEventListener('submit', check,);

function check(event){
    event.preventDefault();
    valid = true;
    form.querySelectorAll(".form-control").forEach(element => {
        element.classList.remove('is-valid','is-invalid');
        if(!element.value){
            element.classList.add('is-invalid');
            valid = false;
        }else{
            element.classList.add('is-valid');
        }
    });

    if(valid){
        const name = form.name.value;
        const date = form.date.value;
        const desc = form.description.value;
        const price = form.price.value;
        const imgp = imgPreview.src;

        addCard(name,date,desc,price,imgp);

        form.reset();
        form.querySelectorAll(".form-control").forEach(element => element.classList.remove('is-valid','is-invalid'));
        imgPreview.classList.add('d-none');
        imgPreview.src = "";
    }
}


//creationCard
function addCard(name,date,desc,price,imgp){
    const card = document.createElement('div');
    card.classList.add('card');
    document.getElementById('eventsContainer').appendChild(card);

    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = imgp; 
    card.appendChild(imgCard);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = name;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = desc;
	cardBody.appendChild(cardText);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);

    const dateObj = new Date(date);

    const footerText = document.createElement("small");
    footerText.classList.add("text-muted");
    footerText.textContent = new Intl.DateTimeFormat('es-ES', {
        day: "2-digit", month: "2-digit", year: "numeric"
    }).format(dateObj);;
    cardFooter.appendChild(footerText);

    const priceText = document.createElement("span");
    priceText.classList.add("float-right");
    priceText.textContent = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
    footerText.appendChild(priceText);
}


