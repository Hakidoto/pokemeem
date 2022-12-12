import React from 'react'

const LogList = ({pokemon, log}) => {
  let i = 0;
  return (
    <div className="contentLogContent">
      <div className='overflow-auto logList'>
        <ul className='list-group border'>
          {log.map(item => (
            <li className='list-group-item bg-dark text-light' key={i++}>
            {item.name} ataco a "{pokemon && pokemon.name}" con {item.moves} causando "" de daño
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LogList