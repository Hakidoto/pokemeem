import React from 'react'

const EnemyContainer = ({pokemonEnemy, hpBarEnemy, HpEnemy}) => {
  return (
    <div className="enemyContainer">
                {  
                  pokemonEnemy.map(({ name, hp,id }) => (
                    <>
                    <div className="progress lifeBar">
                      <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{width: `${hpBarEnemy}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      <img
                      key={id}
                      className="enemy"
                      src={`https://play.pokemonshowdown.com/sprites/ani-shiny/${name}.gif`} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                      alt="pkmnEnemy"
                    />
                    <p>{HpEnemy}</p>
                    </>
                  
                ))}
                </div>
  )
}

export default EnemyContainer