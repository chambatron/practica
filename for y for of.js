var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

// for 

for(var i = 0; 1 < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

// for... of

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}
