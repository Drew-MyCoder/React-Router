import React from 'react'
import { Link } from "react-router-dom"
import Image from '../assets/bgImg.png'
import Image54 from '../assets/image54.png'

export const Home = () => {

    const divStyle ={
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh'
    }
  return (
    <>
    <NavBar />
    <section style={divStyle}>
            <div className="hero">
            <h2 className='text'>You got the travel plans, we got the travel vans.</h2>
            <div className='below'>
            <p className='body-text'> 
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <button className='btn'>
            Find your van
            </button>
            </div>
            </div>
          </section>
         <Footer />
         </>
  )
}


export function NavBar () {
    return (
        <header>
              <Link className='site-logo'>#VANLIFE</Link>
          <nav className='nav-elements'>
              <Link to="/about">About</Link>
          </nav>
      </header>
    )
}

export function Footer() {
    return (
        <div className='bottom'>
        <footer > 
              <Link to="/"><p>Ⓒ 2022 #VANLIFE</p></Link>
        </footer>
        </div>
    )
}


export const Abouts = () => {
    return (
    <div className="container">
        <NavBar />
    <div >
        <img src={Image54} alt="" className="imgContainer" /> 
    </div>
    <section>
        <div className="hero">
        <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
    <div className="">
        <p className='txt'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    </div>
    </div>
    
    </section>
    <div className="sep">
        <p className='txt-2'>Your destination is waiting.
Your van is ready.</p>
        <div className="blk-cont">
        <button className='blk-btn'>
        Explore our vans
        </button>
        </div>
    </div>
    <Footer />
    </div>
    )
}

