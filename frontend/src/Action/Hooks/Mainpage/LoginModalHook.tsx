import { useState, useEffect } from 'react';

const useDetectClose = (ref: any, initialState: any) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
