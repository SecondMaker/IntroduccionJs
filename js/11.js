const Producto = {
    Nombre: "Monitor",
    Tamaño: "20 Pulgadas",
    Precio: "40 dolares"
}

//De estructuracion, forma antigua
const PrecioProducto = Producto.Precio;

//Destructuring Forma nueva

const {Nombre, Precio} = Producto;

console.log(PrecioProducto);
console.log(Nombre);
console.log(Precio);
console.log("aqui");