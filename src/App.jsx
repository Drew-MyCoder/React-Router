import './App.css'
import { Home, Abouts } from './Pages/Test'
import { Routes, Route, Link } from "react-router-dom"
import "../src/Pages/Server"
import { Vans } from './Pages/Vans'
import { VanDetail } from './Pages/vanDetail'



function App() {

  return (
    <> <header>
    <Link className='site-logo' to='/'>#VANLIFE</Link>
<nav className='nav-elements'>
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
</nav>
</header><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes></>
  )
}

export default App
