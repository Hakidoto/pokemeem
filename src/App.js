import "./styles.css";
import React, { useState, useEffect } from "react";
import { getPokemonApi } from "./Helpers/getPokemonApi";
import Playground from "./components/Playground";
import Log from "./components/Log";


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

            <Playground processHealt={processHealt} pokemon={pokemon} HpEnemy= {HpEnemy} hpBarEnemy={hpBarEnemy} pokemonEnemy={pokemonEnemy}/>
                
            <Log pokemon={pokemon}/>

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
