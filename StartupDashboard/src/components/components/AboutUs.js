import React from 'react';

const AboutUs = () => {
  return (
    <section id='about-us' style={styles.section}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>About us</h1>
        <p style={styles.text}>
          At ColorFull, we understand the importance of color. A fresh exterior paint job improves the curb appeal of your home or business. An interior paint brings beauty and style into your everyday life. If you're thinking about selling or renting out your home or business, a great paint job can make all the difference.
        </p>
      </div>
      <div style={styles.visionContainer}>
        <h2 style={styles.visionHeader}>Our Vision</h2>
        <p style={styles.text}>
          At ColorFull, we understand the importance of color. A fresh exterior paint job improves the curb appeal of your home or business. An interior paint brings beauty and style into your everyday life.
        </p>
        <div style={styles.imageGrid}>
          <img src="https://via.placeholder.com/150" alt="Plant" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Hands" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Paint tools" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // 80% opacity // Light background
    color: '#2E1E77',
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  header: {
    fontSize: '36px',
    margin: '0',
    color: '#2E1E77',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginTop: '20px',
  },
  visionContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  visionHeader: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2E1E77',
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
};

export default AboutUs;
