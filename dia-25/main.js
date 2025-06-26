let contenedor = document.querySelector("#contenedor-cards");
let pokemons = [];

async function traerPokemons(n) {
  try {
    pokemons = [];
    for (let i = n; i <= n + 11; i++) {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let data = await res.json();
      pokemons.push(data);
      renderizarPokes(pokemons);
    }
  } catch (error) {
    console.log(error);
  }
}
traerPokemons(1);

const typeColors = {
  grass: "bg-green-600",
  water: "bg-blue-600",
  fire: "bg-red-600",
  electric: "bg-yellow-400",
  bug: "bg-lime-600",
  normal: "bg-gray-400",
  poison: "bg-purple-600",
  ground: "bg-yellow-700",
  fairy: "bg-pink-400",
  fighting: "bg-red-700",
  psychic: "bg-pink-600",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-600",
  dark: "bg-gray-700",
  dragon: "bg-indigo-800",
  ice: "bg-blue-200",
  steel: "bg-gray-500",
  flying: "bg-sky-400",
};

function renderizarPokes(pokemons) {
  contenedor.innerHTML = "";
  pokemons.forEach((pokemon) => {
    contenedor.innerHTML += `<div class="card flex flex-col items-center justify-center">
          <div id="cont-img" class="bg-gray-100 rounded-xl">
            <img
              src="${pokemon.sprites.other["official-artwork"].front_default}"
              alt=""
            />
          </div>
          <div
            id="cont-pkm"
            class="flex flex-col justify-start w-full p-2 gap-1"
          >
            <h3 class="text-gray-500 font-semibold">#000${pokemon.id}</h3>
            <h2 class="text-2xl">${pokemon.name}</h2>
            <div id="tipos" class="flex gap-2">
            
              ${pokemon.types
                .map((tipo) => {
                  const colorClass =
                    typeColors[tipo.type.name] || "bg-gray-300";
                  let respuesta = `
                  <p class="${colorClass} text-white px-4 rounded-xs w-[30%] text-center">
                    ${tipo.type.name}
                  </p>`;
                  return respuesta;
                })
                .join("")}
            </div>
          </div>
        </div>`;
  });
}

let ant = document.querySelector("#ant");
let sig = document.querySelector("#sig");
let pokeNumeros = 1;
sig.addEventListener("click", function (e) {
  if (pokeNumeros !== 1025) {
    pokeNumeros += 12;
    contenedor.innerHTML = "";
    traerPokemons(pokeNumeros);
  }
});

ant.addEventListener("click", function (e) {
  if (pokeNumeros !== 1) {
    pokeNumeros -= 12;
    contenedor.innerHTML = "";
    traerPokemons(pokeNumeros);
  }
});

let listaTipos = document.querySelector("#listado-clases");

async function renderizarTipos() {
  listaTipos.innerHTML = "";
  let { data } = await axios.get("https://pokeapi.co/api/v2/type/");
  let arrayTipos = data.results;
  arrayTipos.forEach((tipo) => {
    listaTipos.innerHTML += ` <li>
              <a
                href="#"
                class="btn-tipo block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >${tipo.name}</a
              >
            </li>`;
  });
}

renderizarTipos();

let btn = document.querySelector("#boton-drop");
let menu = document.querySelector("#dropdown");
btn.addEventListener("click", function (e) {
  menu.classList.toggle("hidden");
});

/* darle funcionalidad al dropdwn y filtrar a los pokemon de dicho tipo 
si le da a tipo fuego deberan aparecer todos los pokemon de tipo fuego si le da a tipo agua solo pokemon
tipo agua deberan aparecer ademas el drpdwn debera cerrarse cuando se selecione una opcion  */

listaTipos.addEventListener("click", async function (e) {
  let arrayDefinivo = [];
  if (e.target.classList.contains("btn-tipo")) {
    console.log(e.target.textContent);
    menu.classList.toggle("hidden");
    let arrayNuevo = [];
    let { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${e.target.textContent}/`
    );
    for (let j = 0; j <= 11; j++) {
      arrayNuevo.push(data.pokemon[j]);
    }
    for (let k = 0; k < arrayNuevo.length; k++) {
      console.log(arrayNuevo[k].pokemon.url);
      let infoPok = await axios.get(arrayNuevo[k].pokemon.url);
      arrayDefinivo.push(infoPok.data);
      console.log(arrayDefinivo);
      renderizarPokes(arrayDefinivo);
    }
  }
});