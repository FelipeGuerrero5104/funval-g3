/* console.log("Salir con la esposa")
setTimeout(()=>{
    console.log("ducharme");
}, 1000)
setTimeout(()=>{
    console.log("vestirme");
}, 2000)
setTimeout(()=>{
    console.log("peinarme de manera fachera");
}, 3000)

setTimeout(()=>{
    console.log("Pedir una pizza")
}, 4000)
setTimeout(()=>{
    console.log("Jugar 1 partida competitiva de Valorant");
}, 5000)
setTimeout(()=>{
    console.log("Llego la pipza :v");
}, 6000)

setTimeout(()=>{
    console.log("Solucionar el hambre mundial :v")
}, 7000)

setTimeout(() => {
  console.log("Esposa lista para salir :V");
}, 8000); */


/* console.log("Me porte mal :D")
function paloDeEscoba() {
    let roto = false;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (roto) {
                resolve("Mi mama me rompio la escoba en la espada :C");
            } else {
                reject("Mi espalda esta a salvo :D ");
            }
        }, 3000);
    });
}

paloDeEscoba()
    .then((datos)=> console.log(datos))
    .catch((err) => console.log(err)); */




let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
];


function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("me mando el querido Juan");
      }
    }, 7000);
  });
}
let lista = document.querySelector("#listado");
lista.innerHTML = `
<div role="status" class="flex items-center justify-center h-96 w-96 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="flex items-center justify-center h-96 w-96 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="flex items-center justify-center h-96 w-96 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>

`;
traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `<li><p>nombre: ${estudiante.nombre}</p>
      <p>edad:${estudiante.edad}</p></li>`;
    });
  })
  .catch((err) => console.log(err));