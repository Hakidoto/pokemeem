import React from 'react'

const AllyContainer = ({pokemon}) => {
  return (
    <div className="allyContainer">
        {pokemon.map(({ name,hp,id }) => (
          <>
            <div className="progress lifeBar">
                <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
            key={id} 
            className="ally"
            src={`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${name}.gif`}
            alt="pkmAlly"
            />
            <p>{hp}</p>
          </>
        
        ))}
    </div>
  )
}

export default AllyContainer