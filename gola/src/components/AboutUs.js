import React from 'react';

const Schemes = () => {
  return (
    <section id='schemes' style={styles.section}>
      <div style={styles.visionContainer}>
        <h2 style={styles.visionHeader}>Our Scheme Options</h2>
        <p style={styles.text}>
          Explore our curated schemes that include vibrant colors, calming tones, and a wide range of combinations. Whether it's for a residential or commercial space, we have something for every style and budget.
        </p>
        <div style={styles.imageGrid}>
          <img src="https://via.placeholder.com/150" alt="Scheme 1" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Scheme 2" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Scheme 3" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Scheme 3" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Scheme 3" style={styles.image} />
          <img src="https://via.placeholder.com/150" alt="Scheme 3" style={styles.image} />
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

export default Schemes;
