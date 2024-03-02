import { useEffect, useState, useRef } from "react";

export function useThrottle<T>(value: T, interval: number = 250): T {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastUpdated = useRef<number | null>(null);
  
    useEffect(() => {
      const now = Date.now();
  
      if (lastUpdated.current && now >= lastUpdated.current + interval) {
        lastUpdated.current = now;
        setThrottledValue(value);
      } else {
        const id = setTimeout(() => {
          lastUpdated.current = now;
          setThrottledValue(value);
        }, interval);
  
        return () => clearTimeout(id);
      }
    }, [value, interval]);
  
    return throttledValue;
}
