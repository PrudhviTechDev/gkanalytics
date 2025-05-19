import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Using 'auto' instead of 'smooth' for immediate scrolling
    });
    
    // Also reset the scroll position of the main content container
    const contentContainer = document.querySelector('.flex-1.overflow-auto');
    if (contentContainer) {
      contentContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}