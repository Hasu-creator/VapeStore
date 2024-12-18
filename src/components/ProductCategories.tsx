import React from 'react';
import { 
  Paper, 
  Typography, 
  Box, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Navigation, 
  Pagination, 
  Autoplay, 
  EffectCoverflow 
} from 'swiper/modules';
import anime from 'animejs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'hover.css'; // Import hover.css

interface CategoryItem {
  name: string;
  icon: string;
  description: string;
}

const categories: CategoryItem[] = [
  { 
    name: 'Delicate', 
    icon: 'https://i.imgur.com/a4xXD2m.png',
    description: 'Tinh tế và sang trọng'
  },
  { 
    name: 'Quality', 
    icon: 'https://i.imgur.com/H9ZFxvf.png',
    description: 'Chuyên nghiệp và đẳng cấp'
  },
  { 
    name: 'Elegan', 
    icon: 'https://i.imgur.com/hDGpa5x.png',
    description: 'Lịch lãm và tinh tế'
  },
  { 
    name: 'Energy', 
    icon: 'https://i.imgur.com/XJPcsdz.png',
    description: 'Năng lượng mạnh mẽ'
  },
  { 
    name: 'Naughty', 
    icon: 'https://i.imgur.com/0aqYouy.png',
    description: 'Phá cách và táo bạo'
  }
];

const ProductCategories: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation effect on mount
  React.useEffect(() => {
    anime({
      targets: '.category-item',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Stagger animation for each item
    });
  }, []);

  return (
    <Container sx={{ py: 4, position: 'relative' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: 5,
          fontWeight: 'bold',
          color: '#C8E7FF',
          textTransform: 'uppercase',
          letterSpacing: 2
        }}
      >
        Danh Mục Sản Phẩm
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={isMobile ? "slide" : "coverflow"}
        centeredSlides={!isMobile}
        slidesPerView={isMobile ? 2 : 3}
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={!isMobile ? {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        } : undefined}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        style={{ 
          paddingBottom: '50px',
          position: 'relative' 
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <Paper 
              elevation={6}
              className="category-item" // Add class for animation
              sx={{ 
                padding: 3, 
                textAlign: 'center',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 20px rgba(32,32,32,0.15)',
                  animation: 'pulse 1s infinite' // Add hover animation
                },
                height: '350px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'scale(0)',
                  transition: 'transform 0.3s ease',
                  borderRadius: 4,
                  zIndex: 1,
                  '&:hover': {
                    transform: 'scale(1)'
                  }
                }}
              />
              <Box 
                component="img"
                src={category.icon}
                alt={category.name}
                sx={{
                  width: 180, 
                  height: 180, 
                  mb: 2,
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.1))',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)' 
                  }
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  color: '#453f3f',
                  mb: 1
                }}
              >
                {category.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  opacity: 0.7
                }}
              >
                {category.description}
              </Typography>
            </Paper>
          </SwiperSlide>
        ))}
        
        {/* Navigation Arrows with increased spacing */}
        <Box 
          className="swiper-button-prev"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '5px', // Increased spacing
            transform: 'translateY(-50%)',
            color: '#C8E7FF',
            cursor: 'pointer',
            zIndex: 10
          }}
        />
        <Box 
          className="swiper-button-next"
          sx={{
            position: 'absolute',
            top: '50%',
            right: '5px', // Increased spacing
            transform: 'translateY(-50%)',
            color: '#C8E7FF',
            cursor: 'pointer',
            zIndex: 10
          }}
        />
      </Swiper>
    </Container>
  );
};

export default ProductCategories;