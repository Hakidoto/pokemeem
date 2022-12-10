import React from 'react'

const ButtonSpace = ({pokemon, processHealt, }) => {
  return (
    <div className="botones">
        {pokemon.map(({ moves }) => (
        <div >
          <div>
            <button
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un movimiento"
              onClick={()=> processHealt()}
            >
              {moves[0].replace("-", " ")}
            </button>
            <button
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un item"
              
            >
              {moves[1].replace("-", " ")}
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un movimiento"
            >
              {moves[2].replace("-", " ")}
            </button>
            <button
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un item"
            >
              {moves[3].replace("-", " ")}
            </button>
          </div>
          
        </div>
        ))}
    </div>
  )
}

export default ButtonSpace