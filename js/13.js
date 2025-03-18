//Unir dos objetos con el spread operator

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medidas: "1m"
}

const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);
