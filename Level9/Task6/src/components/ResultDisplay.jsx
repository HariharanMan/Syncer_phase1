import React from 'react';

const ResultDisplay = React.memo(({ primes }) => {
  return (
    <div className="results">
      <h3>Primes up to given limit:</h3>
      <p>Total: {primes.length}</p>
      <div className="scroll-box">
        {primes.map((prime, index) => (
          <span key={index}>{prime}, </span>
        ))}
      </div>
    </div>
  );
});

export default ResultDisplay;
