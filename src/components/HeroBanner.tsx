import React from 'react';
import { 
  Box,
  IconButton,
  SxProps,
  Theme
} from '@mui/material';
import { 
  ArrowBackIos as PrevIcon, 
  ArrowForwardIos as NextIcon 
} from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Autoplay, 
  Pagination, 
  EffectFade, 
  Navigation 
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BannerItem {
  image: string;
}

const heroBanners: BannerItem[] = [
  { image: 'https://i.imgur.com/8KYzJP0.png' },
  { image: 'https://i.imgur.com/faAYOkQ.png' },
  { image: 'https://i.imgur.com/98jaRdF.png' },
  { image: 'https://i.imgur.com/DKqxxq5.png' }
];

const HeroBanner: React.FC = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%' 
    }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        loop={true} 
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          type: 'bullets',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          ['--swiper-navigation-size' as any]: '0px' // Ẩn navigation mặc định
        }}
      >
        {heroBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </SwiperSlide>
        ))}
        
        {/* Custom Pagination */}
        <Box
          className="custom-pagination"
          sx={{
            position: 'absolute',
            bottom: { xs: 10, md: 20 },
            left: '10%',
            zIndex: 10,
            display: 'flex',
            '& .swiper-pagination-bullet': {
              background: 'rgba(255,255,255,0.7)',
              margin: '0 4px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            },
            '& .swiper-pagination-bullet-active': {
              background: 'white', 
              width: '20px',
              borderRadius: '10px',
              opacity: 1
            }
          }}
        />

        {/* Custom Navigation Buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 10,
            transform: 'translateY(-50%)',
            px: { xs: 1, md: 2 }
          }}
        >
          <IconButton 
            className="custom-prev"
            sx={{
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              borderRadius: '50%',
              width: { xs: 30, md: 50 },
              height: { xs: 30, md: 50 },
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.5)'
              }
            }}
          >
             <PrevIcon />
          </IconButton>
          <IconButton 
            className="custom-next"
            sx={{
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              borderRadius: '50%',
              width: { xs: 30, md: 50 },
              height: { xs: 30, md: 50 },
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.5)'
              }
            }}
          >
            <NextIcon />
          </IconButton>
        </Box>
      </Swiper>
    </Box>
  );
};

export default HeroBanner;