import "./styles.css";
import React, { useState, useEffect } from "react";
import { getPokemonApi } from "./Helpers/getPokemonApi";

function App() {
const [pokemon, setPokemon] = useState([]);
const [pokemonEnemy, setPokemonEnemy] = useState([]);
const [hpBarEnemy, setHpBarEnemy] = useState(0);
const [HpEnemy, setHpEnemy] = useState(0)
const [hpMaxEnemy, setHpMaxEnemy] = useState(0);

const getPokemon = async (numPokemonAlly, numPokemonEnemy) => {
  const dataAlly = await getPokemonApi(numPokemonAlly);
  const dataEnemy = await getPokemonApi(numPokemonEnemy);
  //console.log(dataAlly);
  //console.log(dataEnemy);
  setPokemon([dataAlly]);
  setPokemonEnemy([dataEnemy]);
  
  setHpEnemy(dataEnemy.hp)
  setHpMaxEnemy(dataEnemy.hp)
};

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

useEffect(() => {
  setHpBarEnemy((HpEnemy/hpMaxEnemy)*100)
}, [HpEnemy,hpMaxEnemy]);


const processHealt = () => {
  setHpEnemy(HpEnemy - 10)
  
  console.log(HpEnemy)
}


return (
      <div>
        <div>
          <div className="bg-dark text-light main">
            <div className="playground">
              <div className="titilePlayground">
                <p className="">Patio de juegos</p>
              </div>
              <div className="charas">
                <div className="enemyContainer">
                {  
                  pokemonEnemy.map(({ name, hp,id }) => (
                    <>
                    <div className="progress lifeBar">
                      <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{width: `${hpBarEnemy}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      <img
                      key={id}
                      className="enemy"
                      src={`https://play.pokemonshowdown.com/sprites/ani-shiny/${name}.gif`} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                      alt="pkmnEnemy"
                    />
                    <p>{HpEnemy}</p>
                    </>
                  
                ))}
                </div>
                <div className="allyContainer">
                {pokemon.map(({ name,hp,id }) => (
                  <>
                    <div className="progress lifeBar">
                    <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <img
                    key={id} 
                    className="ally"
                    src={`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${name}.gif`}
                    alt="pkmAlly"
                    />
                    <p>{hp}</p>
                  </>
                
                ))}
                </div>
              </div>
              <div className="playgroundFooter">
                <p className="footerP">Que deberia hacer?</p>
                {pokemon.map(({ moves }) => (
                <div className="botones">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary m-1 boton"
                      /*data-toggle="tooltip"
                      data-placement="top"*/
                      title="Boton designado para elegir un movimiento"
                      onClick={()=> processHealt()}
                    >
                      {moves[0].replace("-", " ")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary m-1 boton"
                      /*data-toggle="tooltip"
                      data-placement="top"*/
                      title="Boton designado para elegir un item"
                    >
                      {moves[1].replace("-", " ")}
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
                      {moves[2].replace("-", " ")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary m-1 boton"
                      /*data-toggle="tooltip"
                      data-placement="top"*/
                      title="Boton designado para elegir un item"
                    >
                      {moves[3].replace("-", " ")}
                    </button>
                  </div>
                  
                </div>
                ))}
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
                    {pokemon.map(({ name, moves }) => (
                      <div className="overflow-auto logList">
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
                      </div>
                                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
