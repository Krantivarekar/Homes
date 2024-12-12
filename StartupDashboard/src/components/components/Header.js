import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Startups in Gujrat</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Explore</button>
        <button style={styles.button}>Issues</button>
        <button style={styles.button}>Policy</button>

      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 25px',
    backgroundColor: '#f5f5f5',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    // color: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2e1e77',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default Header;
