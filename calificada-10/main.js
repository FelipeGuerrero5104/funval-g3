let contenedor = document.querySelector("#contenedor-cards");
let titulo = document.querySelector("#titulo")

async function cargarUsuarios() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Error al obtener los datos: " + res.status);
    }

    const data = await res.json();

    data.forEach((usuario) => {
      contenedor.innerHTML += `        
        <a href="#" class="block max-w-sm p-6 bg-white rounded-lg shadow-sm hover:bg-gray-300 hover:transition-transform duration-300 hover:scale-110 active:bg-gray-400">
          <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5> 
          <p class="font-semibold text-black">Usuario: ${usuario.username}</p>
          <p class="font-semibold text-black">Correo: ${usuario.email}</p> 
          <p class="font-semibold text-black">Empresa: ${usuario.company.name}</p>               
        </a>
      `;
    });
  } catch (error) {
    console.error("Ocurrió un error al cargar los usuarios:", error.message);
    contenedor.innerHTML = `<img " src="./fotos/trabajandoenello-removebg-preview.png" alt="No se pudieron cargar los archivos">`;
    titulo.innerHTML = '<h1 class="flex items-center justify-center h-32 bg-gray-700 text-white text-4xl">Eror al cargar los datos D:</h1>'
  }
}

cargarUsuarios();

console.log("Para arrojar el informe de error, ir al archivo Js y quitar el link de la pagina en el fetch")

