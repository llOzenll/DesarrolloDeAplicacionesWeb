'use strict';

console.log('--------------- APARTADO 4 -----------------');
/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número.
 * No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) 
 * la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado (ej: [123, 34, 52] -> [6, 7, 7])
**/


//nose:b



console.log('--------------- APARTADO 5 -----------------');
/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto (debes comprobar 
 * si está  primero el producto en el Map para crear el array o añadirle el mensaje)
 * - Recorre el objeto Map mostrando cada producto, y que errores tiene asociados.
 */
let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];

let s = [];
let m = [];
let c = [];

let silla = [];
let mesa = [];
let cama = [];

// for(let i = 0; i < 7; i++){
//     mensajes[i].map(x => {
//         if(x.startsWith('Silla')){
//             x = mensajes[i];
//             s.push(x);
//         }
//     });
//     mensajes[i].map(x => {
//         if(x.startsWith('Mesa')){
//             x = mensajes[i];
//             m.push(x);
//         }
//     });
//     mensajes[i].map(x => {
//         if(x.startsWith('Cama')){
//             x = mensajes[i];
//             c.push(x);
//         }
//     });
// }

// for(let i = 0; i < 3; i++){

//     s[i].map(x => {
//         if(x.startsWith('ERROR')){
//             silla.push(x);
//         }
//     });
//     m[i].map(x => {
//         if(x.startsWith('ERROR')){
//             mesa.push(x);
//         }
//     });
// }

// c[0].map(x => {
//     if(x.startsWith('ERROR')){
//         cama.push(x);
//     }
// });


// console.log(silla);
// console.log(mesa);
// console.log(cama);


console.log('--------------- APARTADO 6 -----------------');
/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

// function triangulo(lado1,lado2,angulo){
//     const pi = 3.1416;
//     let radiant = (angulo*pi)/180;

//     console.log((1/2)*lado1*lado2*radiant);
// }

// triangulo(10,10,5);



console.log('--------------- APARTADO 7 -----------------');
/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js (obsoleta - https://momentjs.com/docs/#/-project-status/) para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

// function date(f){
//     let d = new Date(f);
//     d = d.toLocaleDateString("es",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });

//     console.log(d);
// }

// date('2019-02-28');


console.log('--------------- APARTADO 8 -----------------');
/**
 * Apartado 8
 * Haz lo mismo que en el apartado 7 pero utiliza la API de internacionalización para formatear la fecha (Intl)
 */

// function date(f){
//     let d = new Date(f);

//     d = new Intl.DateTimeFormat("es-ES",{weekday:'long', day:'numeric', month:'long', year:'numeric'}).format(d)

//     console.log(d);
// }   

// date('2019-02-28');





