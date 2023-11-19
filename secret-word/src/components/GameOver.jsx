import React from 'react'
import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Finish</button>
    </div>
  )
}

export default GameOver