import React from 'react'
import ModalAlly from './ModalAlly'


const AllyContainer = ({pokemon}) => {
  
  return (
    <div className="allyContainer">
        {pokemon.map(({ name, hp,id,img, attack, type, defense, speed, atkEsp, defEsp }) => (
          <div key={0}>
            <div className='contentHpBar'>
              <div className='border contentHpBarContent'>
                <div className='text-start nombreBar' >{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                <div className='d-flex lifeBarContainer '>
                  <div key={1} className="progress lifeBar">
                    <div key={2} className='progress-bar bg-success' role="progressbar" aria-label="Basic example" style={{width: `100%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='porcentageBar mx-3'> HP</div>
                </div>
                <div className='text-end mx-4 nombreBar' >{hp+"/"+hp}</div>
              </div>
            </div>
            <img
            key={id} 
            className="ally"
            src={`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${name}.gif`}
            alt="pkmAlly"
            data-bs-toggle="modal" data-bs-target="#staticBackdrop2"
            />
            <ModalAlly name={name} hp={hp} img={img} attack={attack} type={type} defense={defense} speed={speed} atkEsp={atkEsp} defEsp={defEsp} />
          </div>
        ))}
    </div>
  )
}

export default AllyContainer