//Arreglos o Arrays

const numeros = [
    10, 20, 30, 40, 50
];

//console.table(numeros);
// console.table(meses);

// //Acceder a los valor del arreglo
// console.log(numeros[0]);

// //Conocer la extenxion
// console.log(meses.length);

// //Iterar para obtener cada elemento
// numeros.forEach(function(numero){
//     console.log(numero)
// });

numeros.push(60,70,80); //Agragr al final del arreglo

numeros.unshift(-10,-20,-30); //Agragar al inicio de arreglo

//console.table(numeros);

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo"
];

// meses.pop(); //Eliminar la ultima posicion del arreglo
// meses.shift(); //Elimina la primera posicion

// meses.splice(2, 1);
// console.table(meses);

const nuevoArreglo = [
    ...meses, 'Junio'
];

console.log(nuevoArreglo);

const nuevoAño = [
    '2025', ...meses
];
console.log(nuevoAño);