/* let cerditoEnojon = ["manzana","Pera","frutilla","banana","arandano","guayaba","guanabana",
    "durazno","melon","naranja", "mandarina","chirimoya","sandia" ];

    console.log(cerditoEnojon);

    cerditoEnojon.push("kiwi");
    console.log(cerditoEnojon);



let numeros = [1,2,3,4,5,6,7,8,9,10]
let multiplos = []
for (let i = 0; i < numeros.length; i++) {
    multiplos.push(numeros[i]*2 );
}

console.log(multiplos)



let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88]
let promedio = []
notasFunval.forEach((nota) => {
    let division = nota/2;
    promedio.push(mitad);


}) */

/* let estudianteFunval = {
    nombre: "Marco",
    edad : 22,
    pais : "Peru",
    notas : [100, 90, 0, 51, 85]

};

console.log(estudianteFunval.nombre);
let promedio = 0

for(let i = 0; i < estudianteFunval.notas.length; i++ ){
    promedio = promedio + estudianteFunval.notas[i];

}
promedio = promedio / estudianteFunval.notas.length;
console.log(promedio) */


let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

function calcularPromedio(notas) {
  let promedio = 0;
  for (let index = 0; index < notas.length; index++) {
    promedio = promedio + notas[index];
  }
  promedio = promedio / notas.length;
  return promedio;
}

for (let index = 0; index < estudiantes.length; index++) {
  let estudiantePromedio = calcularPromedio(estudiantes[index].notas);
  if (estudiantePromedio >= 51) {
    console.log(
      "estudiante " +
        estudiantes[index].nombre +
        " aprobado con un promedio de: " +
        estudiantePromedio
    );
  }
}


let estudiantesArgentinos = estudiantes.filter(est => est.pais === "Argentina");

console.log(estudiantesArgentinos);
