import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedCounterProps {
  /**
   * The final number to count up to
   */
  end: number;
  /**
   * The starting number (defaults to 0)
   */
  start?: number;
  /**
   * Animation duration in milliseconds
   */
  duration?: number;
  /**
   * Delay before starting animation in milliseconds
   */
  delay?: number;
  /**
   * Text or symbol to show after the number
   */
  suffix?: string;
  /**
   * Text or symbol to show before the number
   */
  prefix?: string;
  /**
   * Number of decimal places to show
   */
  decimals?: number;
  /**
   * Custom formatter function for the number
   */
  formatter?: (value: number) => string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Label text to display below the counter
   */
  label?: string;
  /**
   * Description text to display below the label
   */
  description?: string;
  /**
   * Easing function name
   */
  easing?: 'linear' | 'easeOut' | 'easeInOut';
}

const easingFunctions = {
  linear: (t: number) => t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 4),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
};

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2500,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  formatter,
  className = '',
  label,
  description,
  easing = 'easeOut',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const formatNumber = useCallback((value: number) => {
    if (formatter) return formatter(value);
    return value.toFixed(decimals);
  }, [formatter, decimals]);

  const animate = useCallback((currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);
    
    const currentValue = start + (end - start) * easedProgress;
    setCount(currentValue);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
      setHasAnimated(true);
    }
  }, [start, end, duration, easing]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timeoutId = setTimeout(() => {
        startTimeRef.current = undefined;
        animationRef.current = requestAnimationFrame(animate);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isVisible, hasAnimated, delay, animate]);

  return (
    <div 
      ref={elementRef}
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className={`text-center ${className}`}>
        <div className="flex items-center justify-center space-x-1">
          {prefix && <span className="text-blue-600">{prefix}</span>}
          <span className="tabular-nums font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {formatNumber(count)}
          </span>
          {suffix && <span className="text-blue-600">{suffix}</span>}
        </div>
        {label && (
          <h3 className="text-xl font-semibold text-gray-900 mt-2">{label}</h3>
        )}
        {description && (
          <p className="text-gray-600 mt-1 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}