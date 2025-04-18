import "./Toggle.css"
import "./App.css"
import Resume from "./Resume"
import Homepage from "./Homepage"
import Nav from "./Nav"
import {useState} from "react"
import { Routes,Route } from "react-router-dom"

function App() {
  const [isDark, setDark] = useState(false)

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
    <Nav isDark={isDark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={<Homepage isDark={isDark}/>}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
      </Routes>
    </div>
  )
}

export default App