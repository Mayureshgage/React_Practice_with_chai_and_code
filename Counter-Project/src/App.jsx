import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let addCounter = () => {
    count < 20 ? setCount(count + 1) : setCount(20);
  }

  let removeCounter = () => {
    count > 0 ? setCount(count - 1) : setCount(0)
  }

  return (
    <>
      <h1>Counter project</h1>
      <h3>{count}</h3>
      <button onClick={addCounter}>Add counter</button><br/>
      <button onClick={removeCounter}>remove counter</button>
    </>
  )
}

export default App
