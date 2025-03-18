//Mas metodos

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo"
];

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "CPU ultra Epico", precio: 1500},
    {nombre: "Teclado laser", precio: 50},
    {nombre: "Mouse multiboton", precio: 50},
    {nombre: "Audio dimensional Surround", precio: 100}
];

//ForEACH

meses.forEach(function(mes){
    if(mes = "Enero"){
        console.log("Bonito mes eh?")
    }
});

//Buscar un elemento en arreglos simples
let resultado = meses.includes("Enero");
console.log(resultado);

//Buscar un elemento en arreglos complejos

resultado = carrito.some(function(producto){
    return producto.nombre == "Monitor 20 pulgadas"
});

console.log(resultado);

//Reduce, calcular valores dentro de un arreglo de objetos
//Metodo clasico
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);
console.log(resultado, "Metodo clasico");
//Con arrow Functions

resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0);
console.log(resultado, "Arrow functions");

//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 50;
})

console.log(resultado, "Busqueda precio");

resultado = carrito.filter(function(producto){
    return producto.nombre  === "CPU ultra Epico";
})

console.log(resultado, "Busqueda nombre");