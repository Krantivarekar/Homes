import React from 'react';

const CounterSection = () => {
  const styles = {
    counterSection: {
      position: "relative",
      width: "85%",  
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #f0f8ff, #5abca7)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',  // 80% opacity // Light background
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
      margin: '20px auto',
      maxWidth: '900px',
    },
    counterItem: {
      textAlign: 'center',
      flex: 1,
      margin: '0 10px',
    },
    counterValue: {
      fontSize: '2rem',
      color: '#2e1e77',
      margin: '0',
    },
    counterSpan: {
      fontSize: '1.2rem',
      color: '#333',
    },
    counterLabel: {
      fontSize: '1.1rem',
      color: '#2e1e77',
      margin: '5px 0 0',
    },
  };

  return (
    <section id='our-progress'>
    <div style={styles.counterSection}>
      <div style={styles.counterItem}>
        <h2 style={styles.counterValue}>
          234+<span style={styles.counterSpan}></span>
        </h2>
        <p style={styles.counterLabel}>Fundraisers</p>
      </div>
      <div style={styles.counterItem}>
        <h2 style={styles.counterValue}>
          56+<span style={styles.counterSpan}></span>
        </h2>
        <p style={styles.counterLabel}>Raised</p>
      </div>
      <div style={styles.counterItem}>
        <h2 style={styles.counterValue}>
          234k+<span style={styles.counterSpan}></span>
        </h2>
        <p style={styles.counterLabel}>Donations</p>
      </div>
      <div style={styles.counterItem}>
        <h2 style={styles.counterValue}>
          160,527+<span style={styles.counterSpan}></span>
        </h2>
        <p style={styles.counterLabel}>Volunteers</p>
      </div>
    </div>
    </section>
  );
};

export default CounterSection;
