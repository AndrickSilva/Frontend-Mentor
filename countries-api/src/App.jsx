import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'

function App() {
  const [Toggle, setToggle] = useState("dark")

  const handleToggle = () => {
    setToggle(Toggle == "dark" ? " " : "dark")
  }
  return (
    <div className={`App ${Toggle}`}>
      <Navigation handleToggle={handleToggle}/>
      <Home />
    </div>
  )
}

export default App
