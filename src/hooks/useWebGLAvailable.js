import { useEffect, useState } from 'react';

export function useWebGLAvailable() {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsAvailable(!!gl);
    } catch {
      setIsAvailable(false);
    }
  }, []);

  return isAvailable;
}
