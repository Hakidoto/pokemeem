import React from 'react'
import ModalEnemy from './ModalEnemy'


const EnemyContainer = ({pokemonEnemy, hpBarEnemy, HpEnemy, barColor, conVida, enemyName}) => {
  
  hpBarEnemy = Math.round(hpBarEnemy);
  let enemyNameCapitalized = enemyName.charAt(0).toUpperCase() + enemyName.slice(1);
  return (
    <div className="enemyContainer">
      {  
        pokemonEnemy.map(({ name, hp,id,img, attack, type, defense, speed, atkEsp, defEsp}) => (
          <div key={0}>

            <div className='contentHpBar'>
              <div className='border contentHpBarContent'>
                <div className='text-start nombreBar' >{enemyNameCapitalized}</div>
                <div className='d-flex lifeBarContainer '>
                  <div key={1} className="progress lifeBar">
                    <div key={2} className={`progress-bar ${barColor} `} role="progressbar" aria-label="Basic example" style={{width: `${hpBarEnemy}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='porcentageBar mx-3'> HP</div>
                </div>
                <div className={(HpEnemy===0)?'my-1 text-start mx-1 text-danger nombreBarDerrotado' : 'text-end mx-4 nombreBar'} >{(HpEnemy ===0)?`${name.charAt(0).toUpperCase() + name.slice(1)} derrotado` : HpEnemy + "/" + hp}</div>
              </div>
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
              </>
              :
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
            
          <ModalEnemy name={name} hp={hp} img={img} attack={attack} type={type} defense={defense} speed={speed} atkEsp={atkEsp} defEsp={defEsp}/>
          </div>
        
      ))}
    </div>
  )
}

export default EnemyContainer