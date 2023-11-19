import "./StartScreen.css"
import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Start</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen