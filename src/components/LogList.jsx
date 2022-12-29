import React,{useEffect, useRef} from 'react'

/* Componente que almacena la informacion de combate, este de momento despliega el nombre del pokemon aliado
y enemigo, el movimiento usado y el daño infligido. */
const LogList = ({log, conVida, conVidaAlly}) => {
  let i = 0;

  // Crea una referencia al último elemento de la lista
  const lastLogItemRef = useRef(null);

  // Ejecuta una función cada vez que se agrega un nuevo log
  useEffect(() => {
    // Si existe la referencia al último elemento de la lista, hace scroll hasta él
    if (lastLogItemRef.current) {
      lastLogItemRef.current.scrollBehavior({ behavior: "smooth" });
    }
  }, [log]);

  return (
    <div className="contentLogContent">
      <div className='overflow-auto logList border'>
        <ul className='list-group'>
        {log.map((item, index) => (
        // Asigna la referencia al último elemento de la lista al elemento actual
        <li ref={lastLogItemRef} className={`list-group-item ${conVida && index === log.length - 1 ? 'bg-primary bg-transition' : index !== log.length - 1 ? 'bg-dark bg-transition' : 'bg-success bg-transition'} text-light m-1`} key={i++}>
          {(conVida && conVidaAlly) || index !== log.length - 1 ? `${item.name.charAt(0).toUpperCase() + item.name.slice(1)} atacó a ${item.target.charAt(0).toUpperCase() + item.target.slice(1)} con ${item.moves} inflingiendo ${item.damage} de daño` : `${item.name} derroto a ${item.target}`}
        </li>
      ))}
        </ul>
      </div>
    </div>
  )
}
export default LogList
