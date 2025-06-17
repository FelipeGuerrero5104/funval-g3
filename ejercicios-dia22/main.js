let datos = [
  { nombre: "pepe", edad: 18, pais: "Argentina" },
  { nombre: "juan", edad: 34, pais: "Peru" },
  { nombre: "kevin", edad: 28, pais: "Narnia" },
  { nombre: "Thomas", edad: 28, pais: "Argentina" },
  { nombre: "Johan", edad: 28, pais: "Chile" },
  { nombre: "Juana", edad: 28, pais: "Chile" },
];



function obtenerEstudiantes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datos);
    }, 3000); 
  });
}


function crearSkeleton() {
  const div = document.createElement("div");
  div.innerHTML = `
    <div role="status" class="flex items-center justify-center h-14 w-28 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
      <svg class="w-6 h-6 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  `;
  return div.firstElementChild;
}


function crearTarjeta(persona) {
  const div = document.createElement("div");
  div.className = "border-2 border-white rounded-xl px-4 py-2";
  div.textContent = persona.nombre;
  return div;
}


function mostrarSkeletons(contenedorId, cantidad = 3) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    contenedor.appendChild(crearSkeleton());
  }
}

function mostrarEnContenedor(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ""; 
  lista.forEach(p => contenedor.appendChild(crearTarjeta(p)));
}

function cargarEstudiantes() {
  mostrarSkeletons("todos", 6);
  mostrarSkeletons("argentinos", 2);
  mostrarSkeletons("edad28", 2);

  obtenerEstudiantes()
    .then(estudiantes => {
      // Todos
      mostrarEnContenedor(estudiantes, "todos");

      // Solo Argentina
      const argentinos = estudiantes.filter(p => p.pais === "Argentina");
      mostrarEnContenedor(argentinos, "argentinos");

      // Solo con edad 28
      const edad28 = estudiantes.filter(p => p.edad === 28);
      mostrarEnContenedor(edad28, "edad28");
    })
    .catch(error => {
      console.error("Error al cargar estudiantes:", error);
    });
}

document.addEventListener("DOMContentLoaded", cargarEstudiantes);

