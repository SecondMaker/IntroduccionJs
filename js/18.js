//Funciones parametros y argumentos

function sumar(numeroA = 0, numerob = 0){ //NUmeroA y numerob son parametros
    console.log(numeroA+numerob);
}

sumar(2);

const sumar2 = function(n1, n2){ 
    console.log(n1 + n2, "A+B");
}

sumar2(50, 10); //Argumentos