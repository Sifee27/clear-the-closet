import React from 'react';

function MinimalTest() {
  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#9370DB' }}>React is Working!</h1>
      <p>This is a minimal test component without any external dependencies.</p>
      <button 
        style={{ 
          backgroundColor: '#40B5AD',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Button clicked!')}
      >
        Test Button
      </button>
    </div>
  );
}

export default MinimalTest; 