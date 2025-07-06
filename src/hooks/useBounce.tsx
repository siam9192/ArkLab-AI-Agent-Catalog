import { useState, useEffect } from "react";

function useBounce<T>(value: T, delay = 500): T {
  const [bouncedValue, setBouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return bouncedValue;
}

export default useBounce;
