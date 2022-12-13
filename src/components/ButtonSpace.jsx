import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const ButtonSpace = ({pokemon, processHealt,handleClickLog}) => {

  return (
    <div className="botones">
        {pokemon.map(({ name, moves }) => (
        <div key={0}>
          <div key={1}>
            <Tooltip disableFocusListener title="Boton designado para realizar un movimiento" placement="top">
              <button
                key={2}
                type="button"
                className="btn btn-light m-1 boton"
                
                onClick={()=>{
                  processHealt();
                  handleClickLog(name, moves[0].replace("-", " "))
                }}
              >
                {moves[0].replace("-", " ")}
              </button>
            </Tooltip>
            <Tooltip disableFocusListener title="Boton designado para realizar un movimiento" placement="top">
              <button
                key={2}
                type="button"
                className="btn btn-light m-1 boton"
                onClick={()=>{
                  processHealt();
                  handleClickLog(name, moves[1].replace("-", " "))
                }}
              >
                {moves[1].replace("-", " ")}
              </button>
            </Tooltip>
            <Tooltip disableFocusListener title="Boton designado para realizar un movimiento" placement="bottom">
              <button
                key={2}
                type="button"
                className="btn btn-light m-1 boton"
                onClick={()=>{
                  processHealt();
                  handleClickLog(name, moves[2].replace("-", " "))
                }}
              >
                {moves[2].replace("-", " ")}
              </button>
            </Tooltip>
            <Tooltip disableFocusListener title="Boton designado para realizar un movimiento" placement="bottom">
              <button
                key={2}
                type="button"
                className="btn btn-light m-1 boton"
                onClick={()=>{
                  processHealt();
                  handleClickLog(name, moves[3].replace("-", " "))
                }}
              >
                {moves[3].replace("-", " ")}
              </button>
            </Tooltip>
          </div>
          
        </div>
        ))}
    </div>
  )
}

export default ButtonSpace