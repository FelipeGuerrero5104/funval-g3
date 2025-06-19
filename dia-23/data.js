/* let suggestions = [];
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => {
    suggestions = Object.keys(data.message);
  });
export { suggestions };
 */

async function traerDatosDogs() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  let suggestions = Object.keys(data.message);
  return suggestions;
}

export { traerDatosDogs };
