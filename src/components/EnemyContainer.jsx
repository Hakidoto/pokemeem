import React,{useEffect} from 'react'
import ModalEnemy from './ModalEnemy'


const EnemyContainer = ({pokemonEnemy, hpBarEnemy, HpEnemy, barColor, conVida}) => {
  

  return (
    <div className="enemyContainer">
      {  
        pokemonEnemy.map(({ name, hp,id,img, attack, type, defense, speed, atkEsp, defEsp,}) => (
          <div key={0}>
          <div key={1} className="progress lifeBar">
            <div key={2} className={`progress-bar ${barColor} vidaBarra`} role="progressbar" aria-label="Basic example" style={{width: `${hpBarEnemy}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
            {
              (conVida)?
              <>
                <img
                key={3}
                className="enemy"
                src={`https://play.pokemonshowdown.com/sprites/ani-shiny/${name}.gif`} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                alt="pkmnEnemy"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                />
              </>:
              <>
              <img
                key={4}
                className="enemyDown"
                src={img} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                alt="pkmnEnemy"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                />
              </>
            }
            
          <ModalEnemy key={5} name={name} hp={hp} img={img} attack={attack} type={type} defense={defense} speed={speed} atkEsp={atkEsp} defEsp={defEsp}/>
          <p key={6} className='mt-2'>{HpEnemy}</p>
          </div>
        
      ))}
    </div>
  )
}

export default EnemyContainer