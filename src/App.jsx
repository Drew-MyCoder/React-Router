import './App.css'
import { Home, Abouts } from './Pages/Test'
import { Routes, Route } from "react-router-dom"

function App() {

  return (

    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Abouts />} />
    </Routes>
  )
}

export default App
