import React, { useRef, useEffect } from "react";

interface CountUpNumberProps {
    number: string
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
    number
}) => {
    const numberRef = useRef<HTMLSpanElement | null>(null);

    
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCountUp();
        }
      });
    });

    observer.observe(numberRef.current as unknown as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateCountUp = () => {
    let start = 0;
    const end = parseInt(number, 10);
    const duration = 3000; // Animation duration in milliseconds
    const step = Math.floor(duration / end);
    const increment = Math.ceil(end / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      if (numberRef.current) {
        numberRef.current.innerText = start.toLocaleString();
      }
    }, step);
  };

  return <span ref={numberRef} className="text-red-500 font-bold"></span>;
}

export default CountUpNumber