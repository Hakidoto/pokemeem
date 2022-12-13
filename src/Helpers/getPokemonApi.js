const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
const moveApi = `https://pokeapi.co/api/v2/move/`;


export const getPokeApi = async (numPokemon) => {
  const respuesta = await fetch(pokeApi + numPokemon);
  const results = await respuesta.json();
  const name = await results.name;
  const img = await results.sprites.other.dream_world.front_default;
  const moves = await results.moves.map(move => move.move.name).slice(0, 4);
  const hp = await  results.stats[0].base_stat;
  const id = results.id;
  //console.log(moves)
  //console.log(img);
  return { name, img, moves, hp, id };
};

export const getPokeMoveApi = async (moveName) => {
  const respuesta = await fetch(moveApi + moveName);
  const results = await respuesta.json();
  const accuracy = await results.accuracy;
  const description = await results.flavor_text_entries[62].flavor_text;
  const nameEsp = await results.names[5].name;
  //console.log(img);
  return { accuracy, description, nameEsp};
};