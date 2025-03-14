//Objetos

const Nombre = "Monitor";
const tamaño = "20 pulgadas";
const precio = "40 dolares";

const Producto = {
    Nombre: "Monitor",
    Tamaño: "20 Pulgadas",
    Precio: "40 dolares"
}

//console.log(Producto.Precio);
//console.log(Producto["Precio"]);

//Agregar Propiedades
Producto.Marca = "Vicarium";

//Eliminar propiedades
delete Producto.Tamaño;
console.log(Producto); 
