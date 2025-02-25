//String of cadenas de texto

const producto = "Monitor";
const producto1 = String("Monitor 10\" pulgadas"); //La barra invertida nos permite una 
const texto = "Un texto significativamente largo para poder explicar ciertas funcionalidades";
// utlizacion de una comilla doble dentro de comillas dobles sin error
const producto2 = new String("Monitor 20 pulgadas");

//Un funcion es cuando se le pasa el dato dentro de una parentesis, pero si agregamos un punto y una funcionalidad extra se convierte en un metodo
//Length sirve para conocer la extension de un elemento, sin embargo no es considerado un metodo como tal
console.log(producto.length);

//indexof permite conseguir si dentro de una cadena de texto existe o no existe una palabra, si el resultado es negativo es que no existe
console.log(texto.indexOf("largo"));

//includes (A diferencia de indexof que retorna una posicion, includes retorna verdadero o falso)
console.log(texto.includes("largo"));
