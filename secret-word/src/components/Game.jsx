import React from 'react'
import "./Game.css"


const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
        <p className='points'>
          <span>Pontuação: 000</span>
        </p>
        <h1>Advinhe a palavra:</h1>
        <h3 className='tip'>
          Dica sobra a palavra: <span>Dica..</span>
        </h3>
        <p>Você ainda tem XX tentantivas</p>
        <div className="wordContainer">
          <span className='letter'>A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form>
            <input type="text" name='letter' maxLength="1" required/>
            <button>PLAY!</button>
          </form>
        </div>
       <div className="WrongLettersContainer">
          <p>Letras já utilizadas:</p>
          <span>a,</span>
          <span>b,</span>
       </div>
    </div>

  )
}

export default Game