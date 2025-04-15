import React, { useState } from "react";
import "./App.css";
import logo from "./images/LogoBoundryBliss.png";
import Carousel from "./Components/carousel";
import Cricket from "./images/Cricket-card.jpg";
import Football from "./images/Football-card.jpg";
import pickelball from "./images/pickelball-card.jpg";
import TurfInterior from "./images/Turf-Interior.jpg";

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
              the more obscure Latin words, consectetur,
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

      <section className="Cards-Main">
        <div className="container">
          <div className="card">
            <img src={Cricket} alt="" />
            <div className="intro">
              <h1>Cricket</h1>
              <p>
                the <span>cricket</span> Now is the winter of our discontent
                Made glorious summer by this sun of York; And all the clouds
                that lour'd upon our house In the deep bosom of the ocean
                buried.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={Football} alt="" />
            <div className="intro">
              <h1>Football</h1>
              <p>
                the <span>football</span> brings together nations in a
                celebration of speed, skill, and passion. With every kick, the
                crowd roars, uniting under one goal. Football is more than a
                sport—it's a global language.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={pickelball} alt="" />
            <div className="intro">
              <h1>Pickelball</h1>
              <p>
                the <span>pickleball</span> is a game of finesse and fun, where
                tennis meets table tennis with a dash of badminton. Fast-paced,
                engaging, and perfect for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Information-Ground">
        <div className="Grid-Container">
          <div className="First-Grid">
            <div className="Image">
              <img src={TurfInterior} alt="" />
            </div>
            <div>
              <h1 className="Interior-Heading">Turf-Interior</h1>
              <p className="Text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil)
              </p>
            </div>
          </div>
          <div className="Second-Grid">
            <div>
              <h1 className="Interior-Heading">Turf-Interior</h1>
              <p className="Text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil)
              </p>
            </div>
            <div className="Image-interior">
              <img src={TurfInterior} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
