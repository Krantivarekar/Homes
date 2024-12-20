import React from 'react';
import Logo from '../assets/images/sus logo.svg';
import { Link } from 'react-router-dom';  // Adjust the path as per your project structure.

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={Logo} alt="StartUpSphere Logo" style={styles.logo} />
      <div style={styles.buttonContainer}>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button style={styles.button}>Sign In</button>
        </Link>
        <Link href="/register" style={{ textDecoration: 'none' }}>
          <button style={styles.button}>Register</button>
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 35px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    height: '60px', // Adjust height to fit your design
    width: 'auto',  // Maintain aspect ratio
    padding:"2px",
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
