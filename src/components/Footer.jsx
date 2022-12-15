import React from 'react'
import ButtonSpace from './ButtonSpace'

const Footer = ({pokemon, processHealt, handleClickLog, conVida}) => {
  return (
    <div className="playgroundFooter">
       {pokemon.map(({name}) => (
        <p className="footerP">Que deberia hacer {name}? </p>
       ))}
        {/* Lo que se me ocurre es que se podrian meter los moves en otro estado en forma de arreglo y ya recorrer ese en vez 
        del pokemon*/}
        <ButtonSpace conVida={conVida} handleClickLog={handleClickLog} pokemon={pokemon} processHealt={processHealt} />
      </div>
  )
}

export default Footer