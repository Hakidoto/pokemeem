import React from 'react'
import AllyContainer from './AllyContainer'
import EnemyContainer from './EnemyContainer'
import Footer from './Footer'

/* Componente que almacena los contenedores con las imagenes, vida y otros datos del pokemon
aliado y rival, a su vez es utilizado para recibir los props/datos (pokemonEnemy, pokemon, hpEnemy, etc)
desde el componente padre (App.js me parece) */

const Playground = ({pokemonEnemy, pokemon, HpEnemy, hpBarEnemy, processHealt, barColor, conVida, handleClickLog, enemyName}) => {
  return (
    <div className="playground">
      <div className="separador"/>
      <div className="charas">
        <EnemyContainer  enemyName={enemyName} conVida={conVida} pokemonEnemy={pokemonEnemy} HpEnemy={HpEnemy} hpBarEnemy={hpBarEnemy} barColor={barColor}/>
        <AllyContainer pokemon={pokemon}/>
      </div>

      <Footer conVida={conVida} handleClickLog={handleClickLog} pokemon={pokemon} processHealt={processHealt} pokemonEnemy={pokemonEnemy}/>
    </div>
  )
}

export default Playground