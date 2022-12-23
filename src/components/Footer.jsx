import React from 'react'
import ButtonSpace from './ButtonSpace'

/* Componente que llama a los botones y despliega un texto con el nombre del pokemon a usar concatenado. */

const Footer = ({pokemon, processHealt, handleClickLog, conVida}) => {
  return (
    <div className="playgroundFooter">
       {pokemon.map(({name}) => (
        <p key={0} className="footerP">Que deberia hacer {name.charAt(0).toUpperCase() + name.slice(1)}? </p>
       ))}  
        <ButtonSpace conVida={conVida} handleClickLog={handleClickLog} pokemon={pokemon} processHealt={processHealt} />
      </div>
  )
}

export default Footer