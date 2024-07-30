'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

// function Ejercicio1(palabra = prompt('dime una palabra'), palabra1 = prompt('dime otra')){

//     if( !isNaN(palabra) || !isNaN(palabra1)){
//         console.log('Error');
//     }
//     else if(palabra.length > palabra1.length){
//         console.log(`${palabra} es mayor a ${palabra1}`);
//     }
//     else if(palabra1.length > palabra.length){
//         console.log(`${palabra1} es mayor a ${palabra}`);
//     }
//     else if(palabra1.length == palabra.length){
//         console.log(`${palabra1} es igual a ${palabra}`);
//     }
// }
// Ejercicio1();
// Ejercicio1();
// Ejercicio1();


console.log('--------------- APARTADO 1 -----------------');

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

// function Ejercicio2(num1= prompt('dime un numero'),num2 = prompt('dime otro'),  i = 0){
//     do{
//         console.log(num2);
//         num2 = num2 *2;

//         i++;
//     }while(i < num1)
// }
// Ejercicio2();
// console.log('--------------------------------');
// Ejercicio2();
// console.log('--------------------------------');
// Ejercicio2();
// console.log('--------------------------------');
// Ejercicio2();
// console.log('--------------------------------');



console.log('--------------- APARTADO 2 -----------------');

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

// function Ejercicio3( palabrA = prompt('dime algo'), vocal = prompt('dime que vocal quieres que identifique'), cantVocales=0){
    
//     for (const letra of palabrA) {
//         if (vocal.includes(letra)) {
//             cantVocales++;
//         }
//     }
//     console.log(`tiene ${cantVocales} "${vocal}"`);
// }
// Ejercicio3();
// Ejercicio3();
// Ejercicio3();



console.log('--------------- APARTADO 3 -----------------');

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no númerico en el precio o impuesto.
 */

// function Iva(nombre = prompt('dime el nombre del producto'), precio =prompt('dime el precio del producto'), impuesto){

//     nombre = nombre.toString();
//     precio = parseFloat(precio);
//     impuesto = precio*21 / 100;
//     let precioTotal = precio+impuesto;
    
//     if(isNaN(precioTotal)){
//         console.log('Error');
//     }
//     else if( nombre == '' || precio == ''){
//         nombre = 'nada';
//         precio = parseFloat(100);
//         impuesto = precio*21 / 100;
//         precioTotal = precio+impuesto;

//         console.log(`El nombre del producto es ${nombre} y su precio total es ${precioTotal}`)
//     }
//     else{console.log(`El nombre del producto es ${nombre} y su precio total es ${precioTotal}`) }

// }

// Iva();
// Iva();



console.log('--------------- APARTADO 4 ----------------');

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

let Ejercicio5 =(cadena,comparar)=>{

    cadena = alert ('el mundo se creo ayer');
    cadena = 'el mundo se creo ayer';
    comparar = prompt('escribe una comparacion a lo anterior')
    comparar = comparar.toLocaleLowerCase();

    if (cadena.includes(comparar)) {
        console.log(`${comparar} contiene la cadena de busqueda: "${cadena}"`);
    }
    else{
        console.log(`${comparar} no contiene la cadena de busqueda: "${cadena}"`);
    }
}

Ejercicio5();

console.log('--------------- APARTADO 5 ----------------');