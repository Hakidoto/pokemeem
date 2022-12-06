const urlApi = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemonApi = async (numPokemon) => {
  const respuesta = await fetch(urlApi + numPokemon);
  const results = await respuesta.json();
  const name = await results.name;
  const img = await results.sprites.other.dream_world.front_default;
  const moves = await results.moves.map(move => move.move.name).slice(0, 10).join(', ');
  const hp = await  results.stats[0].base_stat;
  const id = results.id;
  console.log(moves)
  console.log(img);
  return { name, img, moves, hp, id };
};