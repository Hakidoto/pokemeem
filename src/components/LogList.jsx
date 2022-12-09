import React from 'react'

const LogList = ({pokemon}) => {
  return (
    <div className="contentLogContent">
      {pokemon.map(({ name, moves }) => (
      <div className="overflow-auto logList">
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
        <p>{name} ataco a pokemon2 con {moves[0].replace("-", " ")} </p>
      </div>
      ))}
    </div>
  )
}

export default LogList