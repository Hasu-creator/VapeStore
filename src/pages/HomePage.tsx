import React, { useState } from 'react';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import AgeVerificationModal from '../components/AgeVerificationModal';
import HeroBanner from '../components/HeroBanner';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import StoreFinder from '../components/MapStore';
import Footer from '../components/Footer';
import WarningAlert from '../components/WarningAlert';
import ProductLineSection from '../components/ProductLineSection';
const ECigarettePage: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleAgeVerification = () => {
    setIsAgeVerified(true);
    setIsModalOpen(false);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: '#302f2f',
        overflowY: 'scroll', // Enable vertical scrolling
        scrollSnapType: 'y mandatory', // Enable scroll snap for y-axis
      }}
    >
      <GlobalStyles
        styles={{
          'html, body': {
            margin: 0,
            padding: 0,
            overscrollBehavior: 'none',
          },
          '*::-webkit-scrollbar': {
            display: 'none'
          },
          '*': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            transition: 'none' 
          }
        }}
      />

      <CssBaseline />

      {/* Main Content */}
      <Box 
        sx={{ 
          flexGrow: 1,
          position: 'relative', 
          width: '100%', 
          height: 'auto',
          margin: '0 auto',
        }}
      >
        {/* Hero Section */}
        <section 
          style={{ 
            height: '100vh', 
            width: '100%', 
            scrollSnapAlign: 'start', // Align snap to start of section
          }}
        >
          <HeroBanner />
        </section>
        <section
          style={{
            height: '100vh',
            width: '100%',
            scrollSnapAlign: 'start',

          }}
          >
            <ProductLineSection/>
        </section>
        {/* Product Categories Section */}
        <section 
          style={{ 
            height: '100vh', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            scrollSnapAlign: 'start', // Align snap to start of section
          }}
        >
          <ProductCategories />
        </section>

        {/* Featured Products Section */}
        <section 
          style={{ 
            height: '100vh', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            scrollSnapAlign: 'start', // Align snap to start of section
          }}
        >
          <FeaturedProducts />
        </section>

        {/* Store Finder Section */}
        <section 
          style={{ 
            height: '100vh', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            scrollSnapAlign: 'start', // Align snap to start of section
          }}
        >
          <StoreFinder />
        </section>

        {/* Warning Alert Section */}
        <section 
          style={{ 
            height: 'auto', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: 2,
            scrollSnapAlign: 'start', // Align snap to start of section
          }}
        >
          <WarningAlert /> {/* Display warning alert */}
        </section>
      </Box>

      {/* Footer */}
      <Box 
        sx={{ 
          width: '100%', 
          position: 'relative',
          bottom: 0,
          zIndex: 1000 
        }}
      >
        <Footer />
      </Box>

      {/* Age Verification Modal */}
      <AgeVerificationModal
        open={isModalOpen}
        onClose={handleAgeVerification}
      />
    </Box>
  );
};

export default ECigarettePage;