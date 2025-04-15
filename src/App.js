import React, { useState } from "react";
import "./App.css";
import logo from "./images/LogoBoundryBliss.png";
import Carousel from "./Components/carousel";
import Cards from "./Components/Cards";

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
        <div className="Home-txt">
          <div className="Headline-Txt">
            <h1>
              Something to <br /> be here
            </h1>
          </div>
          <div className="Head-txt">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil)
              <br />
              <button className="home-btn">Click me</button>
            </p>
          </div>
        </div>
      </section>
      <Carousel />

      <section className="Imp-Headline">
        <div className="Headings-container">
          <div className="Headings-txtMain">
            <h1 className="Headings">The Headline</h1>
            <p className="Headings-txt">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil)
            </p>
          </div>
        </div>
      </section>

      <Cards />
    </div>
  );
}

export default App;
