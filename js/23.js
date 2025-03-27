//Switch

const metodoPago = "Efectivo";

switch(metodoPago){
    case "Efectivo" :
        console.log("Pago con efectivo");
        break;
    case "Tarjeta" :
        console.log("Pago con tarjeta");
        break;
    case "Cheque" :
        console.log("Pago con cheque, verificacion de fondos primero");
        break;
    default :
        console.log("Pago sin efectuar");
        break;    
}