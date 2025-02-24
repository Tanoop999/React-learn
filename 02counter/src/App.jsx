import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  // let counter = 25
  const addvalue =() =>{
    console.log('value added', Math.random())
    counter =counter +1
    setcounter(counter)
    console.log(`value added to counter: ${counter}`)
  }

  const removevalue = () =>{
    setcounter(counter -1)
  }
    return (
    <>
   <h1>chai aur react</h1> 
   <h2>Counter val: {counter}</h2>

   <button
   onClick={addvalue}>Add Value</button>
   <br /> <br />
   <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
