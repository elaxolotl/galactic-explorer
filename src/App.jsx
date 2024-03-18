import { useState } from 'react'
import background from './assets/landing-page-background.svg'
import logo from './assets/StarLogo.svg'
import './App.css'

//nav//

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo}></img>
        </li>
        <li>
          About Us
        </li>
        <li>
          Services        
        </li>
        <li>
          Destinations        
        </li>
        <li>
          Contact Us          
        </li>
      </ul>
    </nav>
  )
}

function App() {

  return (
    <div className='app'>
      <Nav />
    </div>
  )
}

export default App
