import { useRef, useEffect } from 'react';

function useIntersectionObserver(callback, options) {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    }, options);

    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
}

export default useIntersectionObserver;
