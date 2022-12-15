import React from 'react'
import AllyContainer from './AllyContainer'
import EnemyContainer from './EnemyContainer'
import Footer from './Footer'

const Playground = ({pokemonEnemy, pokemon, HpEnemy, hpBarEnemy, processHealt, barColor, conVida, handleClickLog}) => {
  return (
    <div className="playground">

      <div className="charas">
        <EnemyContainer conVida={conVida} pokemonEnemy={pokemonEnemy} HpEnemy={HpEnemy} hpBarEnemy={hpBarEnemy} barColor={barColor}/>
        <AllyContainer pokemon={pokemon}/>
      </div>

      <Footer conVida={conVida} handleClickLog={handleClickLog} pokemon={pokemon} processHealt={processHealt}/>
    </div>
  )
}

export default Playground