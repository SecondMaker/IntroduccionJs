//Arrow functions

const sumar = (n1, n2) =>{
    console.log(n1 + n2);
} 

sumar(1, 20);

//En caso de usar un solo argumento en la funcion, 
// no necesita parentesis y si es una sola linea tampoco necesita los corchetes, opcional claro esta

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`); 

aprendiendo("Js");

/*------------*/

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

meses.forEach(mes => {
    if(mes = "Enero"){
        console.log("Bonito mes eh?")
    }
});

/*--------*/

let resultado

//Some buscar un elemento en arreglos complejos
resultado = carrito.some((producto) => producto.nombre == "Monitor 20 pulgadas");

//Reduce, calcular valores dentro de un arreglo de objetos
resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0);

//Filter
resultado = carrito.filter(producto => producto.precio > 50);


resultado = carrito.filter(producto => producto.nombre  === "CPU ultra Epico");

console.log(resultado, "Busqueda nombre");



