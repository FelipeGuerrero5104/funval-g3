/* let contenedor = document.querySelector("#contenedor-cards");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((usuario) => {
      contenedor.innerHTML += `        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${usuario.email} - ${usuario.company.name}</p>
</a>
`;
    });
  });
 */
import { traerDatosDogs } from "./data.js";
let suggestions = [];
const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
let contenedor = document.querySelector("#contenedor");


traerDatosDogs().then((res) => {
  res.forEach((raza) => {
    suggestions.push(raza);
  });
});
console.log(suggestions);


for (let i = 1; i <= 10; i++) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      contenedor.innerHTML += `
        
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
    <img class="object-cover w-full rounded-t-lg h-44  md:w-48 md:rounded-none md:rounded-s-lg" src="${data.message}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">perrito bonito ${i}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
    </div>
</a>
`;
    });
}


input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  dropdown.innerHTML = "";
  if (query) {
    const filtered = suggestions.filter(
      (
        item //[pooodle,cavapoo,cockapoo]
      ) => item.toLowerCase().includes(query) //
    );
    if (filtered.length > 0) {
      dropdown.classList.remove("hidden");
      filtered.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item;
        div.className = "px-4 py-2 cursor-pointer hover:bg-blue-100";
        div.addEventListener("click", () => {
          input.value = item;

          fetch(`https://dog.ceo/api/breed/${input.value}/images`)
            .then((res) => res.json())
            .then((data) => {
              let arrayPerritos = data.message;
              contenedor.innerHTML = "";
              for (let j = 1; j <= 20; j++) {
                contenedor.innerHTML += `
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                    <img class="object-cover w-full rounded-t-lg h-44  md:w-48 md:rounded-none md:rounded-s-lg" src="${arrayPerritos[j]}" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">perrito bonito ${j}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
                    </div>
                </a>
                `;
              }
            });

          dropdown.classList.add("hidden");
        });
        dropdown.appendChild(div);
      });
    } else {
      dropdown.classList.add("hidden");
    }
  } else {
    dropdown.classList.add("hidden");
  }
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".relative")) {
    dropdown.classList.add("hidden");
  }
});
