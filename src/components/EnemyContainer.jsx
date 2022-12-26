import React from 'react'
import ModalEnemy from './ModalEnemy'

/* Componente que almacena los datos con las imagenes, barra de vida y otros datos del pokemon
enemigo, este proporciona el className para diseñar los componentes mencionados anteriormente.
Y a su vez, muestra un modal al hacer click sobre el pokemon enemigo. */

const EnemyContainer = ({pokemonEnemy, hpBarEnemy, HpEnemy, barColor, conVida, enemyName}) => {
  const getBackgroundColor = (type) => {
    switch (type) {
      case 'fire':
        return '#A04000';
      case 'grass':
        return '#145A32';
      case 'water':
        return '#1B4F72';
      case 'electric':
        return '#F4D03F';
      case 'psychic':
        return '#BF00C8';
      case 'ice':
        return '#5EFFF5';
      case 'dragon':
        return '#5E0063';
      case 'dark':
        return '#886547';
      case 'rock':
        return '#A04000';
      case 'fairy':
        return '#FCBDFF';
      case 'normal':
        return '#616754';
      case 'fighting':
        return '#A22624';
      case 'fliying':
        return '#BC7CE8';
      case 'poison':
        return '#754894';
      case 'ground':
        return '#A3864A';
      case 'bug':
        return '#79A34A';
      case 'ghost':
        return '#746386';
      case 'steel':
        return '#91839A';
      // Agrega más casos para los demás tipos de Pokémon
      default:
        return 'rgb(63, 62, 61)';
    }
  }

  hpBarEnemy = Math.round(hpBarEnemy);
  let enemyNameCapitalized = enemyName.charAt(0).toUpperCase() + enemyName.slice(1);
  return (
    <div className="enemyContainer">
      {  
        pokemonEnemy.map(({ name, hp,id,img, attack, type, defense, speed, atkEsp, defEsp}) => (
          <div key={0}>

            <div className='contentHpBar' style={{ backgroundColor: getBackgroundColor(type) }}>
              <div className='border contentHpBarContent'>
                <div className='text-start nombreBar' >{enemyNameCapitalized}</div>
                <div className='d-flex lifeBarContainer ' >
                  <div key={1} className="progress lifeBar">
                    <div key={2} className={`progress-bar ${barColor} `} role="progressbar" aria-label="Basic example" style={{width: `${hpBarEnemy}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='porcentageBar mx-3'> HP</div>
                </div>
                <div className="row g-0 text-center border ">
                  <div className="col-sm-6 col-md-5 tipoPoke" style={{ backgroundColor: getBackgroundColor(type) }}>{type}</div>
                  <div className="col-6 col-md-7 border ">
                  <div className={(HpEnemy===0)?'my-1 text-start mx-1 text-danger nombreBarDerrotado' : 'text-end mx-4 nombreBar'} >{(HpEnemy ===0)?`${name.charAt(0).toUpperCase() + name.slice(1)} derrotado` : HpEnemy + "/" + hp}</div>
                  </div>
                </div>
                
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

//