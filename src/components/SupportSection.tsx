import React from 'react';
import Footer from './Footer';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Breadcrumb from './Breadcrumb'; // Import the Breadcrumb component

const CompanyInfo: React.FC = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        padding: 4, 
        borderRadius: 2, 
        backgroundColor: '#ffffff', // Light background color
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Softer shadow
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)', // Slightly scale on hover
        }
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#000000' }}>
        Công ty TNHH InseePod
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>Địa Chỉ:</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>26 Lê Văn Lương, Phường 3, Quận 7, TP.HCM</Typography>
      
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>Số Điện Thoại:</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>0965 533 1132</Typography>
      
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>Email:</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>info.inseepod@gmail.com</Typography>
      
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>Thời Gian Làm Việc:</Typography>
      <Typography variant="body1">Thứ Hai - Thứ Sáu: 8:00 - 17:00</Typography>
      <Typography variant="body1">Thứ Bảy: 9:00 - 12:00</Typography>
    </Paper>
  );
};

const MapSection: React.FC = () => {
  return (
    <Paper elevation={6} className="rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.123456789!3d10.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752abcd1234567%3A0x123456789abcdef0!2zMTIzIEjhuq9uZyBBQkMsIFF1ậnIFhZ!5e0!3m2!1sen!2s!4v1234567890123" 
        width="100%" 
        height="350" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
      ></iframe>
    </Paper>
  );
};

const ContactPage: React.FC = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Breadcrumb */}
      <Breadcrumb /> {/* Add the Breadcrumb component here */}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CompanyInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <MapSection />
        </Grid>
      </Grid>
      
    </Container>
  );
};

const SupportSection: React.FC = () => {
    return (
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
    )
}

export default ContactPage;