import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details'

function App() {
  const [Toggle, setToggle] = useState("dark")

  const handleToggle = () => {
    setToggle(Toggle == "dark" ? " " : "dark")
  }
  return (
    <div className={`App ${Toggle}`}>
      <Navigation handleToggle={handleToggle} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Details/:name" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
