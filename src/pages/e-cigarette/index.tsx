// // ECigarettePage.tsx
// import React, { useState, useEffect } from 'react';
// import AgeVerificationModal from '../../components/AgeVerificationModal';

// import Header from '../../components/Header';
// import HeroBanner from '../../components/HeroBanner';
// import ProductCategories from '../../components/ProductCategories';
// import FeaturedProducts from '../../components/FeaturedProducts';
// import AboutUs from '../../components/AboutUs';
// import NewsSection from '../../components/NewsSection';
// import SupportSection from '../../components/SupportSection';
// import ContactSection from '../../components/ContactSection';
// import Footer from '../../components/Footer';

// const ECigarettePage: React.FC = () => {
//   const [isAgeVerified, setIsAgeVerified] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const handleAgeVerification = () => {
//     setIsAgeVerified(true);
//     setIsModalOpen(false);
//   };

//   // Ngăn không cho scroll body khi modal mở
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isModalOpen]);

//   return (
//     <div 
//       style={{ 
//         position: 'relative', 
//         height: '100%',
//         filter: isModalOpen ? 'brightness(0.5)' : 'none',
//         transition: 'filter 0.3s ease'
//       }}
//     >
//       {/* Hiển thị toàn bộ nội dung trang */}
//       <Header />
//       <HeroBanner />
//       <ProductCategories />
//       <FeaturedProducts />
//       <AboutUs />
//       <NewsSection />
//       <SupportSection />
//       <ContactSection />
//       <Footer />

//       {/* Modal xác thực độ tuổi */}
//       <AgeVerificationModal
//         open={isModalOpen}
//         onClose={handleAgeVerification}
//       />
//     </div>
//   );
// };

// export default ECigarettePage;
