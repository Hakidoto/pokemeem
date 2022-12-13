import React from 'react'

const LogList = ({pokemon, log}) => {
  let i = 0;

  // Crea una referencia al último elemento del log
  const lastLogItemRef = React.useRef(null);

  // Cuando se agregue un elemento al log, usa la función scrollIntoView en la referencia del último elemento
  React.useEffect(() => {
    if (lastLogItemRef.current) {
      lastLogItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log]);

  return (
    <div className="contentLogContent">
      <div className='overflow-auto logList'>
        <ul className='list-group border'>
          {log.map(item => (
            <li ref={lastLogItemRef} className='list-group-item bg-dark text-light m-1' key={i++}>
            {item.name} ataco a "{pokemon && pokemon.name}" con {item.moves} causando "" de daño
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LogList