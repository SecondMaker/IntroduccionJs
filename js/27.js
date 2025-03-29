//POO

/*Object literal*/
const producto  = {
    nombre: "Tablet",
    precio : 500
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre,
    this.precio = precio;
}

const productoA = new Producto("Celular", 100);
const productoB = new Producto("Salero", 10);

function FormatearProducto(producto){
    console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}`);
}

console.log(productoA);
console.log(productoB);


console.log(FormatearProducto(productoB));