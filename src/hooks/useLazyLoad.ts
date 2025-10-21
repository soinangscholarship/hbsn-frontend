import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'sunshine';
  delay?: number;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    animationType = 'fadeIn',
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  const getAnimationClass = () => {
    if (!isVisible) return `lazy-${animationType}`;
    return `lazy-${animationType} lazy-${animationType}-visible`;
  };

  return {
    ref: elementRef,
    isVisible,
    hasAnimated,
    animationClass: getAnimationClass()
  };
};
