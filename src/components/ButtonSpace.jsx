import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { getPokeMoveApi } from "../Helpers/getPokemonApi";

const arrMoves = [];

const ButtonSpace = ({ pokemon, processHealt, handleClickLog, conVida }) => {
  const [move, setMove] = useState({});

  const getMove = async (moveName) => {
    const dataAlly = await getPokeMoveApi(moveName);
    console.log(dataAlly);
    updateValue(dataAlly);
  };

  const updateValue = (newValue) => {
    arrMoves.push(newValue);
    setMove(newValue);
    console.log(arrMoves);
    return arrMoves;
  };


  useEffect(() => {
    pokemon.map(({ moves }) => {
      for (let i = 0; i < 4; i++) {
        getMove(moves[i]);
      }
    });
  }, [pokemon]);

  if (arrMoves.length === 4) {
    return (
      <div className="botones">
        {pokemon.map(({name}) => (
          <div key={0}>
            <div key={1}>
              <Tooltip
                disableFocusListener
                title={arrMoves[0].description}
                placement="top"
              >
                <button
                  key={2}
                  type="button"
                  className="btn btn-light m-1 boton"
                  disabled={conVida ? false : true}
                  onClick={() => {
                    processHealt();
                    handleClickLog(name, arrMoves[0].nameEsp);
                  }}
                >
                  {arrMoves[0].nameEsp}
                </button>
              </Tooltip>
              <Tooltip
                disableFocusListener
                title={arrMoves[1].description}
                placement="top"
              >
                <button
                  key={2}
                  type="button"
                  className="btn btn-light m-1 boton"
                  disabled={conVida ? false : true}
                  onClick={() => {
                    processHealt();
                    handleClickLog(name,arrMoves[1].nameEsp);
                  }}
                >
                  {arrMoves[1].nameEsp}
                </button>
              </Tooltip>
              <Tooltip
                disableFocusListener
                title={arrMoves[2].description}
                placement="bottom"
              >
                <button
                  key={2}
                  type="button"
                  className="btn btn-light m-1 boton"
                  disabled={conVida ? false : true}
                  onClick={() => {
                    processHealt();
                    handleClickLog(name,arrMoves[2].nameEsp);
                  }}
                >
                  {arrMoves[2].nameEsp}
                </button>
              </Tooltip>
              <Tooltip
                disableFocusListener
                title={arrMoves[3].description}
                placement="bottom"
              >
                <button
                  key={2}
                  type="button"
                  disabled={conVida ? false : true}
                  className="btn btn-light m-1 boton"
                  onClick={() => {
                    processHealt();
                    handleClickLog(name,arrMoves[3].nameEsp);
                  }}
                >
                  {arrMoves[3].nameEsp}
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ButtonSpace;
