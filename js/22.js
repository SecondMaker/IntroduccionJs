//Estructuras de control

const puntaje = 100;

if(puntaje == 1000){
    console.log(`Puntaje identico a 1000`);
}else {
    console.log(`Puntaje inferior a 1000`);
}

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito){
    console.log("Pago completado efectivamente");
}else if(efectivo < carrito){
    console.log("Saldo insuficiente")
}

const rol = "Administrador"

if( rol === "Administrador"){
    console.log("Accceso total");
}if(rol = "Editor"){
    console.log("Acceso reducido")
}else{
    console.log("Sin acceso");
}