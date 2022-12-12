import React from 'react'
import ButtonSpace from './ButtonSpace'

const Footer = ({pokemon, processHealt, handleClickLog}) => {
  return (
    <div className="playgroundFooter">
        <p className="footerP">Que deberia hacer?</p>

        {/* Lo que se me ocurre es que se podrian meter los moves en otro estado en forma de arreglo y ya recorrer ese en vez 
        del pokemon*/}
        <ButtonSpace handleClickLog={handleClickLog} pokemon={pokemon} processHealt={processHealt} />
      </div>
  )
}

export default Footer