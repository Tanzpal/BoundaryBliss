import React from "react";
import "./Cards.css";
import Cricket from "../images/Cricket-card.jpg";
import Football from "../images/Football-card.jpg";
import pickleball from "../images/pickelball-card.jpg";

const Cards = () => {
  return (
    <div className="container">
      <div className="card">
        <img src={Cricket} alt="" />
        <div className="intro">
          <h1>Cricket</h1>
          <p>
            the <span>cricket</span> Now is the winter of our discontent Made
            glorious summer by this sun of York; And all the clouds that lour'd
            upon our house In the deep bosom of the ocean buried. Now are our
            brows bound with victorious wreaths; Our bruised arms hung up for
            monuments;
          </p>
        </div>
      </div>

      <div className="card">
        <img src={Football} alt="" />
        <div className="intro">
          <h1>Football</h1>
          <p>
            the <span>football</span> brings together nations in a celebration
            of speed, skill, and passion. With every kick, the crowd roars,
            uniting under one goal. Football is more than a sport—it's a global
            language.
          </p>
        </div>
      </div>

      <div className="card">
        <img src={pickleball} alt="" />
        <div className="intro">
          <h1>Pickleball</h1>
          <p>
            the <span>pickleball</span> is a game of finesse and fun, where
            tennis meets table tennis with a dash of badminton. Fast-paced,
            engaging, and perfect for all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
