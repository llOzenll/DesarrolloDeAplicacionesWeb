'use strict';

// Fecha de hace 2 horas (le restamos equivalente en ms)
let ahora = new Date();

let formateada = new Intl.DateTimeFormat('es-ES', {
    dateStyle: "full"
}).format(ahora);

console.log(formateada);

let formateada2 = new Intl.DateTimeFormat('es-ES', {
    day: "2-digit", month: "2-digit", year: "numeric"
}).format(ahora); 

console.log(formateada2);
    
let formateada3 = new Intl.DateTimeFormat('es-ES', {
    day: "numeric", month: "long", year: "numeric" ,
    hour: 'numeric', minute: 'numeric', hourCycle: 'h12', dayPeriod: 'long'
}).format(ahora); // 25 de abril de 2022 2:00 de la madrugada
    
console.log(formateada3);
