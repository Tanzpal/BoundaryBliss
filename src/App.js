import React, { useState } from "react";
import "./App.css";
import logo from "./images/LogoBoundryBliss.png";
import Carousel from "./Components/carousel";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="Logo" />

        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>

        <nav className={menuOpen ? "Navbar open" : "Navbar"}>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="Home">
        <div className="home-text">
          <h1>
            Something to <br /> add here
          </h1>
        </div>
      </section>

      <Carousel />
    </div>
  );
}

export default App;
