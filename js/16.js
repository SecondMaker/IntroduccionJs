//Declaracion de funciones

function sumar(){
    console.log(10+10);
}

sumar();

//Expresion de la funcion

const sumar2 = function(){
    console.log("A+B");
}

sumar2();

//IIFE -Permite que no se mezclen variables entre otro archivos
(function(){
    console.log("esto es una funcion");
})();