import { useState, useEffect } from 'react';

function useWindowResize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export default useWindowResize;
