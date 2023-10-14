

var articulos = [
    { nombre: "Bici", costo: 150 },
    { nombre: "TV", costo: 400 },
    { nombre: "Libro", costo: 25},
    { nombre: "Celular", costo: 1200},
    { nombre: "Laptop", costo: 2700},
    { nombre: "audifonos", costo: 450},
];


var encuentraArticulo = articulos.find(function(articulos){
    return articulos.nombre === "laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})