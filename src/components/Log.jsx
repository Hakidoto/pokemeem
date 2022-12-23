import React from 'react'
import LogList from './LogList'

/* Componente que genera el esqueleto de la seccion del registro de batalla. Tambien llamada a otro componente
que muestra los datos a detalle del combate. */

const Log = ({pokemon, log, enemyName, conVida}) => {
  return (
    <div className="logg">
      <div>
        <div className="titleLog">
          <p className="">Battle log</p>
        </div>
        <div className="logContent">
          <div>
            <div className="logContentTitle">
              <p className='titlecontentLog'>Despliega el historial de acciones realizadas.</p>
            </div>
            <LogList conVida={conVida} enemyName={enemyName} pokemon={pokemon} log={log} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log