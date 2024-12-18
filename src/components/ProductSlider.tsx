import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Button 
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Product } from '../types/Product';
import { sampleProducts } from '../types/Product';
import { useCart } from '../contexts/CartContext';

const ProductSlider: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <Box sx={{ 
      width: '100%', 
      py: 4, 
      backgroundColor: '#f5f5f5' 
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ mb: 4 }}
      >
        Sản Phẩm Nổi Bật
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Responsive breakpoints
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {sampleProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={
                  Array.isArray(product.image) 
                    ? product.image[0] 
                    : product.image || '/default-image.png'
                }
                alt={product.name}
              />
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="div"
                >
                  {product.name}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                >
                  {product.description}
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mt: 2 
                  }}
                >
                  <Typography 
                    variant="h6" 
                    color="primary"
                  >
                    {product.price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </Typography>
                  
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="small"
                    disabled={product.stock === 0}
                    onClick={() => addToCart(product)}
                  >
                    {product.stock === 0 ? 'Hết Hàng' : 'Thêm Giỏ Hàng'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductSlider;