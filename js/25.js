const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "CPU ultra Epico", precio: 1500},
    {nombre: "Teclado laser", precio: 50},
    {nombre: "Mouse multiboton", precio: 50},
    {nombre: "Audio dimensional Surround", precio: 100}
];

//ForEach

carrito.forEach(function(producto){
    console.log(producto);
});

//En arrow function

carrito.forEach(producto => console.log(producto));

//map

//Nos crea un nuevo arreglo, por eso la necesidad de colocarlo dentro de una variable

let arreglo1 = carrito.map(producto => producto.nombre) //Una funcion en modelo arrow

console.log(arreglo1);

let arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);