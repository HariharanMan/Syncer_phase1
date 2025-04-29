import React, { useState, useMemo, useCallback } from 'react';
import ResultDisplay from './ResultDisplay';

function PrimeCalculator() {
  const [limit, setLimit] = useState(1000);
  const [inputValue, setInputValue] = useState(1000);

  // Expensive prime number calculation
  const primes = useMemo(() => {
    const result = [];
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) result.push(num);
    }
    return result;
  }, [limit]);

  const handleInputChange = useCallback((e) => {
    setInputValue(Number(e.target.value));
  }, []);

  const handleCalculate = useCallback(() => {
    setLimit(inputValue);
  }, [inputValue]);

  return (
    <div className="centered">
      <h2>Prime Number Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter limit"
      />
      <button onClick={handleCalculate}>Calculate Primes</button>

      <ResultDisplay primes={primes} />
    </div>
  );
}

export default PrimeCalculator;
