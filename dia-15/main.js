/* let lista = document.querySelector(".lista")

lista.innerHTML = "<li>Papaya</li> <li>melon</li> <li>manzana</li> <li>banana</li> <li>pera</li>" */

let contenedor = document.querySelector(".contenedor");

let estudiantes = [
  {
    nombre: "Felipe",
    edad: 33,
    pais: "Chile",
  },
  {
    nombre: "Pablo",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Juana",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Mahonri",
    edad: 18,
    pais: "Guatemala",
  },
  {
    nombre: "Carlo",
    edad: 50,
    pais: "Peru",
  },
  {
    nombre: "Thomas",
    edad: 25,
    pais: "Argentina"
  }
];


/* let tabla = document.querySelector(".contenido-tabla")

for(let i = 0; i < estudiantes.length; i++){
    tabla.innerHTML += `<tr>
    <td> ${estudiantes[i].nombre}</td>
    <td> ${estudiantes[i].edad}</td>
    <td> ${estudiantes[i].pais}</td>
    </tr>`
} */


for (let i = 0; i < Math.min(estudiantes.length, 6); i++) {
  let estudiante = estudiantes[i];
  
  contenedor.innerHTML += `
    <div class="max-w-sm bg-blue-900 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5 text-white dark:text-white">
        <h5 class="text-xl font-bold">${estudiante.nombre}</h5>
        <p>Edad: ${estudiante.edad}</p>
        <p>País: ${estudiante.pais}</p>
      </div>
    </div>
  `;
}