/* helper encargado del procesamiento de daño al utilizar un movimiento,
esta recibe los parametros que obtenemos del API (stats del movimiento y del pokemon aliado/rival) y retorna
un valor numerico que se utilizara para reducir la vida del pokemon afectado. */

import { typeData } from "./typeData";

export const damageCalc = (
  allyAttack,
  movePower,
  enemyDef,
  allyType,
  enemyType,
  moveType
) => {
  //todo: terminar de asignar estas weas, hacer la validacion del weak resist,
  // calcular critico, pasar variables desde pokemon/move api
  var level = 10;
  var attackStat = allyAttack;
  var attackPower = movePower;
  var defenseStat = enemyDef;
  var weakResist = weakResistCalc(moveType, enemyType);
  var stab = moveType === allyType ? 1.5 : 1.0;
  var randomNumber = Math.floor(Math.random() * 15 + 1);

  let result = Math.floor(
    (((2 * level + 10) / 250) * (attackStat / defenseStat) * attackPower + 2) *
      stab *
      weakResist *
      ((randomNumber + 85) / 100)
  );

  console.log(result);
  return result;
};

const weakResistCalc = (moveType, enemyType) => {

  if (typeData[moveType].attack.double.includes(enemyType)) {
    return 2;
  } else if (typeData[moveType].attack.half.includes(enemyType)) {
    return 0.5;
  } else if (typeData[moveType].attack.zero.includes(enemyType)) {
    return 0;
  }
  else
    return 1;
};
