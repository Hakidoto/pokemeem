import React from 'react'

const LogList = ({pokemon, log, enemyName, conVida}) => {
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
          <li ref={lastLogItemRef} className={`list-group-item ${conVida || index !== log.length - 1 ? 'bg-dark' : 'bg-success'} text-light m-1`} key={i++}>
            {conVida || index !== log.length - 1 ? `${item.name} ataco a ${enemyName} con ${item.moves} causando "" de daño` : `${item.name} derroto a ${enemyName} con ${item.moves}`}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
export default LogList