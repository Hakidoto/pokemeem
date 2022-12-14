import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { getPokeMoveApi } from "../Helpers/getPokemonApi";

const ButtonSpace = ({ pokemon, processHealt, handleClickLog, conVida }) => {
  const [move, setMove] = useState([]);

  const getMove = async (moveName) => {
    const dataAlly = await getPokeMoveApi(moveName);
    console.log(dataAlly);
    setMove([...move, dataAlly]);
  };


  /*pokemon.map(({ moves }) => {
    for (let i = 0; i < 4; i++) {
      moveSet.push(getMove(moves[i]));
    }
  }); */

  useEffect(() => {
    pokemon.map(({ moves }) => {
      for (let i = 0; i < 4; i++) {
       getMove(moves[i]);
      }})
  }, []);

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
                disabled={conVida?false:true}
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
                disabled={conVida?false:true}
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
                disabled={conVida?false:true}
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
                disabled={conVida?false:true}
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
