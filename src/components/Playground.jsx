import React from 'react'
import AllyContainer from './AllyContainer'
import EnemyContainer from './EnemyContainer'
import Footer from './Footer'

const Playground = ({pokemonEnemy, pokemon, HpEnemy, hpBarEnemy, processHealt, barColor, conVida,}) => {
  return (
    <div className="playground">

      <div className="titilePlayground">
        <p className="">Patio de juegos</p>
      </div>

      <div className="charas">
        <EnemyContainer conVida={conVida} pokemonEnemy={pokemonEnemy} HpEnemy={HpEnemy} hpBarEnemy={hpBarEnemy} barColor={barColor}/>
        <AllyContainer pokemon={pokemon}/>
      </div>

      <Footer pokemon={pokemon} processHealt={processHealt}/>
    </div>
  )
}

export default Playground