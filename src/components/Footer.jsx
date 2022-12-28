import React from 'react'
import ButtonSpace from './ButtonSpace'

/* Componente que llama a los botones y despliega un texto con el nombre del pokemon a usar concatenado. */

const Footer = ({pokemon, processHealth, handleClickLog, conVida, pokemonEnemy,turno, processHealthAlly,enemyName}) => {
  return (
    <div className="playgroundFooter">
       {pokemon.map(({name}) => (
        <p key={0} className="footerP">Que deberia hacer {name.charAt(0).toUpperCase() + name.slice(1)}? </p>
       ))}  
        <ButtonSpace enemyName={enemyName} processHealthAlly={processHealthAlly} turno={turno} conVida={conVida} handleClickLog={handleClickLog} pokemon={pokemon} processHealth={processHealth} pokemonEnemy={pokemonEnemy} />
      </div>
  )
}

export default Footer