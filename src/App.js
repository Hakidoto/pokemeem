import "./styles.css";
import React, { useState, useEffect } from "react";
import { getPokemonApi } from "./Helpers/getPokemonApi";

function App() {
const [pokemon, setPokemon] = useState([]);
const [pokemonEnemy, setPokemonEnemy] = useState([]);

const getPokemon = async (numPokemonAlly, numPokemonEnemy) => {
  const dataAlly = await getPokemonApi(numPokemonAlly);
  const dataEnemy = await getPokemonApi(numPokemonEnemy);
  console.log(dataAlly);
  console.log(dataEnemy);
  setPokemon([dataAlly]);
  setPokemonEnemy([dataEnemy]);
};

console.log(pokemon.name);
let arrIdPokemon = [];
for (let i = 1; i <= 649; i++) {
  arrIdPokemon.push(i);
}


const valorRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

let randomValue1 = valorRandom(arrIdPokemon);
let randomValue2 = valorRandom(arrIdPokemon);


useEffect(() => {
  getPokemon(randomValue1, randomValue2);
}, []);



return (
      <div className="bg-dark text-light main">
        <div className="playground">
          <div className="titilePlayground">
            <p className="">Patio de juegos</p>
          </div>
          <div className="charas">
            <div className="enemyContainer">
            {pokemonEnemy.map(({ name, id }) => (
              <img
                className="enemy"
                src={`https://play.pokemonshowdown.com/sprites/ani-shiny/${name}.gif`} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                alt="pkmnEnemy"
              />
            ))}
            </div>
            <div className="allyContainer">
            {pokemon.map(({ name }) => (
            <img
              className="ally"
              src={`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${name}.gif`}
              alt="pkmAlly"
            ></img>
            ))}
            </div>
          </div>
          <div className="playgroundFooter">
            <p className="footerP">Que deberia hacer?</p>
            <div className="botones">
              <div>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un movimiento"
                >
                  Fight
                </button>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un item"
                >
                  Bag
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un movimiento"
                >
                  Fight
                </button>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un item"
                >
                  Bag
                </button>
              </div>
              
            </div>
          </div>
        </div>

        <div className="logg">
          <div>
            <div className="titleLog">
              <p className="">Battle log</p>
            </div>
            <div className="logContent">
              <div>
                <div className="logContentTitle">
                  <p>Despliega el historial de acciones realizadas.</p>
                </div>
                <div className="contentLogContent">
                  <div className="logList">
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
