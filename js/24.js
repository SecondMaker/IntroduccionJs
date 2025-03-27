//For loops

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "CPU ultra Epico", precio: 1500},
    {nombre: "Teclado laser", precio: 50},
    {nombre: "Mouse multiboton", precio: 50},
    {nombre: "Audio dimensional Surround", precio: 100}
];

for(let i = 0; i <= carrito.length; i++){
    console.log(carrito[i]);
}

//While loops

let i = 1;   //Indice

while(i <= 100){  //Condicion

    if(i % 2 ==0){
       //console.log(`El numero ${i} es par`);      
    }else{
       //console.log(`El numero ${i} es impar`);
    }
    i++;  //Incremento
}


//Do while lopp

let j = 0;

do{
    console.log(`El do while esta en el numero ${j}`);
    j++;
}while(j <= 10);
