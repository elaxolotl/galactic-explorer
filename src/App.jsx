import background from './assets/landing-page-background.svg'
import logo from './assets/StarLogo.svg'
import logoPurple from './assets/StarLogo-purple.svg'
import heroVideo from './assets/spacewalk-video.mp4'
import './App.css'
import team1 from "./assets/team1.png"
import team2 from "./assets/team2.png"
import team3 from "./assets/team3.png"

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

function Hero() {
  return (
    <div id='hero'>
      <div>
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
      <div>
        <h2>ABOUT US</h2>
        <p>Welcome to Galactic Explorer, where we turn dreams of space exploration into reality. Founded in 2022, Galactic Explorer is at the forefront of pioneering interstellar travel, research, and discovery. Our mission is simple yet profound: to expand human horizons beyond the confines of Earth and unlock the mysteries of the cosmos.</p>
      </div>
      <div>
        <h2>MEET OUR TEAM</h2>
        <div className='team-card' >
          {team.map(function (item) {
            return (
              <div>
                <img src={item.image} ></img>
                <span className='team-description'>
                  <h3>{item.name}</h3>
                  <h4>{item.position}</h4>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='app'>
      <Nav />
      <LandingPage />
      <Hero />
      <About />
    </div>
  )
}

export default App
