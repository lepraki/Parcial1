import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



const Nloteria = []

for (let i = 0; i < 3; i++){
  Nloteria.push(true)
 }


 
function App() {
  const [count, setCount] = useState(Nloteria)
  const [indexStelected, setIndexSelect] = useState("")
 

  const ImprimirN = () => {
    let copyNloteria = [...count]
    copyNloteria[indexStelected] = false;
    setCount(copyNloteria)

  }

  return (
    <div className="App">
      <h1>Chance</h1>
      <select onChange={ (e) => setIndexSelect(e.target.value)} id="">
      <option selected hidden>loteria</option>
      {
        count.map((Nloteria, index) =>(
          Nloteria ? <option>
            {index}
          </option> : <></>
        ))
      }
      </select>

      <button onClick={(e) => ImprimirN()}>Imprimir</button>

        
    </div>
  )
}

export default App
