import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Facebook />, 
      color: '#1877F2', 
      href: 'https://facebook.com' 
    },
    { 
      icon: <Twitter />, 
      color: '#1DA1F2', 
      href: 'https://twitter.com' 
    },
    { 
      icon: <Instagram />, 
      color: '#E1306C', 
      href: 'https://instagram.com' 
    },
    { 
      icon: <LinkedIn />, 
      color: '#0A66C2', 
      href: 'https://linkedin.com' 
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        py: 6,
        px: 2,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h5" 
                color="primary" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                E-Cigarette Store
              </Typography>
              <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
                Chúng tôi cung cấp các sản phẩm thuốc lá điện tử chất lượng cao, 
                cam kết mang đến trải nghiệm tốt nhất cho khách hàng.
              </Typography>
              
              <Stack spacing={1}>
                <Box display="flex" alignItems="center">
                  <Email sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">support@ecigarette.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">1900 xxxx</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">123 Đường ABC, Quận XYZ</Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                color="inherit" 
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                Liên Kết Nhanh
              </Typography>
              <Grid container spacing={1}>
                {[
                  { text: 'Trang Chủ', href: '/' },
                  { text: 'Sản Phẩm', href: '/products' },
                  { text: 'Về Chúng Tôi', href: '/about' },
                  { text: 'Liên Hệ', href: '/contact' }
                ].map((link) => (
                  <Grid item xs={6} key={link.text}>
                    <RouterLink 
                      to={link.href} 
                      style={{ textDecoration: 'none' }} 
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'inherit', 
                          transition: 'color 0.3s',
                          '&:hover': { 
                            color: 'primary.main',
                            transform: 'translateX(5px)'
                          }
                        }}
                      >
                        {link.text}
                      </Typography>
                    </RouterLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                color="inherit" 
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                Kết Nối Với Chúng Tôi
              </Typography>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton 
                      href={social.href} 
                      target="_blank"
                      sx={{ 
                        color: social.color, 
                        mx: 1,
                        transition: 'transform 0.3s',
                        '&:hover': { 
                          backgroundColor: `${social.color}20` 
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Divider 
            sx={{ 
              my: 4, 
              backgroundColor: 'rgba(255,255,255,0.2)' 
            }} 
          />

          <Typography 
            variant="body2" 
            color="inherit" 
            align="center"
            sx={{
              opacity: 0.7,
              fontStyle: 'italic'
            }}
          >
            © {new Date().getFullYear()} E-Cigarette Store. Bản Quyền Được Bảo Lưu.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;