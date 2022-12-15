export const damageCalc = (enemyLvl, allyAttack, movePower, enemyDef, allyType, enemyType, moveType ) => {

    //todo: terminar de asignar estas weas, hacer la validacion del weak resist, 
    // calcular critico, pasar variables desde pokemon/move api
    var level = enemyLvl
        attackStat = allyAttack
        attackPower = movePower
        defenseStat = enemyDef
        weakResist = 
        stab =  moveType === allyType ? 1.5 : 1.0
        randomNumber = Math.floor((Math.random() * 15) +1)
    
        return Math.floor(((((2* level)+ 10)/250)* (attackStat/defenseStat) * (attackPower) + 2) * stab * weakResist * ((randomNumber+85)/100))
}