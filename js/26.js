//This

const reservacion = {
    nombre : "Genso",
    apellido : "Aburame",
    total : 5000,
    pagado : false,
    informacion : function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

//Nota importante, de usarse this dentro de una arrow funtion la informacion seria unde, esto porque apuntaria a la ventana
// el window como tal

reservacion.informacion();