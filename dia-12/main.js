let cantidadDeHomeros = 1; 

let nombre1 = prompt("Ingresa tu nombre para el club");

if (nombre1 === "Homero") {
  if (cantidadDeHomeros < 1) {
    cantidadDeHomeros++;
    console.log("Bienvenido Homero,");
  } else {
    console.log("No se permiten Homeros, quiere decir que no puede haber mas de uno >:D");
  }
} else {
  console.log("Bienvenido", nombre1);
}