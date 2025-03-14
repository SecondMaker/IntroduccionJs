"use strict";

const Producto = {
    Nombre: "Monitor",
    Tamaño: "20 Pulgadas",
    Precio: "40 dolares"
}

Object.freeze(Producto);
console.log(Object.isFrozen(Producto));
//Onject.Freeze No permite agregar nuevos elementos, eliminar actuales ni cambiar presentes
Object.seal(Producto);
console.log(Object.isSealed(Producto));
//Onject.seal  Si permite modificar

//Producto.imagen = "imagen.jpg";

console.log(Producto);

