const urlApi = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemonApi = async (numPokemon) => {
  const respuesta = await fetch(urlApi + numPokemon);
  const results = await respuesta.json();
  const name = await results.name;
  const img = await results.sprites.other.dream_world.front_default;
  console.log(img);
  return { name, img };
};