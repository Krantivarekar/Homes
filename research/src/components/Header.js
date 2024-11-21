import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Research in India</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Sign In</button>
        <button style={styles.button}>Register</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor: '#333',
    color: '#fff',
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
    fontSize: '16px',
  },
};

export default Header;
