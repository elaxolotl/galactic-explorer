import background from './assets/landing-page-background.svg'
import logo from './assets/StarLogo.svg'
import logoPurple from './assets/StarLogo-purple.svg'
import heroVideo from './assets/spacewalk-video.mp4'
import './App.css'
import './mediaQueries.css'
import team1 from "./assets/team1.png"
import team2 from "./assets/team2.png"
import team3 from "./assets/team3.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import React, { useState } from 'react';
import { FaXTwitter, FaSquareFacebook, FaSquareInstagram, FaLinkedin    } from "react-icons/fa6";



//nav//

const navItems = [
  {
    name: "About Us",
    url: "#about"
  },
  {
    name: "Services",
    url: "#services"
  },
  {
    name: "Destinations",
    url: "#destinations"
  },
  {
    name: "Contact Us",
    url: "#contact"
  }
]

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href='#landing-page'><img src={logo}></img></a></li>
        {navItems.map(function (item) {
          return (
            <a href={item.url}><li>{item.name}</li></a>
          )
        })
        }
      </ul>
    </nav>
  )
}

//landing page//

function LandingPage() {
  return (
    <div id='landing-page' style={{ backgroundImage: `url(${background})` }}>
      <h1>GALACTIC EXPLORER</h1>
      <div className='btn'>
        <a href='#hero'><button>START<br></br>EXPLORING</button></a>
      </div>
    </div>
  )
}

//hero//

function Hero() {
  return (
    <div id='hero'>
      <div className='video'>
        <video autoPlay muted loop>
          <source src={heroVideo}></source>
        </video>
      </div>
      <div className='heroDescription' style={{ backgroundImage: `url(${logoPurple})` }}>
        <h2>Embark on Your Galactic Journey with Us!</h2>
        <p>Welcome to Galactic Explorer, where we turn dreams of traversing the cosmos into exhilarating realities. At Galactic Explorer, we are pioneers of space exploration, dedicated to pushing the boundaries of human exploration beyond our planet. Embark on an unforgettable journey with us as we offer unparalleled space tourism experiences, cutting-edge interstellar transportation solutions, and thrilling planetary exploration expeditions. Join us in unlocking the mysteries of the universe and discovering the wonders that lie beyond. Your adventure awaits!</p>
      </div>
    </div>
  );
}

//about//

const team = [
  {
    name: "Dr. Emily Rodriguez",
    position: "Founder & CEO",
    image: team1
  },
  {
    name: "Captain Ling Johnson",
    position: "Head of Operations",
    image: team2
  },
  {
    name: "Dr. Sophus Smith",
    position: "Lead scientist",
    image: team3
  }
]

function About() {
  return (
    <div id='about'>
      <div className='about-us'>
        <h2>ABOUT US</h2>
        <p>Welcome to Galactic Explorer, where we turn dreams of space exploration into reality. Founded in 2022, Galactic Explorer is at the forefront of pioneering interstellar travel, research, and discovery. Our mission is simple yet profound: to expand human horizons beyond the confines of Earth and unlock the mysteries of the cosmos.</p>
      </div>
      <div className='about-team'>
        <h2>MEET OUR TEAM</h2>
        <div id='team'>
          {team.map(function (item) {
            return (
              <div>
                <img src={item.image} ></img>
                <div id='text'>
                  <h3>{item.name}</h3>
                  <h4><i>{item.position}</i></h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

//services//

const services = [
  {
    name: "Space Tourism",
    image: "/space-tourism.jpeg"
  },
  {
    name: "Interstellar Research",
    image: "/interstellar-research.jpg"
  },
  {
    name: "Satellite Deployment",
    image: "/satellite-deployment.jpg"
  },
  {
    name: "Spacecraft Charter",
    image: "/spacecraft-charter.jpg"
  },

]

function Services() {
  return (
    <div id="services">
      <h2>SERVICES</h2>
      <p className='services-description'>Explore the cosmos with Galactic Explorer's range of innovative services:
      </p>
      <ul className='services-list'>
        {services.map(function (item) {
          return (
            <div>
              <li>
                <img src={item.image}></img>
                <h3>{item.name}</h3>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

//destinations//

let index = 0;

const destinations = [
  {
    name: "Mars",
    description: "Witness towering mountains and ancient river valleys.",
    image: "https://media.tenor.com/SqJHatCJ40cAAAAi/mars.gif"
  },
  {
    name: "The moon",
    description: "Witness the beauty of Earth's celestial companion, with its craters, plains, and mountains.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif"
  },
  {
    name: "Velem space station",
    description: "Experience life aboard a state-of-the-art space habitat, conducting research and enjoying panoramic views of Earth.",
    image: "https://velem.com/assets/static/images/satellite.gif?1636646917"
  }
]

function Destinations() {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  const leftButton = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1));
  };

  const rightButton = () => {
    setIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='destinations'>
      <h2>DESTINATIONS</h2>
      <p>Explore the cosmos with Galactic Explorer</p>
      <ul className='destinations-list'>
        <button onClick={leftButton}>
          <IoIosArrowBack />
        </button>
        <li>
          <img src={destination.image} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </li>
        <button onClick={rightButton}>
          <IoIosArrowForward />
        </button>
      </ul>
    </div>
  );
}

function ServicesDestinations() {
  return (
    <div id='services-destinations' style={{ backgroundImage: `url(${logoPurple})` }}>
      <Services />
      <Destinations />
    </div>
  )
}

function Contact() {
  return (
    <div id='contact'>
      <div className='placeholder'></div>
      <h1>CONTACT US</h1>
      <p>Get in touch with Galactic Explorer today!</p>
      <a href='mailto:info@galacticexplorer.com'>info@galacticexplorer.com</a>
      <p>+1 (555) 123-4567</p>
      <ul className='social-media'>
        <li><FaXTwitter /></li>
        <li><FaSquareFacebook  /></li>
        <li><FaSquareInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
    </div>
  )
} 

function Footer(){
  return(
    <footer>
      <hr></hr>
      <p>Copyright &#169; 2024 Galactic Explorer. All Rights Reserved. Reproduction in whole or in part without permission is prohibited.</p>
    </footer>
  )
}

function App() {

  return (
    <div className='app'>
      <Nav />
      <LandingPage />
      <Hero />
      <About />
      <ServicesDestinations />
      <Contact />
      <Footer />    
    </div>
  )
}

export default App
