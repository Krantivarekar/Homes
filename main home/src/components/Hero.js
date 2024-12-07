import React, { useState, useEffect } from 'react';
import './Hero.css'; // Add styles for smooth horizontal sliding

// Importing images from assets folder
import slide_image_1 from '../assets/images/hero/agence-olloweb-qfp4-Ud6Fyg-unsplash.jpg';
import slide_image_2 from '../assets/images/hero/drew-hays-tGYrlchfObE-unsplash.jpg';
import slide_image_3 from '../assets/images/hero/maximalfocus-0n4jhVGS4zs-unsplash.jpg';
import slide_image_4 from '../assets/images/hero/noaa-4VLA46-_hbM-unsplash.jpg'; // Add as many as needed


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    // Add other images here as needed
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length); // Loop back to the first slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="hero-section">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
