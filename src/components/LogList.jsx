import React,{useState} from 'react'

/* Componente que almacena la informacion de combate, este de momento despliega el nombre del pokemon aliado
y enemigo, el movimiento usado y el daño infligido. */

const LogList = ({log, enemyName, conVida}) => {
  let i = 0;
  
  const lastLogItemRef = React.useRef(null);
  
  React.useEffect(() => {
    if (lastLogItemRef.current) {
      lastLogItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log]);
  return (
    <div className="contentLogContent">
      <div className='overflow-auto logList'>
        <ul className='list-group border'>
        {log.map((item, index) => (
        <li ref={lastLogItemRef} className={`list-group-item ${conVida && index === log.length - 1 ? 'bg-primary bg-transition' : index !== log.length - 1 ? 'bg-dark bg-transition' : 'bg-success bg-transition'} text-light m-1`} key={i++}>
          {conVida || index !== log.length - 1 ? `${item.name} atacó a ${enemyName} con ${item.moves} inflingiendo ${item.damage} de daño` : `${item.name} derroto a ${enemyName}`}
        </li>
      ))}
        </ul>
      </div>
    </div>
  )
}
export default LogList