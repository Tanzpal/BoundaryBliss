import React, { useState, useEffect } from "react";
import "./Carousel.css";
import image1 from "../images/Football.jpeg";
import image2 from "../images/Cricket.jpeg";
import image3 from "../images/download.jpeg";

const images = [image1, image2, image3];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="carousel-image"
      />
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
