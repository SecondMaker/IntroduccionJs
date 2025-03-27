//Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar : function(){
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre){
        console.log(`Creando playlist con el nombre: ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo playlist con el nombre: ${nombre}`)
    }
}


reproductor.reproducir(12);
reproductor.pausar();
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion con ID: ${id}`)
}
reproductor.crearPlaylist("Advertion");
reproductor.reproducirPlaylist("Advertion");


reproductor.borrarCancion(12);
console.log(reproductor);