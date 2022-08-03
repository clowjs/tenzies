import { useState } from 'react'
import Die from './Die'
import './index.css'

function App() {

  const [dice, setDice] = useState(allNewDice())
  
    
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }
    
    const diceElements = dice.map(die => (
        <Die value={die} key={Math.random()} />
    ))
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}

export default App
