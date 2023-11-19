import { useState, useCallback, useEffect } from 'react'
import './App.css'
import { wordsList } from "./data/words"
import StartScreen from './components/StartScreen'
import Game from './components/game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)

  return (
    <>
      <div>
        {gameStage === "start" && <StartScreen />}
        {gameStage === "game" && <Game/>}
        {gameStage === "end" && <GameOver/>}
        
      </div>
    </>
  )
}

export default App
