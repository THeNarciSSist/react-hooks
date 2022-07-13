import "./App.css"
import React, { useEffect, useState } from "react"

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>{width}</div>
      </header>
    </div>
  )
}

export default App
