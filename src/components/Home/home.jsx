import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for styling
import logo from '../../assets/logo.png';
// Import images directly
import image1 from '../../assets/mens/c-1.jpeg';
import image2 from '../../assets/mens/c-2.jpeg';
import image3 from '../../assets/mens/c-3.jpeg';
import image4 from '../../assets/mens/c-4.jpeg';
import image5 from '../../assets/mens/c-5.jpeg';
import image6 from '../../assets/mens/c-6.jpeg';
import image7 from '../../assets/mens/c-7.jpeg';
import image8 from '../../assets/mens/c-8.jpeg';
import image9 from '../../assets/mens/c-9.jpeg';

import image1Ladies from '../../assets/ladies/L-3.jpeg';
import image2Ladies from '../../assets/ladies/L-4.jpeg';
import image3Ladies from '../../assets/ladies/L-5.jpeg';
import image4Ladies from '../../assets/ladies/L-6.jpeg';
import image5Ladies from '../../assets/ladies/L-7.jpeg';
import image6Ladies from '../../assets/ladies/B-1.jpeg';
import image7Ladies from '../../assets/ladies/B-2.jpeg';
import image8Ladies from '../../assets/ladies/B-3.jpeg';

import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation component

// Create arrays of images
const imagesMens = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const imagesLadies = [
  image1Ladies,
  image2Ladies,
  image3Ladies,
  image4Ladies,
  image5Ladies,
  image6Ladies,
  image7Ladies,
  image8Ladies,
];

const Home = () => {
  const [currentIndexMen, setCurrentIndexMen] = useState(0);
  const [currentIndexLadies, setCurrentIndexLadies] = useState(0);

  return (
    <div className="home">
      <img src={logo} alt="EAGLE-TAILOR Logo" className="brand-logo" />
      <h1 className="brand-name">WELCOME</h1>

      {/* Typing animation */}
      <p className="brand-description">
        <TypeAnimation
          sequence={[
            "With more than 20 years of experience", // First sentence
            1000, // Pause before the next sentence
            "Specialist in Coats", // Second sentence
            1000, // Pause before the next sentence
            "Perfect Fit Steaching", // Third sentence
            1000, // Pause before restarting
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </p>

      <section className="collection">
        <h2>Men's Collection</h2>
        <div className="slider">
          <div className="image-wrapper">
            <div className="image-container" style={{ transform: `translateX(-${currentIndexMen * 220}px)` }}>
              {imagesMens.map((image, index) => (
                <img key={index} src={image} alt="Men's Collection" className="slide-image" />
              ))}
            </div>
          </div>
          <div className="arrow-container">
            <button
              onClick={() => setCurrentIndexMen((prevIndex) => (prevIndex === 0 ? imagesMens.length - 1 : prevIndex - 1))}
              className="arrow arrow-left"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentIndexMen((prevIndex) => (prevIndex + 1) % imagesMens.length)}
              className="arrow arrow-right"
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      <section className="collection">
        <h2>Ladies' Collection</h2>
        <div className="slider">
          <div className="image-wrapper">
            <div className="image-container" style={{ transform: `translateX(-${currentIndexLadies * 220}px)` }}>
              {imagesLadies.map((image, index) => (
                <img key={index} src={image} alt="Ladies' Collection" className="slide-image" />
              ))}
            </div>
          </div>
          <div className="arrow-container">
            <button
              onClick={() => setCurrentIndexLadies((prevIndex) => (prevIndex === 0 ? imagesLadies.length - 1 : prevIndex - 1))}
              className="arrow arrow-left"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentIndexLadies((prevIndex) => (prevIndex + 1) % imagesLadies.length)}
              className="arrow arrow-right"
            >
              ❯
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
