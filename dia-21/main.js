/* const estudiantesFunval = [
  { nombre: "Felipe", nota: 89 },
  { nombre: "Thomas", nota: 34 },
  { nombre: "Pablo", nota: 77 },
  { nombre: "woodleine", nota: 68 },
  { nombre: "Mahonri", nota: 23 },
];

const estAprobados = estudiantesFunval
.filter(est => est.nota >= 76)
.map(est => est.nombre
.toUpperCase());

console.log(estAprobados); */


const estudiantesFunval2 = [
  { nombre: "Lucía Gómez", pais: "Argentina", edad: 20, notas: [8, 7, 9, 10] },
  { nombre: "Mateo Rojas", pais: "México", edad: 22, notas: [6, 8, 7] },
  {
    nombre: "Valentina Pérez",
    pais: "Chile",
    edad: 21,
    notas: [9, 9, 10, 10, 8],
  },
  { nombre: "Carlos Silva", pais: "Colombia", edad: 23, notas: [7, 6, 7] },
  { nombre: "Sofía Torres", pais: "España", edad: 19, notas: [10, 9, 10] },
  { nombre: "Andrés Castillo", pais: "Perú", edad: 24, notas: [5, 6, 7, 8] },
  { nombre: "Camila Herrera", pais: "Uruguay", edad: 22, notas: [8, 9, 7] },
  { nombre: "Juan López", pais: "Bolivia", edad: 20, notas: [6, 7, 6, 5] },
  {
    nombre: "Isabela Ramírez",
    pais: "Ecuador",
    edad: 21,
    notas: [9, 8, 9, 10],
  },
  { nombre: "Tomás Díaz", pais: "Paraguay", edad: 23, notas: [6, 6, 7, 8] },
  {
    nombre: "Martina Aguilar",
    pais: "Argentina",
    edad: 20,
    notas: [10, 10, 9],
  },
  { nombre: "Diego Méndez", pais: "México", edad: 24, notas: [5, 6, 7, 6] },
  { nombre: "Paula Vargas", pais: "Colombia", edad: 22, notas: [8, 9, 10] },
  { nombre: "Alejandro Núñez", pais: "Chile", edad: 21, notas: [7, 7, 6, 7] },
  { nombre: "Fernanda Soto", pais: "España", edad: 19, notas: [10, 9, 10, 9] },
];

const promedios = estudiantesFunval2.map(est => {
  const suma = est.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / est.notas.length;

  return {
    nombre: est.nombre,
    promedio: promedio.toFixed(1) 
  };
});

console.log(promedios);


//filtrar estudiantes mayores//
let arrayMayores = estudiantesFunval2.filter(est => est.edad > 21)
console.log(arrayMayores)


let estudianteReconocido = estudiantesFunval2.filter(est => {
  return promedios.promedio >= 8;
});
console.log(estudianteReconocido)