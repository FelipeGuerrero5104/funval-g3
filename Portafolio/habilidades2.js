        const tecnologias = [
        {
          nombre: "HTML",
          imagen: "./fotos/html2.png",
          descripcion: "Nivel: Medio",
          descripcionLarga : "Me encanta HTML, tengo habiliades que me permiten encajar todo muy bien, el modelo de cajas lo tengo dominado",
        },
        {
          nombre: "CSS",
          imagen: "./fotos/css3.png",
          descripcion: "Nivel: Principiante",
          descripcionLarga : "Actualmente mi nivel de CSS no es tan bueno, esto porque me encantan usar tailwindCSS, creo que es mejor y me permite una mejor memoria y adaptacion a los estilos"
        },
        {
          nombre: "CCNA",
          imagen: "./fotos/cnna2.png",
          descripcion: "Nivel: Principiante",
          descripcionLarga : "Tengo experiencia manejando redes, estuve 1 año estudiando Ciber-Seguridad y este logo, certifica por Cisco que manejo redes al nivel 1"
        },
        {
          nombre: "Python",
          imagen: "./fotos/logo_python.png",
          descripcion: "Nivel: Medio",
          descripcionLarga : "Soy amante de Python por su simplesa, me desmpeño en la creacion de menus junto con sus funcionalidades, me enseñaron mucho mientras estudie ciber-seguridad"
        },
        {
          nombre: "JavaScript",
          imagen: "./fotos/javascript2.webp",
          descripcion: "Nivel : Pobre",
          descripcionLarga : "Como lenguaje de programacion es excelente pero aun me cuesta alguas de sus funcionalidades como las funciones flecha y los forEach "
        },
      ];

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

      // Ajuste específico para la imagen de Python
      const imagenPython = document.querySelectorAll("#contenedorImagenes img")[3];
      imagenPython.style.width = "80px";
      imagenPython.style.height = "80px";

      // Funciones del modal
      function abrirModal(index) {
        const tec = tecnologias[index];
        document.getElementById("modalImagen").src = tec.imagen;
        document.getElementById("modalTitulo").textContent = tec.nombre;
        document.getElementById("modalDescripcion").textContent = tec.descripcion;
        document.getElementById("modalDescripcionLarga").textContent = tec.descripcionLarga
        document.getElementById("modal").classList.remove("hidden");
      }

      document.getElementById("botonCerrarModal").addEventListener("click", cerrarModal);
      function cerrarModal() {
        document.getElementById("modal").classList.add("hidden");
      }