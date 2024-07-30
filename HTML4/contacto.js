
var nombres = ["alex", "juan", "ana", "pedro"];


function nombreValidation(){

    let nombre = document.getElementById("nombre");
   

// una ves el boton este pulsado checkea si el input es correcto 

    if(nombre.value !== nombres[0] && nombre.value !== nombres[1] && nombre.value !== nombres[2] && nombre.value !== nombres[3]){
        nombre.setCustomValidity('El usuario introducido no existe');
    }
    else{
        nombre.setCustomValidity('');
    }

}

function validationOnCurrentTimeName(){

    let nombre = document.getElementById("nombre");

    if(nombre !== nombres[0] && nombre.value !== nombres[1] && nombre.value !== nombres[2] && nombre.value !== nombres[3]){
        nombre.setCustomValidity('invalid');
    }
    else{
        nombre.setCustomValidity('');
    }

}

function emailValidation(){

    let email = document.getElementById("email");

    

    if(! email.value.endsWith('.es')){

        email.setCustomValidity('invalid');
    }
    else{
        email.setCustomValidity('');
    }
}

function validationOnCurrentTimeEmail(){

    let email = document.getElementById("email");


    if(!email.value.endsWith('.es')){

        email.setCustomValidity('invalid');


    }
    else{
        email.setCustomValidity('');
        
    }

   

}

function inicio(){
   
    let botonNombre = document.getElementById("boton");
    let inputNombre = document.getElementById("nombre");

    let inputEmail = document.getElementById("email");
    let botonEmail = document.getElementById("boton");


    inputNombre.addEventListener("keydown", validationOnCurrentTimeName, false);
    // espera a que esten escribiendo en el input para llamar a la funcion validationOnCurrentTime

    botonNombre.addEventListener("click", nombreValidation, false);
    // espera a que el boton sea pulsado para llamar a la funcion nombreValidation

    botonEmail.addEventListener("click", emailValidation, false);
    // espera a que el boton sea pulsado para llamar a la funcion emailValidatio

    inputEmail.addEventListener("keydown", validationOnCurrentTimeEmail, false);
    // espera a que esten escribiendo en el input para llamar a la funcion validationOnCurrentTimeEmail

}

window.addEventListener("load", inicio,false);
// al cargar la ventana llama a la funcion inicio