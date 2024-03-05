import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color, width: "100vw", height: "70vh"}}></div>
      <button className='red-button' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>red color</button><br/>
      <button className='red-button' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>yellow color</button><br/>
      <button className='red-button' style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange color</button><br/>
      <button className='red-button' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue color</button><br/>
      <button className='red-button' style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>brown color</button><br/>
    </>
  )
}

export default App
