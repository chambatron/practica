var articulos = [
    { nombre: "Bici", costo: 150 },
    { nombre: "TV", costo: 400 },
    { nombre: "Libro", costo: 25},
    { nombre: "Celular", costo: 1200},
    { nombre: "Laptop", costo: 2700},
    { nombre: "audifonos", costo: 450},
];

var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500
});

var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre
});