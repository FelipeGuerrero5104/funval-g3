const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 

  /* Recorre el array de productos y muestra en la consola el nombre y el precio de cada uno con forEach */

productos.forEach(function(producto) {
    console.log( producto);
})


/* Parte 1: Usa map para generar un array productosDisponibles que contenga solo los nombres de los productos a partir del array productos.
   Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes. */

const productosDisponibles = productos.map(producto => producto.nombre);
const productoBuscado = "Profe Kevin, tiene que ingresar un producto en el js" ;

if (productosDisponibles.includes(productoBuscado)) {
    console.log(`${productoBuscado} está disponible.`)
} else {
    console.log(`${productoBuscado} no está disponible.`)
}

 /* Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios. */

const productosConDescuento = productos.map(producto => ({
  nombre: producto.nombre,
  precioConDescuento: producto.precio * 0.9
}));

console.log("aplicando descuentos", productosConDescuento);


/* Crea un array con los productos cuyo precio sea menor a $100. */


let productosBaratos = productos.filter(est => est.precio < 100);

console.log("productos menores de 100", productosBaratos);


/* Muestra los primeros 2 productos de la lista */

console.log("primeros dos productos de la lista", productos.slice(0, 2));

/* Investiga cómo funciona el método sort en JavaScript y úsalo para ordenar los productos de menor a mayor precio. */

productos.sort((a,b) => a.precio - b.precio )
console.log("productos ordenados",productos)


/* Investiga cómo funciona el método reverse en JavaScript y utilízalo para mostrar los productos en orden inverso. */

const productosInvertidos = productos.slice().reverse();
console.log("productos a la inversa",productosInvertidos);        /* ESTE ULTIMO ES UNA COPIA DEL ARRAY SIN MODIFICAR EL ORIGINAL HECHO POR FELIPE GUERRERO :V */

// PARA HACER QUE EL ARRAY ORIGINAL SE INVIERTA DESCOMENTAR LAS LINEAS DE ABAJO Y COMENTAR LAS DE ARRIBA( LA COPIA) CONSIDERANDO QUE EN ESTE PUNTO ESTAN ORDENADAS POR PRECIO

/* productos.reverse();
console.log(productos) */