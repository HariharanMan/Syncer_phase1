import React, { useState } from 'react';

const ToggleContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleText} style={styles.button}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>

      {isVisible && (
        <div style={styles.textBox}>
          <p>This is the toggled content!</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  textBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#222',
    color: '#f5f5f5',
    borderRadius: '8px',
    display: 'inline-block',
  },
};

export default ToggleContent;
