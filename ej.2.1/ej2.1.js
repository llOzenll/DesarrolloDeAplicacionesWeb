'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

// let ejercicio1 = ["0","1","2","3"];
// let element = ["4","5"];

// let a = [];

// a = ejercicio1.concat(element);
// // ["0","1","2","3","4","5"]

// a.unshift("-1","-2");
// // ["-2","-1","0","1","2","3","4","5"]

// a.splice(3,2);
// // ["-2","-1","0","3","4","5"]

// a.splice(5,0,"4.2","4.5");
// // ["-2","-1","0","3","4","4.2","4.5","5"]

// console.log(a.join(" ==> "));


console.log('--------------- APARTADO 1 -----------------');


/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

function Nombre(nombre = prompt("dime tu nombre"),
    notasMath = [prompt('dime tus notas de Mates'),prompt('dime tus notas de Mates'),prompt('dime tus notas de Mates'),prompt('dime tus notas de Mates')],
    notasLit = [prompt('dime tus notas de Literatura'),prompt('dime tus notas de Literatura'),prompt('dime tus notas de Literatura'),prompt('dime tus notas de Literatura')],
    notasQuim = [prompt('dime tus notas de Quimica'),prompt('dime tus notas de Quimica'),prompt('dime tus notas de Quimica'),prompt('dime tus notas de Quimica')],
    notasFis = [prompt('dime tus notas de Fisica'),prompt('dime tus notas de Fisica'),prompt('dime tus notas de Fisica'),prompt('dime tus notas de Fisica')]){
    
    notasMath[0] = parseFloat(notasMath)+0;
    notasMath[1] = parseFloat(notasMath)+0;
    notasMath[2] = parseFloat(notasMath)+0;
    notasMath[3] = parseFloat(notasMath)+0;

    let notaM = notasMath.reduce((total,notas) => total + notas,0);
    console.log(nombre + ' tu nota de mates es: ' + notaM/notasMath.length);

    notasLit[0] = parseFloat(notasLit)+0;
    notasLit[1] = parseFloat(notasLit)+0;
    notasLit[2] = parseFloat(notasLit)+0;
    notasLit[3] = parseFloat(notasLit)+0;

    let notaL = notasLit.reduce((total,notas) => total + notas,0);
    console.log(nombre + ' tu nota de literatura es: ' + notaL/notasLit.length);

    notasQuim[0] = parseFloat(notasQuim)+0;
    notasQuim[1] = parseFloat(notasQuim)+0;
    notasQuim[2] = parseFloat(notasQuim)+0;
    notasQuim[3] = parseFloat(notasQuim)+0;

    let notaQ = notasQuim.reduce((total,notas) => total + notas,0);
    console.log(nombre + ' tu nota de quimica es: ' + notaQ/notasQuim.length);

    notasFis[0] = parseFloat(notasFis)+0;
    notasFis[1] = parseFloat(notasFis)+0;
    notasFis[2] = parseFloat(notasFis)+0;
    notasFis[3] = parseFloat(notasFis)+0;

    let notaF = notasFis.reduce((total,notas) => total + notas,0);
    console.log(nombre + ' tu nota de fisica es: ' + notaF/notasFis.length);
}

Nombre();


console.log('--------------- APARTADO 2 -----------------');


/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

// let cadena = ["ana","pepe","sonia","antonio"];

// console.log(cadena);

// console.log(cadena.sort());


console.log('--------------- APARTADO 3 -----------------');


