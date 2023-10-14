var j1;
var j2;
var piedra;
var papel; 
var tijera;

function juego (j1, j2){
    if (j1===j2){
        console.log("es un empate");
    }else if(j1===piedra&&j2===tijera){
        console.log("gana jugador 1 con piedra");'
    }else if(j1===piedra&&j2===papel){
        console.log("Gana jugador 2 con piedra");
    }else if(j1===papel&&j2===piedra){
        console.log("gana jugador 1 con papel");
    }else if(j1===papel&&j2===tijera){
        console.log("gana jugador 1 con papel");
    }else if(j1===tijera&&j2===piedra){
        console.log("gana jugador 2 con piedra");
    }else(j1===tijera&&j2===papel){
        console.log("Gana jugador con tijera");
    }
}

juego (piedra,piedra);