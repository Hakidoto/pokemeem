const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
const moveApi = `https://pokeapi.co/api/v2/move/`;


export const getPokeApi = async (numPokemon) => {
  const respuesta = await fetch(pokeApi + numPokemon);
  const results = await respuesta.json();
  const name = await results.name;
  const img = await results.sprites.other.dream_world.front_default;
  const moves = await results.moves.map(move => move.move.name).slice(0, 4);
  const atack = await  results.stats[1].base_stat;
  const defence = await  results.stats[2].base_stat;
  const hp = await  results.stats[0].base_stat;
  const type = await results.types[0].type.name;
  const speed = await  results.stats[5].base_stat;
  const atkEspecial = await  results.stats[3].base_stat;
  const dfcEspecial = await  results.stats[4].base_stat;
  const id = await results.id;
  //console.log(moves)
  //console.log(img);
  return { name, img, moves, hp, id, atack, type, defence, speed, atkEspecial,dfcEspecial};
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