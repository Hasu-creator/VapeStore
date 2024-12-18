import React from 'react';
import Footer from './Footer';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component

const AboutUs: React.FC = () => {
  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: '#302f2f', 
        minHeight: '100vh' 
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumb /> {/* Add the Breadcrumb component here */}

      {/* Title */}
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          marginBottom: 4, 
          fontWeight: 'bold', 
          color: '#C8E7FF' 
        }}
      >
        Về chúng tôi
      </Typography>

      {/* Image Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: 4 
        }}
      >
        <img 
          src="https://i.imgur.com/wmPcjsU.png" 
          alt="About Us" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '8px' 
          }} 
        />
      </Box>

      {/* Formation Section */}
      <Typography 
        variant="h4" 
        sx={{ 
          marginBottom: 2, 
          fontWeight: 'bold', 
          color: '#C8E7FF',
          textAlign: 'center' 
        }}
      >
        Sự hình thành
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          marginBottom: 4, 
          color: '#C8E7FF',
          textAlign: 'center'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut morbi purus, neque sollicitudin. Tincidunt dictum lacus consequat pharetra, ornare posuere. Ultrices ut vitae at nibh. Placerat id neque ac aliquet dignissim gravida suspendisse. Sapien risus non arcu netus. Enim laoreet tincidunt ut commodo. Diam aliquet.
      </Typography>

      {/* Three Boxes Section - Updated Layout */}
      <Grid container spacing={4}>
        {/* Mission Box */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 2, 
              borderRadius: 2, 
              display: 'flex', 
              alignItems: 'center',
              minHeight: '300px' 
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img 
                  src="https://i.imgur.com/8kQc0LS.png" 
                  alt="Mission" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px' 
                }} 
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Sứ mệnh
                </Typography>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: '#000000', margin: '0 auto', my: 1 }} /> {/* Decorative line */}
                <Typography variant="h5" sx={{ color: '#000000' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aliquam, amet, egestas nec integer hendrerit lacus, lectus mauris. Turpis pellentesque nisi est pretium integer erat ligula nisl sed. Et augue dolor tellus elit egestas commodo. Consectetur odio bibendum aenean diam pretium diam et, netus. Accumsan.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Value Box */}
        <Grid item xs={12}>
          <Paper
            elevation={3} 
            sx={{ 
              padding: 2, 
              borderRadius: 2, 
              display: 'flex', 
              alignItems: 'center',
              minHeight: '300px' // Set a minimum height for the box
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Giá trị mang lại
                </Typography>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: '#000000', margin: '0 auto', my: 1 }} /> {/* Decorative line */}
                <Typography variant="h5" sx={{ color: '#000000' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aliquam, amet, egestas nec integer hendrerit lacus, lectus mauris. Turpis pellentesque nisi est pretium integer erat ligula nisl sed. Et augue dolor tellus elit egestas commodo. Consectetur odio bibendum aenean diam pretium diam et, netus. Accumsan.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img 
                  src="https://i.imgur.com/8v2lPAf.png" 
                  alt="Value" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px' 
                  }} 
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Aspiration Box */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 2, 
              borderRadius: 2, 
              display: 'flex', 
              alignItems: 'center',
              minHeight: '300px' 
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img 
                  src="https://i.imgur.com/aIZ82hA.png" 
                  alt="Aspiration" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px' 
                  }} 
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Khát vọng
                </Typography>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: '#000000', margin: '0 auto', my: 1 }} /> 
                <Typography variant="h5" sx={{ color: '#000000' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aliquam, amet, egestas nec integer hendrerit lacus, lectus mauris. Turpis pellentesque nisi est pretium integer erat ligula nisl sed. Et augue dolor tellus elit egestas commodo. Consectetur odio bibendum aenean diam pretium diam et, netus. Accumsan.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
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
    </Box>
  );
};

export default AboutUs;