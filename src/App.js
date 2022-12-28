import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import { getPokeApi } from "./Helpers/getPokemonApi";
import Playground from "./components/Playground";
import Log from "./components/Log";

/* El componente padre, practicamente llama a los componentes principales (playground y log) para iniciar
toda la sopa.
TODO: Convertir todos los useEffects en un solo arreglo, de preferencia global para poder acceder a los datos
mas sencillamente. Esta conversion requiere ajustar los parametros del return y cambiar el map por el arreglo
que generes. */

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonEnemy, setPokemonEnemy] = useState([]);
  const [hpBarEnemy, setHpBarEnemy] = useState(0);
  const [HpEnemy, setHpEnemy] = useState(0);
  const [hpMaxEnemy, setHpMaxEnemy] = useState(0);
  const [barColor, setBarColor] = useState("bg-success");
  const [conVida, setConVida] = useState(true);
  const [log, setLog] = useState([]);
  const [enemyName, setEnemyName] = useState("");
  const [pokeType, setPokeType] = useState("");
  const audioRef = useRef(null);
  const [audio, setAudio] = useState("");

  console.log(audio);

  function pauseAudio() {
    audioRef.current.pause();
  }

  function playAudio() {
    audioRef.current.play();
  }

  function audioPicker() {
    let randomAudio = Math.floor(Math.random() * 4) ;
    setAudio(`audio/audio-${randomAudio}.mp3`);
  }

  const getPokemon = async (numPokemonAlly, numPokemonEnemy) => {
    const dataAlly = await getPokeApi(numPokemonAlly);
    const dataEnemy = await getPokeApi(numPokemonEnemy);
    //console.log(dataAlly);
    //console.log(dataEnemy);
    setPokemon([dataAlly]);
    setPokemonEnemy([dataEnemy]);

    setHpEnemy(dataEnemy.hp);
    setHpMaxEnemy(dataEnemy.hp);
    setEnemyName(dataEnemy.name);
  };

  let arrIdPokemon = [];
  for (let i = 1; i <= 151; i++) {
    arrIdPokemon.push(i);
  }
  const valorRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  let randomValue1 = valorRandom(arrIdPokemon);
  let randomValue2 = valorRandom(arrIdPokemon);

  useEffect(() => {
    audioPicker();
  }, []);

  useEffect(() => {
    getPokemon(randomValue1, randomValue2);
  }, []);

  useEffect(() => {
    if (hpBarEnemy <= 50 && hpBarEnemy >= 10) {
      setBarColor("bg-warning");
    } else {
      if (hpBarEnemy < 10) {
        setBarColor("bg-danger");
      } else {
        setBarColor("bg-success");
      }
    }

    if (HpEnemy <= 0) {
      setHpBarEnemy(0);
      setHpEnemy(0);
      setConVida(false);
    } else {
      setConVida(true);
      setHpBarEnemy((HpEnemy / hpMaxEnemy) * 100);
    }
  }, [HpEnemy, hpMaxEnemy, barColor, hpBarEnemy]);

  const processHealth = (damage) => {
    setHpEnemy(HpEnemy - damage);
  };

  const handleClickLog = (name, moves, damage) => {
    // Agregue una nueva entrada al log
    setLog([...log, { name, moves, damage }]);
  };

  if (audio.length != 0) {
    return (
      <div>
        <audio ref={audioRef} loop autoPlay>
          <source id="audio-file" src={audio} type="audio/mpeg" />
        </audio>

        <div>
          <div className="bgrd banner"></div>
        </div>
        <div>
          <div className="bgrd text-light main">
            <Playground
              enemyName={enemyName}
              handleClickLog={handleClickLog}
              conVida={conVida}
              processHealth={processHealth}
              pokemon={pokemon}
              HpEnemy={HpEnemy}
              hpBarEnemy={hpBarEnemy}
              pokemonEnemy={pokemonEnemy}
              barColor={barColor}
            />

            <Log
              conVida={conVida}
              enemyName={enemyName}
              pokemon={pokemon}
              log={log}
            />
          </div>
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <span className="text-music">Music: </span>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            onClick={playAudio}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            On
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            onClick={pauseAudio}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Off
          </label>
        </div>
      </div>
    );
  }
}

export default App;
