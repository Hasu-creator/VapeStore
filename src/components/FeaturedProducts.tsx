import React, { useEffect, useRef, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid 
} from '@mui/material';
import { gsap } from 'gsap';

const IntroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); // Initialize as an array of HTMLDivElement or null

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Set to false when not in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // GSAP animations for text
      gsap.from(textRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
      });

      // GSAP animations for images with fade-in effect
      imageRefs.current.forEach((image, index) => {
        gsap.to(image, {
          duration: 1,
          opacity: 1, // Fade in effect
          delay: index * 0.2, // staggered delay
          ease: 'power2.out',
        });
      });
    } else {
      // Fade out effect when not visible
      imageRefs.current.forEach((image, index) => {
        gsap.to(image, {
          duration: 1,
          opacity: 0, // Fade out effect
          ease: 'power2.out',
        });
      });
    }
  }, [isVisible]);

  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} ref={textRef}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              color: '#C8E7FF',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            The Super Vape Platform
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              lineHeight: 1.6,
              textAlign: { xs: 'center', md: 'left' },
              color: '#C8E7FF' // Change to the desired color
            }}
          >
            Chúng tôi là nền tảng hàng đầu trong việc cung cấp những sản phẩm vape chất lượng cao và độc đáo. 
            Với cam kết mang đến trải nghiệm vaping tuyệt vời nhất, chúng tôi không ngừng nghiên cứu 
            và phát triển những dòng sản phẩm tiên phong. 

            Từ những thiết bị hiện đại đến tinh dầu đa dạng, chúng tôi luôn đặt sự an toàn 
            và sự hài lòng của khách hàng lên hàng đầu. Chúng tôi tin rằng mỗi sản phẩm 
            đều là một câu chuyện, một trải nghiệm riêng biệt.

            Hãy cùng khám phá thế giới vape đầy sáng tạo và đẳng cấp với chúng tôi!
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' } 
            }}
          >
            <Button 
              variant="outlined" // Change to outlined to create a transparent effect
              sx={{ 
                borderColor: '#C8E7FF', // Set border color
                color: '#C8E7FF', // Set text color
                backgroundColor: 'transparent', // Make background transparent
                '&:hover': {
                  backgroundColor: 'rgba(200, 231, 255, 0.1)', // Optional: Add hover effect
                },
                px: 4, 
                py: 1.5, 
                fontSize: '1rem' 
              }}
              href="/about"
            >
              Xem thêm
            </Button>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} ref={ref}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              height: { xs: 400, md: 500 }
            }}
          >
            {/* Image 1 */}
            <Box
              ref={(el) => (imageRefs.current[0] = el as HTMLDivElement | null)}
              sx={{
                width: '30%',
                backgroundImage: 'url(https://i.imgur.com/TiP4xNq.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                boxShadow: 3,
                opacity: 0, // Start hidden
              }}
            />

            {/* Image 2 */}
            <Box
              ref={(el) => (imageRefs.current[1] = el as HTMLDivElement | null)}
              sx={{
                width: '30%',
                backgroundImage: 'url(https://i.imgur.com/ubtAPjK.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                boxShadow: 3,
                opacity: 0, // Start hidden
              }}
            />

            {/* Image 3 */}
            <Box
              ref={(el) => (imageRefs.current[2] = el as HTMLDivElement | null)}
              sx={{
                width: '30%',
                backgroundImage: 'url(https://i.imgur.com/QwsKAsZ.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                boxShadow: 3,
                opacity: 0, // Start hidden
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroSection;