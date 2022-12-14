import "./styles.css";
import React, { useState, useEffect } from "react";
import { getPokeApi } from "./Helpers/getPokemonApi";
import Playground from "./components/Playground";
import Log from "./components/Log";
import Swal from 'sweetalert2'

function App() {
const [pokemon, setPokemon] = useState([]);
const [pokemonEnemy, setPokemonEnemy] = useState([]);
const [hpBarEnemy, setHpBarEnemy] = useState(0);
const [HpEnemy, setHpEnemy] = useState(0)
const [hpMaxEnemy, setHpMaxEnemy] = useState(0);
const [barColor, setBarColor] = useState("bg-success");
const [conVida, setConVida] = useState(true);
const [log, setLog] = useState([]);
const [enemyName, setEnemyName]= useState("");


const getPokemon = async (numPokemonAlly, numPokemonEnemy) => {
  const dataAlly = await getPokeApi(numPokemonAlly);
  const dataEnemy = await getPokeApi(numPokemonEnemy);
  //console.log(dataAlly);
  //console.log(dataEnemy);
  setPokemon([dataAlly]);
  setPokemonEnemy([dataEnemy]);
  
  setHpEnemy(dataEnemy.hp)
  setHpMaxEnemy(dataEnemy.hp)
  setEnemyName(dataEnemy.name);
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
  if (hpBarEnemy <= 50 && hpBarEnemy>= 10){
    setBarColor("bg-warning");
  }else{
    if(hpBarEnemy<10){
      setBarColor("bg-danger")
    }else{
      setBarColor("bg-success")
    }
  }

  if(HpEnemy <= 0){
    setHpBarEnemy(0);
    setHpEnemy(0);
    setConVida(false); 
  }else{
    setConVida(true);
    setHpBarEnemy((HpEnemy/hpMaxEnemy)*100)
  }
  
}, [HpEnemy,hpMaxEnemy, barColor, hpBarEnemy]);


const processHealt = () => {
  setHpEnemy(HpEnemy - 10)

}

const handleClickLog = (name, moves) => {
  // Agregue una nueva entrada al log
  setLog([...log, { name, moves }]);
}


return (
      <div>
        <div>
          <div className="bgrd text-light main">

            <Playground  handleClickLog={handleClickLog}  conVida={conVida} processHealt={processHealt} pokemon={pokemon} HpEnemy= {HpEnemy} hpBarEnemy={hpBarEnemy} pokemonEnemy={pokemonEnemy} barColor={barColor}/>
                
            <Log conVida={conVida} enemyName={enemyName} pokemon={pokemon} log={log}/>

          </div>
        </div>
        
        <div>
          <div className="bgrd footer">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
