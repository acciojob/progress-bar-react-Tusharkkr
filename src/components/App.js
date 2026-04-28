
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  let [inc, setInc] = useState(0)
  let [obj, setObj] = useState({ width: '0%' })

  function increment() {
    setObj({ ...obj, width: `${inc}%` })
  }

  useEffect(() => {
    setTimeout(() => {
      if (inc < 100) {
        setInc(+inc + +1)
        increment()
      }
    },100)
  }, [inc])


  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="container" id="barOuter">
        <div className="inner" id="barInner" style={obj}></div>
      </div>
      <p>{inc}%</p>
    </div>
  )
}

export default App
