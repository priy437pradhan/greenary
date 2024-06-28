import React, { useState, useEffect } from 'react';
import './scss/App.scss';

function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },5000);

    return () => clearInterval(interval);
  }, [images.length, 5000]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
}

export default MainSlider;
