import React, { useState, useEffect } from 'react';

// Importing images for the gallery
import slide_image_1 from '../assets/images/gallery/annie-spratt-hCb3lIB8L8E-unsplash (1).jpg';
import slide_image_2 from '../assets/images/gallery/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import slide_image_3 from '../assets/images/gallery/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import slide_image_4 from '../assets/images/gallery/brooke-cagle--uHVRvDr7pg-unsplash.jpg';
import slide_image_5 from '../assets/images/gallery/campaign-creators-gMsnXqILjp4-unsplash (1).jpg';
import slide_image_6 from '../assets/images/gallery/jose-aljovin-JZMdGltAHMo-unsplash.jpg';
import slide_image_7 from '../assets/images/gallery/marvin-meyer-SYTO3xs06fU-unsplash.jpg';

const ImageGallery = () => {
  // Array of imported images for the gallery
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7
  ];

  const [currentImages, setCurrentImages] = useState(images.slice(0, 5)); // Initial 5 images

  useEffect(() => {
    const interval = setInterval(() => {
      // Shift the images in the array
      setCurrentImages(prevImages => {
        const newImages = [...prevImages];
        newImages.push(images[(images.indexOf(prevImages[prevImages.length - 1]) + 1) % images.length]); // Add next image to right
        newImages.shift(); // Remove the leftmost image
        return newImages;
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images]);

  const getImageStyle = (i) => {
    let scale = 1;
    if (i === 2) scale = 1.5; // Larger image in the center
    return { transform: `scale(${scale})`, transition: 'transform 0.3s ease' };
  };

  return (
    <div>
      <style>{`
        .gallery-container {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
        }

        .image-slider {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .gallery-image {
          width: 100px;
          height: 100px;
          margin: 0 10px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-image:nth-child(3) {
          transform: scale(1.5); /* The center image will be larger */
        }
      `}</style>
      <div className="gallery-container">
        <div className="image-slider">
          {currentImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`gallery-img-${i}`}
              className="gallery-image"
              style={getImageStyle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
