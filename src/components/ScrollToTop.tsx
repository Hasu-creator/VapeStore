import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Theo dõi vị trí cuộn
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Cuộn lên đầu khi thay đổi route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Theo dõi sự kiện cuộn
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.9)'
          }
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: 'white' }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;