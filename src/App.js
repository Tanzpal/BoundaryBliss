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
          <p className="Para-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Soluta, molestias repudiandae pariatur.
          </p>
          <button className="Btn-BookTickets">Book Tickets</button>
        </div>
      </section>
      <Carousel />

      <section className="Headline">
        <div className="Headline-text">
          <h1 className="Head-text">TITLE HEADLINE</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
