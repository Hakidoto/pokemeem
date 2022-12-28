import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { getPokeMoveApi } from "../Helpers/getPokemonApi";
import { clippingParents } from "@popperjs/core";
import { damageCalc } from "../Helpers/damageFormula";

/* Componente que almacena los botones con los movimientos del pokemon aliado, 
este proporciona el className para diseñar los componentes mencionados anteriormente.
Tambien tiene un arreglo que guarda los parametros de los movimientos de forma global.  */

const arrMoves = [];
const arrEnemyMoves = [];

const ButtonSpace = ({
  pokemon,
  pokemonEnemy,
  processHealt,
  handleClickLog,
  conVida,
}) => {
  const [move, setMove] = useState({});
  const [enemyMove, setEnemyMove] = useState({});

  const getMove = async (moveName) => {
    const dataAlly = await getPokeMoveApi(moveName);
    //console.log(dataAlly);
    updateValue(arrMoves, dataAlly, setMove);
  };
 
  const getEnemyMove = async (moveName) => {
    const dataEnemy = await getPokeMoveApi(moveName);
    //console.log(dataEnemy);
    updateValue(arrEnemyMoves, dataEnemy, setEnemyMove);
  };

  const updateValue = (arrayMove, newValue, pokeState) => {
    arrayMove.push(newValue);
    pokeState(arrayMove);
    //console.log(arrMoves);
    return arrayMove;
  };

  useEffect(() => {
    pokemon.map(({ moves }) => {
      for (let i = 0; i < 4; i++) {
        getMove(moves[i]);
        getEnemyMove(pokemonEnemy[0].moves[i])
      }
    });
  }, [pokemon]);

  if (arrMoves.length === 4) {
    return (
      <div className="botones">
        {pokemon.map(
          ({ name, hp, attack, type, defense, speed, atkEsp, defEsp }) => (
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
                    className={conVida ? "m-2 boton" : "m-2 botonDes"}
                    onClick={() => {
                      if (conVida) {
                        var allyAttack = attack;
                        var movePower = arrMoves[0].power;
                        var enemyDef = pokemonEnemy[0].defense;
                        var allyType = type;
                        var enemyType = pokemonEnemy[0].type;
                        var moveType = arrMoves[0].moveType;

                        var dmgResult = damageCalc(
                          allyAttack,
                          movePower,
                          enemyDef,
                          allyType,
                          enemyType,
                          moveType
                        );
                        processHealt(dmgResult);
                        handleClickLog(name, arrMoves[0].nameEsp, dmgResult);
                      } else {
                        console.log("Desactivated");
                      }
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
                    className={conVida ? "m-2 boton" : "m-2 botonDes"}
                    onClick={() => {
                      if (conVida) {
                        var allyAttack = attack;
                        var movePower = arrMoves[1].power;
                        var enemyDef = pokemonEnemy[0].defense;
                        var allyType = type;
                        var enemyType = pokemonEnemy[0].type;
                        var moveType = arrMoves[1].moveType;

                        var dmgResult = damageCalc(
                          allyAttack,
                          movePower,
                          enemyDef,
                          allyType,
                          enemyType,
                          moveType
                        );

                        processHealt(dmgResult);
                        handleClickLog(name, arrMoves[1].nameEsp, dmgResult);
                      } else {
                        console.log("Desactivated");
                      }
                    }}
                  >
                    {arrMoves[1].nameEsp}
                  </button>
                </Tooltip>
                <Tooltip
                  disableFocusListener
                  title={arrMoves[2].description}
                  placement="left"
                >
                  <button
                    key={2}
                    type="button"
                    className={conVida ? "m-2 boton" : "m-2 botonDes"}
                    onClick={() => {
                      if (conVida) {
                        var allyAttack = attack;
                        var movePower = arrMoves[2].power;
                        var enemyDef = pokemonEnemy[0].defense;
                        var allyType = type;
                        var enemyType = pokemonEnemy[0].type;
                        var moveType = arrMoves[2].moveType;

                        var dmgResult = damageCalc(
                          allyAttack,
                          movePower,
                          enemyDef,
                          allyType,
                          enemyType,
                          moveType
                        );

                        processHealt(dmgResult);
                        handleClickLog(name, arrMoves[2].nameEsp, dmgResult);
                      } else {
                        console.log("Desactivated");
                      }
                    }}
                  >
                    {arrMoves[2].nameEsp}
                  </button>
                </Tooltip>
                <Tooltip
                  disableFocusListener
                  title={arrMoves[3].description}
                  placement="right"
                >
                  <button
                    key={2}
                    type="button"
                    className={conVida ? "m-2 boton" : "m-2 botonDes"}
                    onClick={() => {
                      if (conVida) {
                        var allyAttack = attack;
                        var movePower = arrMoves[3].power;
                        var enemyDef = pokemonEnemy[0].defense;
                        var allyType = type;
                        var enemyType = pokemonEnemy[0].type;
                        var moveType = arrMoves[3].moveType;

                        var dmgResult = damageCalc(
                          allyAttack,
                          movePower,
                          enemyDef,
                          allyType,
                          enemyType,
                          moveType
                        );

                        processHealt(dmgResult);
                        handleClickLog(name, arrMoves[3].nameEsp, dmgResult);
                      } else {
                        console.log("Desactivated");
                      }
                    }}
                  >
                    {arrMoves[3].nameEsp}
                  </button>
                </Tooltip>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
};

export default ButtonSpace;
