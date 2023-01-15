const form = document.querySelector("#searchPokemon");
const pokeContainer = document.querySelector("#pokeContainer");
const pokeDiv = document.querySelector("#pokeDiv");
const pokeUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchText = form.elements.query.value;
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${searchText}/`
  );

  let pokeName = document.createElement("h2");
  pokeName.innerText = res.data.name;
  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${res.data.id}`;
  let pokeDescribeOne = document.createElement("p");
  pokeDescribeOne.innerText = `COLOR: ${res.data.color.name}`;
  let pokeDescribeThree = document.createElement("p");
  pokeDescribeThree.innerText = `GROWTH RATE: ${res.data.growth_rate.name}`;
  let pokeDescribeTwo = document.createElement("p");

  if (res.data.form_descriptions.length > 0) {
    pokeDescribeTwo.innerText = `DESCRIBE: ${res.data.form_descriptions[0].description}`;
  }

  let pokeImage = document.createElement("img");
  pokeImage.src = `${pokeUrl}${searchText}.svg`;

  pokeDiv.append(
    pokeImage,
    pokeName,
    pokeNumber,
    pokeDescribeOne,
    pokeDescribeTwo,
    pokeDescribeThree
  );
  pokeContainer.appendChild.pokeDiv;
});

function clearBox(pokeContainer)
{
    document.getElementById('pokeContainer').innerHTML = "";
   document.location.reload();
}
