import { tecnologias } from "./habilidades.js";
import { proyectos } from "./proyectos.js";

//INICIO MODAL DE HABILIDADES//
const contenedor = document.getElementById("contenedorImagenes");

  tecnologias.forEach((tec, index) => {
    const img = document.createElement("img");
    img.src = tec.imagen;
    img.alt = tec.nombre;
    img.className =
      "object-center object-cover w-[90px] h-[90px] rounded-2xl cursor-pointer transition-transform hover:scale-125";
    img.onclick = () => abrirModal(index);
    contenedor.appendChild(img);
  });

  const imagenPython = document.querySelectorAll("#contenedorImagenes img")[3];
    imagenPython.style.width = "80px";
    imagenPython.style.height = "80px";


  function abrirModal(index) {
    const tec = tecnologias[index];
    document.getElementById("modalImagen").src = tec.imagen;
    document.getElementById("modalTitulo").textContent = tec.nombre;
    document.getElementById("modalDescripcion").textContent = tec.descripcion;
    document.getElementById("modal").classList.remove("hidden");
  }

  document.getElementById("botonCerrarModal").addEventListener("click", cerrarModal);
  function cerrarModal() {
    document.getElementById("modal").classList.add("hidden");
  }
//FIN MODAL DE HABILIDADES//


//INICIO CONTENEDOR PROYECTOS//

const contenedorProyectos = document.getElementById("contenedor-proyectos");

proyectos.forEach(({ src, alt, enlace }) => {
  const a = document.createElement("a");
  a.href = enlace;
  a.target = "_blank";
  a.className = "transition-transform hover:scale-105";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = "w-[90px] h-[150px]  rounded-2xl shadow-md";

  a.appendChild(img);
  contenedorProyectos.appendChild(a);
});

//FIN CONTENEDOR PROYECTOS//

//INICIO DARK MODE//
const btn = document.getElementById("botoncito");
      btn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
      });

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("button.md\\:hidden");
  const mobileNav = document.getElementById("navPequeña");

  toggleButton.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
});

//FIN DARK MODE //

// INICIO BOTON PARA DESCARGAR CV DESDE EL HEADER//

document.addEventListener("DOMContentLoaded", () => {
  const liDescarga = document.getElementById("descargarCV");

  liDescarga.addEventListener("click", () => {
  const CV = document.createElement("a");
  CV.href = "./FelipeGuerrero.pdf";
  CV.download = "FelipeGuerrero.pdf"
  CV.click();
  })
}) 

// FIN BOTON PARA DESCARGAR CV DESDE EL HEADER//

// INICIO BOTON PARA DESCARGAR CV DESDE EL MAIN//

document.addEventListener("DOMContentLoaded", () => {
  const liDescarga2 = document.getElementById("descargarCV2");

  liDescarga2.addEventListener("click", () => {
  const CV2 = document.createElement("a");
  CV2.href = "./FelipeGuerrero.pdf";
  CV2.download = "FelipeGuerrero.pdf"
  CV2.click();
  })
}) 

// FIN BOTON PARA DESCARGAR CV DESDE EL MAIN//
