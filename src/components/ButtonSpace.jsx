import React from 'react'

const ButtonSpace = ({pokemon, processHealt,handleClickLog}) => {
  return (
    <div className="botones">
        {pokemon.map(({ name, moves }) => (
        <div key={0}>
          <div key={1}>
            <button
              key={2}
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un movimiento"
              onClick={()=>{
                processHealt();
                handleClickLog(name, moves[0].replace("-", " "))
              }}
            >
              {moves[0].replace("-", " ")}
            </button>
            <button
              key={3}
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un item"
              onClick={()=>{
                processHealt();
                handleClickLog(name, moves[1].replace("-", " "))
              }}
            >
              {moves[1].replace("-", " ")}
            </button>
          </div>
          <div>
            <button
              key={4}
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un movimiento"
              onClick={()=>{
                processHealt();
                handleClickLog(name, moves[2].replace("-", " "))
              }}
            >
              {moves[2].replace("-", " ")}
            </button>
            <button
              key={5}
              type="button"
              className="btn btn-light m-1 boton"
              /*data-toggle="tooltip"
              data-placement="top"*/
              title="Boton designado para elegir un item"
              onClick={()=>{
                processHealt();
                handleClickLog(name, moves[3].replace("-", " "))
              }}
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